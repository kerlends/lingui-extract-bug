const { addAfterLoader, loaderByName } = require("@craco/craco");

module.exports = {
  webpack: {
    configure: (webpackConfig, { env }) => {
      addAfterLoader(webpackConfig, loaderByName("babel-loader"), {
        loader: require.resolve("@lingui/loader"),
        test: /\.po$/,
      });
      return webpackConfig;
    },
  },
};
