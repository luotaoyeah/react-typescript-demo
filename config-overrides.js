const rewireLess = require("react-app-rewire-less");

module.exports = function override(config, env) {
  /*
   * 覆盖 antd 的样式
   */
  config = rewireLess.withLoaderOptions({
    modifyVars: { "@border-radius-base": "3px" },
    javascriptEnabled: true
  })(config, env);

  return config;
};
