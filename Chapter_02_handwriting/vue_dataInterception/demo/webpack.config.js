const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js', // 入口
    output: {                // 出口
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve:{//路径查找的顺序,先找source，再找node_modules
        modules:[path.resolve(__dirname, 'source'), path.resolve(__dirname, 'node_modules')]
    },
    plugins: [ //把js渲染到根html文件
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        })
    ]
}