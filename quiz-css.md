# CSS 的使用

如果你最近不常写 CSS，那么写上简单的文字说明也行，  
如果你常写 CSS，那么附上简单的 Demo 代码更好。

Demo 代码可以新建一个或多个文件（不限），  
例如新建一个 `writing-style.css`，并在其中完成。

## Q1

下面是 PostCSS 编译后生成的代码，如果你来写源码，你会怎么写。
（实现方式不限，比如可以用 CSS in JS、Vue style 等方式）

```css
.container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
}
.container > div:nth-child(1) {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}
```

**答：**

```css
.container 
	display: flex
  justify-content: space-between
	align-items: stretch
	div.nth-child(1)
		flex: 1 1 
```

## Q2

你用过哪些 CSS 的方法论和工具  
简单描述即可，例如：

> - PostCSS + autoprefixer 用来编译 CSS 代码，提高部分 CSS 的浏览器兼容性。
>
> - BEM 是用来处理 class 命名的，有一个三段式命名规则，形如 ↓：
>
> ```css
> .form--theme-xmas {
> }
> ```

答：

#### BEM

形如块-元素.修饰符形式的命名，我喜欢这么写：

```css
.block-element.modifier {}
```

#### ACSS (atomic css / css 原子化)

一件衣服可以这么拆分：

```
衣服 includes 面料，花色，颜色，样式
```

css 名称同样可以如此命名：

```html
<div class="D(f) W(100px)">
</div>
```

`D(f)` 就是 `display: flex`，`W(100px)` 就是 `width: 100px`，简单易懂

#### OOCSS（面向CSS）

常用的 stylus、less 等 css 预编译语言都有类似思想，提倡语义化和代码重用。

```css
.bg {...}
.bg-blue {...}
```

