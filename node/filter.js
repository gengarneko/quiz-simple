const fs = require('fs')
const path = require('path')
const tool = require('./tool')

module.exports = {
  filterFilesByRule (path) {
    // console.log(getFiles(path))
    getFiles(path)
  }
}

function getFiles(path) {
  // 获取根下的节点数组
  let nodes = tool.readFolder(path)
  let reg = new RegExp('.*?.map')
  nodes.map((node) => {
    let nodePath = require('path').join(path, node) //拼接路径
    // 判断筛选
    if (tool.isDirectory(nodePath)) { 
      return getFiles(nodePath)
    }
    if(!tool.isDirectory(nodePath) && reg.test(node)) {
      console.log('过滤文件：' + node)
      fs.unlinkSync(nodePath)
      console.log('删除成功！')
    }
    
  })
}

function filter() {
  
}