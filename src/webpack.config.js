module.exports = {
    entry: './index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        port: 9000,
        // proxy: { '/api/**': { target: 'http://localhost:3001', secure: false } },
        /*   headers: {
               'Access-Control-Allow-Origin': '**',
               'Access-Control-Allow-Headers': '**',
           },*/
        contentBase: './dist',
        historyApiFallback: true,
    }
};