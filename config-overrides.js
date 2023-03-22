const { ProvidePlugin } = require('webpack')

module.exports = function (config, env) {
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.(m?js|ts)$/,
          enforce: 'pre',
          use: ['source-map-loader'],
        },
      ],
    },
    plugins: [
      ...config.plugins,
      new ProvidePlugin({
        process: 'process/browser',
      }),
    ],
    resolve: {
      ...config.resolve,
      fallback: {
        https: false,
        zlib: false,
        assert: require.resolve('assert'),
        buffer: require.resolve('buffer'),
        crypto: false,
        'crypto-browserify': require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    ignoreWarnings: [/Failed to parse source map/],
  }
}
