module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "import"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"],
      },
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/no-restricted-paths": [
      "error",
      {
        zones: [
          {
            target: "./core",
            from: "./components",
          },
          {
            target: "./core",
            from: "./lib",
          },
          {
            target: "./core",
            from: "./pages",
          },
          {
            target: "./lib",
            from: "./pages",
          },
          {
            target: "./components",
            from: "./pages",
          },
        ],
      },
    ],
  },
};
