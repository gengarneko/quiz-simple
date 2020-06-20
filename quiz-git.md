# Git 的使用

## Q1

Git 是一个广泛使用的版本管理工具，适合团队开发。  
如果你用过 Git，那么请回忆一下，  
我们在确认开发需求之后，从写代码到提交进团队的代码仓库。  
这个过程中大概会用到哪几条命令？

请直接在这里作答。

答：

个人创建项目

```
git init
git status -sb
git add .
git commit -m "info"
git pull 
git push
```

团队协作

```
// 1. 点击 fork
git clone git@url
git branch -a
git checkout -b dev origin/dev
git remote -v
// 没东西
git remote add upstream git@url
// 有东西
git fetch upstream
git merge upstream/dev
git push
```

请求合并啥的没操作过。。。不太记得了

## Q2

你知道和用过哪些 Git 的方法论和技巧

答：

```
GitLens...一款 vscode 插件

// 多打这两个命令
git status -sb
git branch -a

// 个人开发时，git push 之前要 git pull
```

