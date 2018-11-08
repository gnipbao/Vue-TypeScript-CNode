// vue.config.js
// https://cli.vuejs.org/zh/config/#vue-config-js
module.exports = {
  baseUrl: "/", // base url

  outputDir: "dist", // output dir

  // eslint-loader lint on save
  lintOnSave: process.env.NODE_ENV !== "production",

  // use the full build with in-browser compiler
  runtimeCompiler: false,

  // webpack config
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: () => {},

  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // production...
    } else {
      // development...
    }
  },

  // is generator source map
  productionSourceMap: true,

  // css config
  css: {
    extract: true, // ExtractTextPlugin
    // CSS source maps
    sourceMap: false,
    // css loader options
    loaderOptions: {},
    // css modules for all css / pre-processor files.
    modules: false
  },

  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require("os").cpus().length > 1,

  // PWA plugins config
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},

  // webpack-dev-server
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0",
    port: 3005,
    https: false,
    hotOnly: false,
    proxy: null, // proxy set
    before: app => {}
  },

  // plugins config
  pluginOptions: {
    // ...
  }
};
