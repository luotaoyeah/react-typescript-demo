const webpack = require("webpack");

module.exports = function override(config) {
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
