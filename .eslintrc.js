module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    'quote-props': "off", //对象字面量中的属性名是否强制双引号
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};