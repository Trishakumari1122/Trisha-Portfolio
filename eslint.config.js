import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // Ignore build artifacts
  { ignores: ["dist"] },

  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      // React Hooks best practices
      ...reactHooks.configs.recommended.rules,

      // Vite + React fast refresh rule
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ],

      // Allow unused variables (can customize for stricter linting)
      "@typescript-eslint/no-unused-vars": "off"
    },
  }
);
