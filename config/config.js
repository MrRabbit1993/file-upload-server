const path = require('path');
const UPLOAD_DIR = path.resolve(__dirname, "..", "fileTarget"); // 大文件存储目录
module.exports = {
    environment: "dev",
    upload_dir: UPLOAD_DIR
}