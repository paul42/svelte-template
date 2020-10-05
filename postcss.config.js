
const path = require('path');
module.exports = {
    plugins: {
        'tailwindcss': './tailwind.config.js',
        'postcss-extract-media-query': {
            stats: true,
            output: {
                path: path.join(__dirname, 'public', 'build'),
                name: '[name]-[query].css'
            },
            queries: {
                'screen and (min-width: 1024px)': 'desktop-example',
                '(min-width: 640px)': 'mobile',
                '(min-width: 768px)': 'tablet',
                '(min-width: 1024px)': 'desktop-1',
                '(min-width: 1280px)': 'desktop-2'
            },
            entry: path.join(__dirname, 'public', 'build', 'bundle.css')
        }
    }
    // plugins: [
    //     tailwind('./tailwindcss.config.js'),
    //     //do the extract plugin next?
    // ]
}