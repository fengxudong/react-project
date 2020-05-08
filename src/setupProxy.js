const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function (app) {
    app.use("/jc", createProxyMiddleware({
        target: "https://api.juooo.com",
        changeOrigin: true,
        pathRewrite: {
            "^/jc": ""
        }
    }))
}