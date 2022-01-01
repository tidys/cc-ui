const Path = require('path');


module.exports = {
    pages: {
        index: {
            entry: 'examples/main.ts',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    // 扩展 webpack 配置，使 packages 加入编译
    // chainWebpack: config => {
    //     config.module
    //         .rule('ts')
    //         .include
    //         .add(Path.join(__dirname, 'packages'))
    //         .end()
    //         .use('babel')
    //         .loader('babel-loader')
    //         .tap(options => {
    //             return options;
    //         });
    // }
};
