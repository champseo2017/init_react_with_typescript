import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['dist/'],
  },

  // --- บล็อกสำหรับ Source Code ใน src (TS/TSX) ---
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // --- เปลี่ยนมาใช้ชุดกฎสำหรับ React 17+ JSX Transform ---
      ...reactPlugin.configs['jsx-runtime'].rules,

      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': 'warn',
      ...jsxA11y.configs.recommended.rules,
      ...tseslint.configs.recommendedTypeChecked.rules,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // --- บล็อกสำหรับไฟล์ตั้งค่า (JS) ---
  {
    files: ['*.js', '*.cjs', '*.mjs'],
    rules: {
      ...js.configs.recommended.rules,
    },
  },

  // --- Prettier ต้องอยู่ตัวสุดท้ายเสมอ ---
  prettierConfig,
);
