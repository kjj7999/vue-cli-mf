const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      config.output.filename = 'container/js/[name].[contenthash:8].min.js'
      config.output.chunkFilename = 'container/js/[name].[contenthash:8].min.js'
    } else {
      config.output.filename = 'container/js/[name].js'
      config.output.chunkFilename = 'container/js/[name].js';
    }
  },
  css: {
    extract: {
      filename: 'container/css/[name].[contenthash:8].css',
      chunkFilename: 'container/css/chunk-[name].[contenthash:8].css'
    }
  },
});
