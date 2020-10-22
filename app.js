const Koa = require('koa');

const multipart = require('koa-multipart');
const InitManager = require("./core/init");


const app = new Koa();
app.use(multipart())

InitManager.initCore(app);

app.listen(3000);