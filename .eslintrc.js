module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  // Set the JavaScript parser options
  parserOptions: {
    ecmaFeatures: {
      destructuring: true,
      // Return statements are allowed in global scope
      globalReturn: true,
      // impliedStric
      impliedStrict: true,
      // Enable the JSX
      jsx: true,
      modules: true,
    },
    project: './tsconfig.json',
    sourceType: 'module',
    // ECMAScript Vsersion
    ecmaVersion: 6,
  },
  plugins: ['react', '@typescript-eslint'],
  /**
   * "off" 或 0 - Close the rules
   * "warn" 或 1 - Open the rules，level：warn (Does not exit App),
   * "error" 或 2 - Open the rules，level：error (Exit App)
   */
  rules: {
    'block-spacing': 2,
    quotes: [2, 'double'],
    // Forces 2 Spaces to be indented
    indent: [2, 2, { SwitchCase: 1 }],
    camelcase: 0,
    '@typescript-eslint/camelcase': ['off', {properties: 'always'}],
    'no-var': 2,
    'no-unused-vars': 0,
    'no-debugger': 0,
    // A semicolon is required at the end of a statement
    semi: 2,
    'spaced-comment': 2,
    'no-const-assign': 2,
    // 在创建对象字面量时不允许键重复
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    // Function arguments cannot be repeated(函数参数不能重复)
    'no-dupe-args': 2,
    // The contents of a block statement cannot be empty(块语句中的内容不能为空)
    'no-empty': 2,
    'no-func-assign': 2,
    // Duplicate declarations of variables are prohibited(禁止重复声明变量)
    'no-redeclare': 2,
    'no-spaced-func': 2,
    curly: [2, 'all'],
    // Controls the Spaces before and after the comma(控制逗号前后的空格)
    'comma-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ],
    // Do not mix tabs and Spaces(禁止混用tab和空格)
    'no-mixed-spaces-and-tabs': 2,
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    'linebreak-style': [1, 'windows'],
    'lines-around-comment': [
      1,
      {
        beforeBlockComment: true,
      },
    ],
    // Performs consistent spacing within the braces of the object text(对象文字的大括号内执行一致的间距)
    'object-curly-spacing': [1, 'always'],
    // Use === instead of ==
    eqeqeq: [2, 'allow-null'],
    // Forces the maximum length of a row(强制一行的最大长度)
    'max-len': [1, 200],
    // Duplicate module imports are not allowed(禁止重复模块导入)
    'no-duplicate-imports': 2,
    ///////////////////
    //  typescript   //
    //////////////////
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    //////////////
    //  React   //
    //////////////
    // Verify that JSX has the key attribute in an array or iterator, turned off by default
    // 在数组或迭代器中验证JSX具有key属性
    'react/jsx-key': 2,
    // Forces the consistent use of double quotes in JSX quotes(强制在JSX属性（jsx-quotes）中一致使用双引号)
    'jsx-quotes': [2, 'prefer-double'],
    // Do not use deprecated methods(不使用弃用的方法)
    'react/no-deprecated': 1,
    // 关闭属性
    'react/prop-types': 0,
    // Verify that props are indented in JSX(验证JSX中的props缩进)
    'react/jsx-indent-props': [2, 2],
    // Undeclared variables are forbidden in JSX(在JSX中禁止未声明的变量)
    'react/jsx-no-undef': 1,
    // Preventing loss of React when using JSX(使用JSX时防止丢失React)
    'react/react-in-jsx-scope': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
  },
  settings: {
    'import/ignore': ['node_modules'],
    react: {
      version: 'detect',
    },
  },
};
