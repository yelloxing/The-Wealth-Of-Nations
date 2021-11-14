const KnowpediaLoaderPlugin = require('knowpedia/loader-plug/index.js');
const pkg = JSON.parse(require('fs').readFileSync('./package.json'));

module.exports = {
    entry: ['./src/entry.js'],
    output: {
        path: __dirname,
        filename: 'dist/main@v' + pkg.version + '.js',
        chunkFilename: 'dist/main@v' + pkg.version + '-bundle[name].js'
    },
    module: {
        rules: [{
            test: /\.paper$/,
            loader: ['knowpedia/loader/index.js'],
            exclude: /node_modules/
        }, {
            test: /\.(scss|css)$/,
            loader: ['knowpedia/style-loader/index.js', 'css-loader', 'postcss-loader', './scss-loader.js']
        }, {
            test: /\.js$/,
            loader: ['babel-loader'],
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|jpeg|gif|bmp|svg)$/,
            loader: [{
                loader: "url-loader",
                options: {
                    name: "dist/[name].[ext]",
                    limit: 5000
                }
            }]
        }]
    },
    plugins: [
        new KnowpediaLoaderPlugin()
    ]
};
