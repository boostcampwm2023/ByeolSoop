module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    ecmaVersion: "latest",
    sourceType: "module",
  },
  root: true,
  env: {
    browser: true,
    node: false,
    es2021: true,
    jest: true,
  },
  extends: ["plugin:@typescript-eslint/recommended", "airbnb", "prettier"],

  plugins: ["import", "@typescript-eslint/eslint-plugin", "prettier"],
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-unsafe-argument": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/require-await": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-unsafe-declaration-merging": "error",
    "max-len": ["error", { code: 80 }],
    "prettier/prettier": "error",
  },
};
