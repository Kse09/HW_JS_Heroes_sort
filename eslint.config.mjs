import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "coverage/**",
      "node_modules/**",
      "dist/**",
      "build/**",
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: [
      "**/__tests__/**/*.{js,mjs,cjs}",
      "**/*.test.{js,mjs,cjs}",
      "**/*.spec.{js,mjs,cjs}",
    ],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
]);