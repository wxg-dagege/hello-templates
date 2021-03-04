const path = require("path");
const { config } = require("process");
function resolve (dir) {
    return path.join(__dirname, "..", dir);
}
module.exports = {
    //将entry指向examples
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    chainWebpack: config => {
        config.module
        .rule('js')
        .include
            .add(resolve('packages'))
            .end()
        .use('babel')
            .loader('babel-loader')
            .tap(options => {
                return options
            })
    },
    lintOnSave: false//关闭eslint检查
}