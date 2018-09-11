const rewireLess = require("react-app-rewire-less");
const webpack = require("webpack");

module.exports = function override(config, env) {
  /*
   * 覆盖 antd 的样式
   */
  config = rewireLess.withLoaderOptions({
    modifyVars: { "@border-radius-base": "3px" },
    javascriptEnabled: true
  })(config, env);

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "window.$": "jquery"
    })
  ]);

  return config;
};
