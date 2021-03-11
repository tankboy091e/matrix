const { watch } = require('fs')
const path = require('path')

module.exports = {
    mode: "development",
    entry: "/dist/app.js",
    output: {
        path: path.join(__dirname,'../backend/public/javascripts'),
        filename: "build.js"
    },
    watch : true,
    watchOptions: {
        poll: true,
        ignored: /node_modules/
    }
}