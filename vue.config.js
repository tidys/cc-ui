const path = require('path')
module.exports = {
  lintOnSave: false,
  parallel: false,
  outputDir: path.resolve(__dirname, './dist-demo'),
  publicPath: "./", //(process.env.NODE_ENV === 'production') ? "cc-ui" : "",
  pages: {
    index: {
      entry: path.resolve(__dirname, 'demo/main.ts'),
      template: path.resolve(__dirname, 'demo/index.html'),
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    config.resolve.extensions.add('.json').add('.vue').add('.js').add('.ts');
    config.module
      .rule('ts')
      .test(/\.ts(x?)$/)
      .exclude.add(/node_modules/).end()
      .use('ts-loader')
      .loader('ts-loader')
      .options({
        // happyPackMode: true,
        transpileOnly: true,
        onlyCompileBundledFiles: true,
        appendTsSuffixTo: ['\\.vue$'],
        compilerOptions: {
          target: "es6",
          module: "es6",
          strict: false,
          // jsx: "preserve",
          // importHelpers: true,
          moduleResolution: "node",
          skipLibCheck: true,
          esModuleInterop: true,
          allowSyntheticDefaultImports: true,
          noImplicitAny: false,
          // noImplicitThis: false,
          lib: ['es6', 'dom'],
        }
      });
  }
}
