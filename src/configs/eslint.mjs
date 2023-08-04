export default {
  rules: {
    "accessor-pairs": "error",
    "array-bracket-newline": "off",
    "array-bracket-spacing": "off",
    "array-callback-return": "error",
    "array-element-newline": "off",
    "arrow-body-style": "off",
    "arrow-parens": "off",
    "arrow-spacing": "off",
    "block-scoped-var": "error",
    "block-spacing": "off",
    "brace-style": "off",
    camelcase: "off",
    "capitalized-comments": "off",
    "class-methods-use-this": "error",
    "comma-dangle": "off",
    "comma-spacing": "off",
    "comma-style": "off",
    complexity: ["error", { max: 10 }],
    "computed-property-spacing": "off",
    "consistent-this": "off",
    "consistent-return": "error",
    "constructor-super": "error",
    curly: "off",
    "default-case": "error",
    "default-case-last": "error",
    "default-param-last": "error",
    "dot-location": "off",
    "dot-notation": "off",
    "eol-last": "off",
    eqeqeq: [
      "error",
      "always",
      {
        null: "ignore",
      },
    ],
    "for-direction": "error",
    "func-call-spacing": "off",
    "func-name-matching": "error",
    "func-names": "off",
    "func-style": "off",
    "function-call-argument-newline": "off",
    "function-paren-newline": "off",
    "generator-star-spacing": "off",
    "getter-return": "error",
    "grouped-accessor-pairs": "off",
    "guard-for-in": "error",
    "handle-callback-err": "error",
    "id-denylist": "off",
    "id-length": "off",
    "id-match": "off",
    "implicit-arrow-linebreak": "off",
    indent: "off",
    "init-declarations": "off",
    "jsx-quotes": "off",
    "key-spacing": "off",
    "keyword-spacing": "off",
    "line-comment-position": "off",
    "linebreak-style": "off",
    "lines-around-comment": "off",
    "lines-between-class-members": "off",
    "logical-assignment-operators": "off",
    "max-classes-per-file": "off",
    "max-depth": "off",
    "max-len": "off",
    "max-lines": "off",
    "max-lines-per-function": "off",
    "max-nested-callbacks": "off",
    "max-params": "off",
    "max-statements": "off",
    "max-statements-per-line": "off",
    "multiline-comment-style": "off",
    "multiline-ternary": "off",
    "new-cap": "off",
    "new-parens": "off",
    "newline-per-chained-call": "off",
    "no-alert": "off",
    "no-array-constructor": "error",
    "no-async-promise-executor": "error",
    "no-await-in-loop": "off",
    "no-bitwise": "off",
    "no-buffer-constructor": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-confusing-arrow": "error",
    "no-console": "off",
    "no-const-assign": "error",
    "no-constant-binary-expression": "error",
    "no-constant-condition": [
      "error",
      {
        checkLoops: false,
      },
    ],
    "no-constructor-return": "error",
    "no-continue": "off",
    "no-control-regex": "error",
    "no-debugger": "off",
    "no-delete-var": "off",
    "no-div-regex": "off",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": "off",
    "no-empty-character-class": "error",
    "no-empty-function": "off",
    "no-empty-pattern": "off",
    "no-empty-static-block": "off",
    "no-eq-null": "off",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "off",
    "no-extra-parens": "off",
    "no-extra-semi": "off",
    "no-fallthrough": [
      "error",
      {
        commentPattern: "fallthrough",
      },
    ],
    "no-func-assign": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": ["error", { allow: ["!!"] }],
    "no-implicit-globals": "error",
    "no-inline-comments": "off",
    "no-inner-declarations": "off",
    "no-invalid-regexp": "error",
    "no-invalid-this": "error",
    "no-irregular-whitespace": "off",
    "no-labels": "off",
    "no-lonely-if": "off",
    "no-magic-numbers": "off",
    "no-misleading-character-class": "error",
    // Prettier conflicts with this rule.
    "no-mixed-operators": "off",
    "no-mixed-spaces-and-tabs": "off",
    "no-multi-assign": "off",
    "no-multi-spaces": "off",
    "no-multiple-empty-lines": "off",
    "no-negated-condition": "off",
    "no-nested-ternary": "off",
    "no-new-native-nonconstructor": "error",
    "no-new-object": "error",
    "no-new-symbol": "off",
    "no-nonoctal-decimal-escape": "error",
    "no-obj-calls": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-promise-executor-return": "error",
    "no-prototype-builtins": "error",
    "no-redeclare": "error",
    "no-regex-spaces": "error",
    "no-restricted-exports": "off",
    "no-restricted-globals": "off",
    "no-restricted-imports": "off",
    "no-restricted-properties": "off",
    "no-restricted-syntax": "off",
    "no-self-assign": "off",
    "no-shadow": "off",
    "no-shadow-restricted-names": "error",
    "no-sparse-arrays": "error",
    "no-tabs": "off",
    "no-ternary": "off",
    "no-this-before-super": "error",
    "no-trailing-spaces": "off",
    "no-undef": "error",
    "no-undefined": "off",
    "no-underscore-dangle": "off",
    "no-unexpected-multiline": "off",
    "no-unneeded-ternary": "off",
    "no-unreachable": "error",
    "no-unreachable-loop": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unsafe-optional-chaining": "error",
    "no-unused-labels": "error",
    "no-unused-vars": "error",
    "no-unused-private-class-members": "error",
    "no-use-before-define": ["error", { functions: false, classes: false }],
    "no-useless-backreference": "error",
    "no-useless-catch": "off",
    "no-useless-computed-key": "off",
    "no-useless-constructor": "error",
    "no-useless-escape": "error",
    "no-useless-rename": "error",
    "no-warning-comments": "off",
    "no-whitespace-before-property": "off",
    "no-with": "error",
    "nonblock-statement-body-position": "off",
    "object-curly-newline": "off",
    "object-curly-spacing": "off",
    "object-property-newline": "off",
    "object-shorthand": "off",
    "one-var": "off",
    "one-var-declaration-per-line": "off",
    "operator-assignment": "off",
    "operator-linebreak": "off",
    "padded-blocks": "off",
    "padding-line-between-statements": "off",
    "prefer-arrow-callback": "off",
    "prefer-destructuring": "off",
    "prefer-exponentiation-operator": "off",
    "prefer-named-capture-group": "off",
    "prefer-numeric-literals": "error",
    "prefer-object-spread": "error",
    "prefer-object-has-own": "off",
    "prefer-template": "off",
    "quote-props": "off",
    quotes: "off",
    "require-await": "off",
    "require-unicode-regexp": "off",
    "require-yield": "error",
    "rest-spread-spacing": "off",
    semi: "off",
    "semi-spacing": "off",
    "semi-style": "off",
    "sort-imports": "off",
    "sort-keys": "off",
    "sort-vars": "off",
    "space-before-blocks": "off",
    "space-before-function-paren": "off",
    "space-in-parens": "off",
    "space-infix-ops": "off",
    "space-unary-ops": "off",
    "spaced-comment": "off",
    strict: "off",
    "switch-colon-spacing": "off",
    "symbol-description": "off",
    "template-curly-spacing": "off",
    "template-tag-spacing": "off",
    "unicode-bom": "off",
    "use-isnan": "error",
    "valid-typeof": "error",
    "vars-on-top": "off",
    "wrap-iife": "error",
    "wrap-regex": "off",
    "yield-star-spacing": "off",
    yoda: "off",
    "no-dupe-else-if": "error",
    "no-duplicate-imports": [
      "error",
      {
        includeExports: true,
      },
    ],
    "no-else-return": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-floating-decimal": "error",
    "no-implied-eval": "error",
    "no-import-assign": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-loss-of-precision": "error",
    "no-mixed-requires": "error",
    "no-multi-str": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-require": "error",
    "no-new-wrappers": "error",
    "no-path-concat": "error",
    "no-proto": "error",
    "no-return-assign": "error",
    "no-return-await": "off",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-setter-return": "error",
    "no-template-curly-in-string": "error",
    "no-throw-literal": "error",
    "no-undef-init": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": "error",
    "prefer-const": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-regex-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    radix: "error",
    "require-atomic-updates": "error",
  },
};
