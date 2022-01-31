module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: "module"
  },
  plugins: ["react", "jest", "testing-library", "jest-dom"],
  rules: {
    "react/jsx-props-no-spreading": 0,
    "import/prefer-default-export": 0,
    "react/jsx-filename-extension": 0
  }
};
