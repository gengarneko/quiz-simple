// 显示相关函数
const tool = require('./tool')
const data = require('./delete-map-files')

module.exports = {
  showFolder(obj) {
    let sourceStruct = obj
    // 字符集
    console.log(obj.name)
    addModify(sourceStruct.children, [])
  }
}

let charSet = {
  'node': '├── ', // 节点
  'pipe': '│   ', // 连接
  'last': '└── ', // 最后的file或folder需要回勾
  'indent': '    ' // 缩进
}
// 由于已经有缓存数据了，因此对数据进行遍历搜索
// 如果type 是 file 就不需要继续
// 如果type 是 directory 对临时数组操作
function addModify(path, depth, hasUncle) {
  // console.log(path)
  // console.log(depth)

  let childrenLen = path.length - 1
  path.forEach((child, index) => {
    let newdepth = !!depth ? depth.slice(0) : []
    // console.log(newdepth)
    let isLast = (index >= childrenLen)

    if (isLast) {
      newdepth.push(charSet.last)
    } else {
      newdepth.push(charSet.node)
    }
    if (child.type == "file") {
      display(child.name, newdepth, hasUncle)
    } else {
      display(child.path, newdepth, hasUncle)
    }

    if (child.type == "directory") {
      let childPath = child.children
      if (!isLast) {
        newdepth.pop()
        newdepth.push(charSet.pipe)
      }
      addModify(childPath, newdepth, !isLast)
    }
  })
}

function display(node, depth, hasUncle) {
  if (!hasUncle && depth.length > 1) {
    // 如果父节点是最小的，且深度大于 1，就需要缩进
    depth[depth.length - 2] = charSet.indent;
  }
  if (node.lastIndexOf('/') > -1) {
    node = node.substring(node.lastIndexOf('/') + 1)
  }
  console.log(depth.join('') + node);
}