#!/usr/bin/env node
// Guard-rail anti-price-leak para Tropical Park Kids.
// Falha o build se detectar qualquer string de preço nos arquivos da app.
// Conforme CLAUDE.md §4.1.

import { readdir, readFile, stat } from 'node:fs/promises'
import { join, relative } from 'node:path'

const ROOT = process.cwd()
const TARGET_DIRS = ['src']
const TARGET_FILES = ['index.html']

const SCAN_EXTENSIONS = new Set([
  '.ts',
  '.tsx',
  '.js',
  '.jsx',
  '.html',
  '.css',
  '.md',
])

const SKIP_DIRS = new Set([
  'node_modules',
  'dist',
  '.git',
  '.next',
  'build',
  'coverage',
  '.cache',
  'scripts',
])

// Padrões proibidos. Cada item: { name, pattern, allowSubstring? }
const PATTERNS = [
  {
    name: 'Símbolo R$ (Real brasileiro)',
    pattern: /R\$/,
  },
  {
    name: 'Valor monetário no formato BR (ex.: 4.590,00 ou 4590,00)',
    pattern: /\b\d{1,3}(?:[.\s]\d{3})*,\d{2}\b/,
  },
  {
    name: 'Valor numérico com milhar (ex.: 4.590)',
    pattern: /\b\d{1,3}\.\d{3}\b/,
  },
  {
    name: 'Valores literais conhecidos dos pacotes do cliente',
    pattern: /\b(4590|6150|7955|4\.590|6\.150|7\.955)\b/,
  },
]

async function* walk(dir) {
  let entries
  try {
    entries = await readdir(dir, { withFileTypes: true })
  } catch {
    return
  }
  for (const entry of entries) {
    if (SKIP_DIRS.has(entry.name)) continue
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      yield* walk(full)
    } else if (entry.isFile()) {
      yield full
    }
  }
}

async function scanFile(file) {
  const findings = []
  let content
  try {
    content = await readFile(file, 'utf8')
  } catch {
    return findings
  }
  const lines = content.split(/\r?\n/)
  for (const { name, pattern } of PATTERNS) {
    lines.forEach((line, i) => {
      const match = line.match(pattern)
      if (match) {
        findings.push({
          rule: name,
          file: relative(ROOT, file),
          line: i + 1,
          excerpt: line.trim().slice(0, 160),
          matched: match[0],
        })
      }
    })
  }
  return findings
}

async function gatherFiles() {
  const files = []
  for (const dir of TARGET_DIRS) {
    const abs = join(ROOT, dir)
    try {
      await stat(abs)
    } catch {
      continue
    }
    for await (const f of walk(abs)) {
      const ext = f.slice(f.lastIndexOf('.'))
      if (SCAN_EXTENSIONS.has(ext)) files.push(f)
    }
  }
  for (const f of TARGET_FILES) {
    const abs = join(ROOT, f)
    try {
      await stat(abs)
      files.push(abs)
    } catch {
      /* arquivo opcional */
    }
  }
  return files
}

async function main() {
  const files = await gatherFiles()
  const all = []
  for (const f of files) {
    const findings = await scanFile(f)
    all.push(...findings)
  }

  if (all.length === 0) {
    console.log(
      `✓ check-no-price-leak: ${files.length} arquivos verificados, nenhum vazamento detectado.`,
    )
    return
  }

  console.error('\nVazamento de preço detectado (CLAUDE.md §4.1):\n')
  for (const f of all) {
    console.error(`  [${f.rule}]`)
    console.error(`    ${f.file}:${f.line}  -> "${f.matched}"`)
    console.error(`    ${f.excerpt}\n`)
  }
  console.error(
    `Total: ${all.length} ocorrência(s). Build interrompido.\n`,
  )
  process.exit(1)
}

main().catch((err) => {
  console.error('Erro inesperado em check-no-price-leak:', err)
  process.exit(1)
})
