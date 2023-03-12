const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      config.output.filename = 'container/js/[name].[contenthash:8].min.js'
      config.output.chunkFilename = 'container/js/[name].[contenthash:8].min.js'
      config.output.cssFilename = 'container/css/[name].[contenthash:8].css'
    } else {
      config.output.filename = 'container/js/[name].js'
      config.output.chunkFilename = 'container/js/[name].js';
    }
  }
});
