const registerRouter = require('./backend/router')
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和 mixin
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `
      }
    }
  },
  devServer: {
    // 这个是webPack v4的代理配置写法
    onBeforeSetupMiddleware(devServer) {
      registerRouter(devServer.app)
    }
    // 这个是webPack v3的代理配置写法
    //  before(app) {
    //   registerRouter(app)
    // }
  }
}
