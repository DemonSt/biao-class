module.exports = {
    entry : './index.js',
    output : {
        filename : 'bundle.js',
        path : __dirname,
    },
    module : {
        rules : [
            {
                test : /\.css$/i,
                use : ['style-loader', 'css-loader'],
            },
        ],
    },
};