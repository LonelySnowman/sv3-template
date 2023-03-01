const fs = require('fs');

// 验证文件在文件夹中是否存在
function verifyFileExist(dirName, dirPath, tail = '') {
   const directories = fs.readdirSync(dirPath);
   return directories.includes(dirName + tail);
}

module.exports = verifyFileExist;
