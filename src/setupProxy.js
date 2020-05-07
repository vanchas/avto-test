const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use("/api",
    createProxyMiddleware({
      target: "https://strateg.link/public",
      secure: false,
      changeOrigin: true
    })
  );
  app.use("/api/blog/posts",
    createProxyMiddleware({
      target: "https://strateg.link/public",
      secure: false,
      changeOrigin: true
    })
  );
  app.use("/api/blog/post/:id",
    createProxyMiddleware({
      target: "https://strateg.link/public",
      secure: false,
      changeOrigin: true
    })
  );
  app.use("/api/blog/post/add",
    createProxyMiddleware({
      target: "https://strateg.link/public",
      secure: false,
      changeOrigin: true
    })
  );
  app.use("/api/blog/post/update/:id",
    createProxyMiddleware({
      target: "https://strateg.link/public",
      secure: false,
      changeOrigin: true
    })
  );
  app.use("/api/blog/post/:id",
    createProxyMiddleware({
      target: "https://strateg.link/public",
      secure: false,
      changeOrigin: true
    })
  );
  app.use("/api/search",
    createProxyMiddleware({
      target: "https://strateg.link/public",
      secure: false,
      changeOrigin: true
    })
  );
  app.use("/api/fb",
    createProxyMiddleware({
      target: "https://strateg.link/public",
      secure: false,
      changeOrigin: true
    })
  );
  app.use("/api/fields/update/:key",
    createProxyMiddleware({
      target: "https://strateg.link/public",
      secure: false,
      changeOrigin: true
    })
  );
  app.use("/api/register",
    createProxyMiddleware({
      target: "https://strateg.link/public",
      secure: false,
      changeOrigin: true
    })
  );
  app.use("/api/logout",
    createProxyMiddleware({
      target: "https://strateg.link/public",
      secure: false,
      changeOrigin: true
    })
  );
  app.use("/api/login",
    createProxyMiddleware({
      target: "https://strateg.link/public",
      secure: false,
      changeOrigin: true
    })
  );
};
