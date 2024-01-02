const lazyImports = [
    // Add your module names here
    '@nestjs/websockets/socket-module',
    '@nestjs/microservices/microservices-module',
    'class-transformer/storage'
  ];
  

module.exports = function (options, webpack) {
  return {
    ...options,
    entry: ['./src/main-serve.ts'],
    externals: [],
    output: {
      ...options.output,
      libraryTarget: 'commonjs2',
    },
    plugins: [
      ...options.plugins,
      new webpack.IgnorePlugin({
        checkResource(resource) {
          // Ignoring non-essential modules for Lambda deployment
          return lazyImports.includes(resource);
        },
      }),
    ],
  };
};
