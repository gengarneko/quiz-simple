const tool = require('./tool')
const data = require('./delete-map-files')

module.exports = {
  // 递归得到文件树
  getFolderTree(path) {
    let rootName = tool.getNodeName(path)
    // let treeNameArr = []
    // 设置根元素，递归创建索引
    nodesDepth[rootName] = 0
    getMap(path, nodesDepth[rootName])
    // 根据索引构建树🌲
    // treeNameArr.push(getTree(path, rootName))
    return getTree(path, rootName)
  },
}

let nodesDepth = {}

// 遍历获取深度索引
function getMap(path, index) {
  // 获取根下的节点数组
  let nodes = tool.readFolder(path)
  // 操作
  nodes.map((node) => {
    let nodePath = require('path').join(path, node) //拼接路径
    // 向索引中添加名称为 $node 的属性，深度 + 1
    nodesDepth[node] = index + 1
    if (tool.isDirectory(nodePath)) { //判断是否为文件夹类型
      return getMap(nodePath, nodesDepth[node]) //递归读取文件夹
    }
  })
}

// 获取树形数据
function getTree(path, nodeName) {
  // 构造节点数据
  let dirNode = {
    path: path,
    name: require('path').basename(path),
    type: 'directory',
    deep: nodesDepth[nodeName]
  }
  let nodes = require('fs').readdirSync(path)

  dirNode.children = nodes.map((node) => {
    let nodePath = require('path').join(path, node) //拼接路径
    if (tool.isDirectory(nodePath)) { //判断是否为文件夹类型
      return getTree(nodePath, node) //递归读取文件夹
    }

    return { //构造叶子数据
      path: nodePath,
      name: node,
      type: 'file',
      deep: nodesDepth[nodeName]
    }
  })
  return dirNode
}