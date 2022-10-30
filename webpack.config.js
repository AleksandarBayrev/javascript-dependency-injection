const path = require('path');

const isProduction = process.env.NODE_ENV == 'production';


const config = {
    entry: './build/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'javascript-dependency-injection.js'
    },
    plugins: [],
    module: {
        rules: [],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
