import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import reactRefresh from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import';

export default [
  {
    ignores: [
      "node_modules",
      "scripts/*",
      "config/*",
      "pnpm-lock.yaml",
      "pnpm-workspace.yaml",
      ".DS_Store",
      "package.json",
      "tsconfig.json",
      "**/*.md",
      "build",
      ".eslintrc.cjs",
      "eslint.config.js",
      "**/.*"
    ],
  },
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        Edit: 'writable',
        console: 'writable',
        _: 'writable',
        $: 'writable',
      },
      ecmaFeatures: {
        jsx: true,
      },
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      prettier,
      '@typescript-eslint': typescriptEslint,
      'react-refresh': reactRefresh,
      import: importPlugin,
    },

    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...typescriptEslint.configs.recommended.rules,
      ...prettier.configs.recommended.rules,
      'prettier/prettier': 'error',
    },

    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];