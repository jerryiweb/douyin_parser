module.exports = {
  // 项目目录: 根目录
  publicPath: './',
  devServer: {
    // 开发模式下打包完成自动打开浏览器进入页面
    open: true,
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
