const path = require('path')

module.exports = {
    mode: "development",
    entry: {
        main: './src/index.js',
        analitics: './src/analytics.js'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    }
}