const Router = require("koa-router");
const router = new Router();
router.get("/file/v1/demo", (ctx, next) => {
  const headers = ctx.request.header;//获取header
  ctx.body = { key: "v1/demo" }
})
router.post("/file/v1/upload", (ctx, next) => {
  const body = ctx.request.body;//获取body
  const headers = ctx.request.header;//获取header
  console.log(body);
  console.log(headers);
  const res = {
    success: true,
    errorCode: 0,
    msg: "成功",
    data: [
      {
        "value": "1",
        "label": "黄金糕"
      },
      {
        "value": "2",
        "label": "双皮奶"
      },
      {
        "value": "3",
        "label": "蚵仔煎"
      },
      {
        "value": "4",
        "label": "龙须面"
      },
      {
        "value": "5",
        "label": "北京烤鸭"
      },
      {
        "value": "6",
        "label": "北京烤鸭2"
      },
      {
        "value": "7",
        "label": "北京烤鸭3"
      },
      {
        "value": "8",
        "label": "北京烤鸭4"
      }
    ]
  }
  ctx.body = res
})
module.exports = router;