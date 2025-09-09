const path = require('path');

module.exports = {
// Use multiple entry points to create separate bundles for each page
entry: {
index: './src/index.js',
about: './src/about.js',
annoyingFile: './src/annoyingFile.js',
},
output: {
// Use [name] to create a unique file name for each entry point
filename: '[name].bundle.js',
path: path.resolve(__dirname, 'dist'),
},
module: {
rules: [
    {
    test: /.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env']
            }
        }
    },
    {
        test: /\.css$/i, // This regular expression finds all files ending with .css
        use: ['style-loader', 'css-loader'], // Use these loaders for the matched files
    },
]
},
devServer: {
static: {
directory: path.join(__dirname, 'dist'),
},
compress: true,
port: 9000,
open: true,
},
};