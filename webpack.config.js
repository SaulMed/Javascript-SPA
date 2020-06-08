const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            //CSS - Leer Bootstrap
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {   //SCSS
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {   //HTML
                test: /\.html$/i,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}