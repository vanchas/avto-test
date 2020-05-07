const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
 app.use("/api", 
    createProxyMiddleware({
      target: "https://strateg.link/public",
      secure: false,
      changeOrigin: true
    })
  );
};
