const Router = require("koa-router");
const path = require('path');
const fs = require("fs");
console.log(fs)
const router = new Router();
const { upload_dir } = require("./../../../config/config")
router.get("/file/v1/demo", (ctx, next) => {
  const headers = ctx.request.header;//获取header
  ctx.body = { key: "v1/demo" }
})
router.post("/file/v1/upload", async (ctx, next) => {
  const body = ctx.request.body;//获取body
  const headers = ctx.request.header;//获取header
  const { fields, files } = body
  console.log(fields)
  console.log(files)
  const [chunk] = files;
  const { hash } = fields;
  const { filename } = fields;
  const chunkDir = path.resolve(upload_dir, filename);
  if (!fs.existsSync(chunkDir)) {
    await fs.mkdir(chunkDir, { recursive: true }, (err) => {
      if (err) throw err;
      console.log('创建目录成功');
    });
    await fs.rename(chunk.path, `${chunkDir}/${hash}`, (err) => {
      if (err) throw err;
      const res = {
        success: true,
        code: 200,
        msg: "上传成功",
        data: []
      }
      ctx.body = res
    });
  }
})
module.exports = router;