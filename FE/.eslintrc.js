module.exports = {
  env: {
    browser: true,
    node: false,
    es2021: true,
  },
  extends: ["eslint:recommended", "airbnb", "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["import", "prettier", "html"],
  rules: {
    "max-len": ["error", { code: 80 }],
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
};