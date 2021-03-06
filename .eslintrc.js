module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "consistent-return": "error",
        "indent": ["warn", 4, { "SwitchCase": 1 }],
        "semi": ["warn", "always"],
        "space-unary-ops": 2,
        "comma-dangle": ["error", "never"],
        "arrow-parens": ["error", "always"],
        "dot-notation": "off",
        "max-len": "off",
        "import/no-cycle": "off",
        'import/prefer-default-export': "off",
        "import/no-named-as-default-member": "off",
        "import/no-named-as-default": "off",
        "radix": ["error", "as-needed"],
        "object-curly-newline": "off",
        "no-else-return": "warn",
        "no-use-before-define": "off",
        "no-restricted-syntax": "off",
        "no-continue": "off",
        "no-bitwise": "off",
        "no-param-reassign": ["error", { "props": false }],
        "no-unused-vars": ["warn"],
        "no-console": "off",
        "no-plusplus": "off",
        "no-underscore-dangle": "off",
        "no-await-in-loop": "off",
        "no-restricted-properties": "off",
        "no-restricted-globals": "off",
        "no-shadow": "off",
        "no-case-declarations": "off",
        "no-nested-ternary": "off",
        "no-debugger": "off",
        "func-names": ["error", "as-needed"],
        "prefer-destructuring": "off",
        "jsx-a11y/label-has-associated-control": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/no-autofocus": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off",
        "jsx-a11y/label-has-for": "off",
        "react/jsx-indent": ["warn", 4],
        "react/jsx-indent-props": ["warn", 4],
        "react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx"] }],
        "react/jsx-props-no-spreading": "off",
        "react/state-in-constructor": "off",
        "react/static-property-placement": ["warn", "static public field"],
        "react/forbid-prop-types": ["error", { "forbid": [], "checkContextTypes": true, "checkChildContextTypes": true }],
        "react/require-default-props": "off",
        "react/sort-comp": "off",
        "react/prop-types": ["warn", { ignore: ['children', 'className', 'classes'] }],
        "react/destructuring-assignment": "off",
        "react/no-did-update-set-state": "off",
        "react/no-access-state-in-setstate": "off",
        "react/jsx-no-target-blank": ["error", { "enforceDynamicLinks": "never" }],
        "react/default-props-match-prop-types": ["error", { "allowRequiredDefaults": true }],
        "react/no-array-index-key": "off",
        "react/no-unused-prop-types": "warn",
        "react/no-unused-state": "warn",
        "react/no-danger": "off",
        "linebreak-style": "off",
        "arrow-body-style": "off",
        "arrow-parens": "off"
    }
  };
  