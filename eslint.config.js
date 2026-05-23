import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

// Custom rule: bloqueia preços/valores monetários no código-fonte público.
// Regra de negócio "No Price Tag" — única forma de obter orçamento é via Concierge.
const noPriceLeak = {
  meta: {
    type: 'problem',
    docs: { description: 'Proíbe exibição de preços monetários no código-fonte público.' },
    messages: {
      leaked:
        'Possível vazamento de preço detectado: "{{snippet}}". Esta LP nunca deve exibir valores monetários — direcione o usuário ao Concierge Digital.',
    },
    schema: [],
  },
  create(context) {
    const patterns = [
      /R\$\s*\d/i,
      /\bUS\$/i,
      /\b\d{1,3}(?:\.\d{3})+,\d{2}\b/,
      /\b\d+,\d{2}\s*(?:reais|brl)\b/i,
      /\bpre[çc]o\s*:?\s*\d/i,
      /\bvalor\s*:?\s*\d/i,
    ]
    const check = (node, value) => {
      if (typeof value !== 'string') return
      for (const re of patterns) {
        const m = value.match(re)
        if (m) {
          context.report({
            node,
            messageId: 'leaked',
            data: { snippet: m[0].slice(0, 40) },
          })
          return
        }
      }
    }
    return {
      Literal(node) { check(node, node.value) },
      TemplateElement(node) { check(node, node.value && node.value.cooked) },
      JSXText(node) { check(node, node.value) },
    }
  },
}

const businessRules = {
  rules: { 'no-price-leak': noPriceLeak },
}

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      business: businessRules,
    },
    rules: {
      'business/no-price-leak': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
])
