const fs = require('fs')

// 工具函数
module.exports = {
  isDirectory(path) { // 判断是否为文件
    return fs.statSync(path).isDirectory();
  },

  getNodeName(path) { // 获取节点名
    let tempdir = path.substr(path.lastIndexOf('/') + 1, path.length);
    return tempdir;
  },

  readFolder(path) { // 返回文件夹目录数组
    return fs.readdirSync(path, (err, files) => {
      if (err) throw err;
      return files;
    })
  }
}