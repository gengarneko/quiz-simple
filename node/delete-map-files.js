/**
 * @description 实现这个方法，能够删除指定文件夹下的所有 `.map` 文件。
 * @param {string} p
 * @return {void}
 */
const path = require('path')
const fs = require('fs')
const folderPath = path.join(__dirname, 'playground')
const tree = require('./tree')
const show = require('./show')
const filter = require('./filter')
// 如果将它变成处处可用的全局命令，则修改 path
// const folderPath = path.join(__dirname)

// 建立对象索引保存深度

const deleteMapFiles = (p) => {
  // 请实现……
  let data = tree.getFolderTree(folderPath)

  show.showFolder(data)
  filter.filterFilesByRule(folderPath)
  // show.showFolder(data)
}

deleteMapFiles()


// * ------------------------------------------------

// * playground 文件夹的目录结构如下：


/*
playground
├── index.html
├── index.js
├── index.js.map
└── static
    ├── main.js
    ├── main.js.map
    ├── style.css
    └── style.css.map
*/

// * 调用 deleteMapFiles('./playground') 后
// * 删除所有 map 文件，最终结构如下：

/*
playground
├── index.html
├── index.js
└── static
    ├── main.js
    └── style.css
*/