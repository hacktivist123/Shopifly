module.exports = {
  "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "node": true
  },
  "extends": ["eslint:recommended", "plugin:prettier/recommended", "standard",  "standard-react"],
  "plugins": [
      "@react"
  ],
  "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module",
      "parser": "babel-eslint",
      "ecmaFeatures": {
        "jsx": true,
        "modules": true
    }
  },
  "rules": {
      "indent": [
          "error",
          "tab"
      ],
      "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
          "error",
          "single"
      ],
      "semi": [
          "error",
          "always"
      ],
      // don't force es6 functions to include space before paren
      "space-before-function-paren": 0,
    // allow specifying true explicitly for boolean props
      "react/jsx-boolean-value": 0
  }
};
