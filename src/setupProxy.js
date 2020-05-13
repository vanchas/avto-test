const { createProxyMiddleware } = require('http-proxy-middleware');

// const domen = `https://strateg.link/public`;
const domen = `https://avtotest.org`;

module.exports = function (app) {
  app.use("/api",
    createProxyMiddleware({
      target: domen,
      secure: false,
      changeOrigin: true
    })
  );
  app.use("/api/blog/posts",
    createProxyMiddleware({
      target: domen,
      secure: false,
      changeOrigin: true
    })
  );
  app.use("/api/blog/post/:id",
    createProxyMiddleware({
      target: domen,
      secure: false,
      changeOrigin: true
    })
  );
  app.use("/api/blog/post/add",
    createProxyMiddleware({
      target: domen,
      secure: false,
      changeOrigin: true
    })
  );
  app.use("/api/blog/post/update/:id",
    createProxyMiddleware({
      target: domen,
      secure: false,
      changeOrigin: true
    })
  );
  app.use("/api/blog/post/:id",
    createProxyMiddleware({
      target: domen,
      secure: false,
      changeOrigin: true
    })
  );
  app.use("/api/search",
    createProxyMiddleware({
      target: domen,
      secure: false,
      changeOrigin: true
    })
  );
  app.use("/api/fb",
    createProxyMiddleware({
      target: domen,
      secure: false,
      changeOrigin: true
    })
  );
  app.use("/api/fields/update/:key",
    createProxyMiddleware({
      target: domen,
      secure: false,
      changeOrigin: true
    })
  );
  app.use("/api/register",
    createProxyMiddleware({
      target: domen,
      secure: false,
      changeOrigin: true
    })
  );
  app.use("/api/logout",
    createProxyMiddleware({
      target: domen,
      secure: false,
      changeOrigin: true
    })
  );
  app.use("/api/login",
    createProxyMiddleware({
      target: domen,
      secure: false,
      changeOrigin: true
    })
  );
};
