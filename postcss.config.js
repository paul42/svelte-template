var tailwind = require('tailwindcss');

module.exports = {
    plugins: [
        tailwind('./tailwind.config.js'),
        //do the extract plugin next?
    ]
}