const express =require('express')
const proxy = require('http-proxy-middleware')

// Create express instnace
const app = express()

// Require API routes
const users = require('./routes/users')

// Import API Routes
app.use(users)
app.use("/fjw",proxy({
    target:"http://www.fooju.cn/",
    changeOrigin:true,
    pathRewrite:{
      "^/api/fjw":"/fjw"
    }
}))

// Export the server middleware

module.exports = {
    path: '/api',
    handler: app
}