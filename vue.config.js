const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  pwa: {
    themeColor: "#ffffff",
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
  },

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "src/styles/global.scss")],
    },
  },

  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Mariano's Portfolio";
      return args;
    });
  },
});
