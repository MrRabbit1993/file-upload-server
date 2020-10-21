const requireDirectory = require("require-directory");
const Router = require("koa-router");

const whenLoadModule = (obj) => {
    if (obj instanceof Router) {
        InitManager.app.use(obj.routes())
    }
}
class InitManager {//初始化管理器
    static initCore(app) {//入口方法
        InitManager.app = app;
        InitManager.initLoadRouters();//调取静态方法
    }

    static initLoadRouters() {
        const apiDirectory = `${process.cwd()}/app/router`;//process.cwd() 得到根目录
        requireDirectory(module, apiDirectory, { visit: whenLoadModule });
    }
}
module.exports = InitManager