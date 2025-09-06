# CSS学习笔记

第一次更新时间：2025年7月14日13:48:18

## 一、引入方式

- 行内样式

  ```html
  <p style="color: red;">
      Hello World
  </p>
  ```

- 内部样式表

  ```html
  <p>
      Hello World
  </p>
  <style>
      p{
          color: red;
      }
  </style>
  ```

- 外部样式表

  ```html
  <!-- index.html -->
  <head>
      <link rel="stylesheet" href="./style.css"/>
  </head>
  <body>
      <p>
          Hello World
      </p>
  </body>
  ```

  ```css
  /* style.css */
  p{
      color: red;
  }
  ```

## 二、选择器

### 选择器列表

通过`，`符号将多个具有相同样式的选择器组合在一起

```css
h1, h2{
    color:red;
}
```

### 类型、类、ID选择器

```css
/** 类型选择器 **/
p{
    color: red;
}
/** 类选择器 **/
.mytext{
    color: red;
}
/** ID选择器 **/
#mytext{
    color: red;
}
```

### 属性选择器

#### 存否和值选择器

```css
a[title]{ /** 选择具有title属性的a标签 **/
    color: red;
}
a[title="hello"]{ /** 选择具有title属性且值为hello的a标签 **/
    color: red;
}

```



`[attr~=value]`: 匹配带有一个名为*attr*的属性的元素，其值正为*value*，或者匹配带有一个*attr*属性的元素，其值有一个或者更多，至少有一个和*value*匹配。注意，在一列中的好几个值，是用空格隔开的。

以下html标签会被`[class~="zh"]`匹配：

```html
<p class="zh"></p>
<p class="zh en"></p>
<p class="en zh"></p>
```

`[*attr*|=*value*]`: 匹配带有一个名为*`attr`*的属性的元素，其值可正为*value*，或者开始为*value*，后面紧随着一个连字符。

以下html标签会被`[lang|="zh"]`匹配：

```html
<p lang="zh"></p>
<p lang="zh-cn"></p>
```



#### 子字符串匹配选择器

| 选择器          | 示例                | 描述                                                         |
| :-------------- | :------------------ | :----------------------------------------------------------- |
| `[attr^=value]` | `li[class^="box-"]` | 匹配带有一个名为*attr*的属性的元素，其值开头为*value*子字符串。 |
| `[attr$=value]` | `li[class$="-box"]` | 匹配带有一个名为*attr*的属性的元素，其值结尾为*value*子字符串 |
| `[attr*=value]` | `li[class*="box"]`  | 匹配带有一个名为*attr*的属性的元素，其值的字符串中的任何地方，至少出现了一次*value*子字符串。 |



#### 大小写敏感

如果你想在大小写不敏感的情况下，匹配属性值的话，你可以在闭合括号之前，使用`i`值。例如

```css
p[attr^="a" i]
```



### 伪类

[MDN文档-伪类](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#%E4%BB%80%E4%B9%88%E6%98%AF%E4%BC%AA%E7%B1%BB%EF%BC%9F)

伪类就是开头为冒号的关键字。例如，`:hover` 就是一个伪类。

例如，div:first-child 将一直选中div中的第一个子元素。

此处不展开说明



### 伪元素

[MDN文档-伪元素](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#%E4%BC%AA%E5%85%83%E7%B4%A0%E6%98%AF%E5%95%A5%EF%BC%9F)

伪元素开头为双冒号 `::`。比如，`::before` 就是一个伪元素的示例。

此处不展开说明



### 后代选择器

[MDN文档-后代选择器](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Styling_basics/Combinators#%E5%90%8E%E4%BB%A3%E9%80%89%E6%8B%A9%E5%99%A8)

```css
.box p {
  color: red;
}
```

上述选择器会选择class为box的元素内所有p元素



### 子代关系选择器

[MDN文档](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Styling_basics/Combinators#%E5%AD%90%E4%BB%A3%E5%85%B3%E7%B3%BB%E9%80%89%E6%8B%A9%E5%99%A8)

```css
.article > p
```

上述选择器会选择class为article的元素内直接子元素p，即内部嵌套的第一层中的p元素，再深层次的p不会被选中，例如

```html
<div class="article">
    <p></p> <!-- 这个p会被选中 -->
    <div>
        <p></p> <!-- 这个o不会被选中 -->
    </div>
</div>
```



### 邻接兄弟

邻接兄弟选择器（`+`）用来选中恰好处于另一个在继承关系上同级的元素旁边的物件。

```css
.jac + p {
    color: red;
}
```

```html
<p>jams</p>
<p class="jac">rose</p>
<p>spack</p>
```

上述示例中，`spack`会显示为红色文本，因为 + 选择器选中的是指定元素之后的元素，并非前后都选中



### 通用兄弟

如果你想选中一个元素后面的兄弟元素，即使它们不直接相邻，你还是可以使用通用兄弟关系选择器（`~`）

```html
<p>rock</p>
<h1>jdbc</h1>
<div>kfc</div>
<p>peter</p>
<div></div>
<p>nvidia</p>
```

```css
h1 ~ p{
  color: red;
}
```

上述示例中，`peter`和`nvidia`会显示为红色



## 三、盒模型

[MDN文档 - 盒模型](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Styling_basics/Box_model)

由于内容较多，且无法精简，故参阅官方文档



## 四、层叠、优先级和继承

[MDN文档 - 层叠、优先级与继承](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

由于内容较多，且无法精简，故参阅官方文档



## 五、值和单位

[MDN文档 - 值和单位](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Styling_basics/Values_and_units)

常见单位有`px`、`cm`、`em`、`rem`等，在设计网页时，我们通常不会使用cm这一类单位，这类单位通常被用在印刷物上。

`em`：相对本元素的字体大小。

`rem`：相对根元素的字体大小，默认大小为16px。如果根元素上的font-size大小调整了，设置了rem的字体会发生对应变化。

更多内容详见MDN文档



## [六、背景与边框](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)

请参阅官方文档



## ...此处略过一些内容，可参见MDN文档



## [七、浮动](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Floats)

设置浮动：

- float: left
- float: right

清除浮动：

- clear: both

## [八、定位](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Positioning)

position值：

- static: 静态定位，似乎并没有什么特别的变化
- relative: 相对定位，可以使用`top`、bottom、`left`、`right`属性进行位置调整
- absolute: 绝对定位，会相对于设置了relative属性的父元素进行位置变化，能够使用top、bottom、left、right。
- fixed：固定定位，相对于浏览器视图窗口，固定显示的位置不动
- sticky：基本上是相对位置和固定位置的混合体，它允许被定位的元素表现得像相对定位一样，直到它滚动到某个阈值点为止，此后它就变得固定了。例如，它可用于使导航栏随页面滚动直到特定点，然后粘贴在页面顶部。

## [九、flex布局](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Flexbox)

flex布局示意图

![在从左到右的语言中，三个 flex 项并排放置在 flex 容器中。主轴——弹性容器布置 flex 方向上的轴——是水平的。主轴的两端是开始端和结束端，分别位于左侧和右侧。交叉轴是垂直的；垂直于主轴。交叉轴的开始端和结束端分别位于顶部和底部。flex 项沿着主轴排列，在这种情况下，宽度称为主轴尺寸，flex 项沿交叉轴排列，在这种情况下，高度称为交叉尺寸。](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Flexbox/flex_terms.png)

示意图参数说明：

- flex container：flex容器
- main axis：主轴（横向的轴）
- cross axis：交叉轴（纵方向的轴）
- flex item：flex项
- main start：主轴开始位置
- main end：主轴结束位置
- cross start：交叉轴开始位置
- cross end：交叉轴结束位置

### flex基本介绍

```css
display: flex; /** 使用flex布局 **/
flex-direction: column | row; /** 指定布局方向 列|行 **/
flex-wrap: wrap; /** 元素溢出后允许进行换行操作 **/
flex: 1; /** 值为一个数字，表示该元素所占的比例。如果三个元素都设置为1，则他们三个所占空间是相同的。 **/
flex: 1 200px; /** 这表示“每个 flex 项将首先给出 200px 的可用空间，然后，剩余的可用空间将根据分配的比例共享” **/
```



### 对齐方式

align-items：控制flex项在纵轴（本名交叉轴）上的位置，他有以下几个值：

- stretch：默认值，其会使所有 flex 项沿着交叉轴的方向拉伸以填充父容器。
- flex-start：使元素在纵轴的开始位置对齐
- center：使元素在纵轴居中对齐
- flex-end：使元素在纵轴结束位置对齐

justify-content：控制flex项在横轴（本名主轴）上的位置，他有以下几个值：

- flex-start：默认值，会使所有元素在主轴的开始位置对齐
- center：使元素在主轴居中对齐
- flex-end：使元素在主轴结束位置对齐
- space-around：使元素在主轴均匀地分布，在任意一端都会留有部分空间
- space-between：和space-around相似，但不会在两端留下空间

### flex项排序

- 使用`order`属性可以对`flex项`进行排序。
- 所有`flex项`的`order`属性**默认值为0**
- `order`值大的`flex项`，在显示顺序中会更靠后
- **相同 order 值的 flex 项按源顺序显示**。所以假如你有四个元素，其 `order` 值分别是 2，1，1 和 0，那么它们的显示顺序就分别是第四，第二，第三，和第一。
- 第三个元素显示在第二个后面是因为它们的 order 值一样，且第三个元素在源顺序中排在第二个后面。
- 也可以给 order **设置负值**使它们比值为 0 的元素排得更前面。

## [十、grid布局（网格布局）](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Grids)

### 什么是网格布局

网格是由一系列水平及垂直的线构成的一种布局模式。根据网格，我们能够将设计元素进行排列，帮助我们设计一系列具有固定位置以及宽度的元素的页面，使我们的网站页面更加统一。

一个网格通常具有许多的**列（column）\**与\**行（row）**，以及行与行、列与列之间的间隙，这个间隙一般被称为**沟槽（gutter）**。

![img](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Grids/grid.png)



### 定义网格

```css
.container{
    display: grid;
}
```

> 与弹性盒子不同的是，在定义网格后，网页并不会马上发生变化。因为 `display: grid` 的声明只创建了一个只有一列的网格，所以子项还是会像正常布局流那样，自上而下、一个接一个的排布。

为了让我们的容器看起来更像一个网格，我们要给刚定义的网格加一些列。那就让我们加三个宽度为`200px`的列。当然，这里可以用任何长度单位，包括百分比。

```css
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
```



### [使用 fr 单位的灵活网格](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Grids#使用_fr_单位的灵活网格)

除了长度和百分比，我们也可以用 `fr` 这个单位来灵活地定义网格的行与列的大小。这个单位代表网格容器中可用空间的一份。

使用下面的规则来修改你的网格轨道，创建 3 个宽度为 `1fr` 的列：

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```



### [网格间隙](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Grids#网格间隙)

使用 [`grid-column-gap`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-column-gap) 属性来定义列间隙；使用 [`grid-row-gap`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-row-gap) 来定义行间隙；使用 [`grid-gap`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-gap) 可以同时设定两者。

```css
.container {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-gap: 20px;
}
```

> 间隙距离可以用任何长度单位包括百分比来表示，但不能使用`fr`单位。



### [重复构建轨道组](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Grids#重复构建轨道组)

你可以使用`repeat`来重复构建具有某些宽度配置的某些列。举个例子，**如果要创建多个等宽轨道**，可以用下面的方法。

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
```

> 和之前一样，你仍然得到了 3 个 `1fr` 的列。第一个传入 repeat 函数的值（`3`）表明了后续列宽的配置要重复多少次，而第二个值（`1fr`）表示需要重复的构建配置，这个配置可以具有多个长度设定。例如`repeat(2, 2fr 1fr)`



### [显式网格与隐式网格](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Grids#显式网格与隐式网格)

显式网格是我们用 `grid-template-columns` 或 `grid-template-rows` 属性创建的。而隐式网格则是当有内容被放到网格外时才会生成的。

隐式网格中生成的行/列大小是参数默认是 `auto` ，大小会根据放入的内容自动调整。当然，你也可以使用[`grid-auto-rows`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-auto-rows)和[`grid-auto-columns`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-auto-columns)属性手动设定隐式网格轨道的大小。下面的例子将`grid-auto-rows`设为了`100px`，然后你可以看到那些隐式网格中的行（因为这个例子里没有设定[`grid-template-rows`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-template-rows)，因此，所有行都位于隐式网格内）现在都是 100 像素高了。

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
  grid-gap: 20px;
}
```



### [minmax() 函数](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Grids#minmax_函数)

100 像素高的轨道有时可能会不够用，因为时常会有比 100 像素高的内容加进去。所以，我们可以将其设定为至少 100 像素，并且能够跟随内容来自动拓展尺寸，从而保证能容纳所有内容。显而易见，你很难知道网页上某个元素的尺寸在不同情况下会变成多少，一些额外的内容或者更大的字号就会导致许多能做到像素级精准的设计出现问题。所以，我们有了[`minmax()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/minmax)函数。

[`minmax()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/minmax) 函数为一个行/列的尺寸设置了取值范围。比如设定为 `minmax(100px, auto)`，那么尺寸就至少为 100 像素，并且如果内容尺寸大于 100 像素则会根据内容自动调整。在这里试一下把 `grid-auto-rows` 属性设置为`minmax`函数。

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 20px;
}
```

> 如果所有网格内的内容均小于 100 像素，看起来不会有变化。但如果在某一项中放入很长的内容或者图片，你可以看到这个格子所在的哪一行的高度变成能刚好容纳内容的高度了。注意我们修改的是 `grid-auto-rows`，因此只会作用于隐式网格。当然，这一项属性也可以应用于显式网格，更多内容可以参考 [`minmax()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/minmax) 页面。

### [自动使用多列填充](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Grids#自动使用多列填充)

某些情况下，我们需要让网格自动创建很多列来填满整个容器。通过设置`grid-template-columns`属性，我们可以实现这个效果，不过这一次我们会用到 [`repeat()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/repeat) 函数中的一个关键字`auto-fill`来替代确定的重复次数。而函数的第二个参数，我们使用[`minmax()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/minmax)函数来设定一个行/列的最小值，以及最大值 `1fr`。

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 20px;
}
```

> 你应该能看到形成了一个包含了许多至少 200 像素宽的列的网格，将容器填满。随着容器宽度的改变，网格会自动根据容器宽度进行调整，每一列的宽度总是大于 200 像素，并且容器总会被列填满。

### [基于线的元素放置](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Grids#基于线的元素放置)

在定义完了网格之后，我们要把元素放入网格中。我们的网格有许多分隔线，第一条线的起始点与文档书写模式相关。在英文中，第一条列分隔线（即网格边缘线）在网格的最左边而第一条行分隔线在网格的最上面。而对于阿拉伯语，第一条列分隔线在网格的最右边，因为阿拉伯文是从右往左书写的。

我们根据这些分隔线来放置元素，通过以下属性来指定从哪条线开始到哪条线结束。

- [`grid-column-start`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start)
- [`grid-column-end`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end)
- [`grid-row-start`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start)
- [`grid-row-end`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end)

这些属性的值均为分隔线序号，你也可以用以下缩写形式来同时指定开始与结束的线。

- [`grid-column`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-column)
- [`grid-row`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-row)

注意开始与结束的线的序号要使用`/`符号分开。

```css
header {
  grid-column: 1 / 3;
  grid-row: 1;
}

article {
  grid-column: 2;
  grid-row: 2;
}

aside {
  grid-column: 1;
  grid-row: 2;
}

footer {
  grid-column: 1 / 3;
  grid-row: 3;
}
```



### [使用 grid-template-areas 属性放置元素](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Grids#使用_grid-template-areas_属性放置元素)

另一种往网格放元素的方式是用[`grid-template-areas`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-template-areas)属性，并且你要命名一些元素并在属性中使用这些名字作为一个区域。

加入以下 CSS 规则：

```css
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  grid-template-columns: 1fr 3fr;
  gap: 20px;
}

header {
  grid-area: header;
}

article {
  grid-area: content;
}

aside {
  grid-area: sidebar;
}

footer {
  grid-area: footer;
}
```

刷新页面，然后你应该能看到的元素会被放到与之前相同的地方，整个过程不需要我们指定任何分隔线序号。

`grid-template-areas`属性的使用规则如下：

- 你需要填满网格的每个格子
- 对于某个横跨多个格子的元素，重复写上那个元素`grid-area`属性定义的区域名字
- 所有名字只能出现在一个连续的区域，不能在不同的位置出现
- 一个连续的区域必须是一个矩形
- 使用`.`符号，让一个格子留空

你可以在文件中尽情发挥你的想象来测试各种网格排版，比如把页脚放在内容之下，或者把侧边栏一直延伸到最底。这种直观的元素放置方式很棒，你在 CSS 中看到的就是实际会出现的排版效果。



## BFC与IFC

### BFC

块级格式化上下文，是用于 布局块级盒 的一块 渲染区域。
只有Block-level box参与， 它规定了内部的Block-level Box如何布局。

1. BFC的形成条件
根元素
float：不为none
position：不为static或relative
display：inline-block / flex / inline-flex / flow-root / table-caption / table-cell。
overflow：不为visible (为hidden、scroll和auto)
2. BFC的布局规则
内部的box会在垂直方向上，一个接一个的放置。
box垂直方向的距离由margin决定，属于 同一个BFC的两个相邻box的margin会发生重叠 (margin塌陷)
每个盒的左外边界挨着包含块的左外边界，即使存在浮动
bfc的区域不会与float元素重叠。所以可以制造bfc区域，使其与浮动元素贴边，而此时也会撑起父元素的高度。
bfc就是页面上一个隔离的独立的容器，容器内的子元素不会影响到外面的元素，反之亦然。
计算bfc的高度时，浮动元素也参与计算。可以理解为，让父元素形成一个bfc区域时，里面的浮动元素会撑起父元素的高度。

### IFC

内联格式化上下文，是用于 布局内联元素 盒子的一块 渲染区域。

1. IFC的形成条件
块级元素中仅包含内联级别元素


2. IFC的布局规则
盒是从包含块的顶部开始一个挨一个水平放置的

水平padding、border、margin都有效，垂直方向上不被计算。

在垂直方向上，子元素会以不同形式来对齐vertical-align

能把在一行上的框都完全包含进去的一个矩形区域，被称为该行的行框（line box）。行框的宽度是由包含块（containing box）和与其中的浮动来决定。

IFC中的“line box”一般左右边贴紧其包含块，但float元素会优先排列。

IFC中的“line box”高度由 CSS 行高计算规则来确定，同个IFC下的多个line box高度可能会不同。

当 inline-level boxes的总宽度少于包含它们的line box时，其水平渲染规则由text-align 属性值来决定。

当一个“inline box”超过父元素的宽度时，它会被分割成多个boxes，这些 boxes 分布在多个“line box”中。如果子元素未设置强制换行的情况下，“inline box”将不可被分割，将会溢出父元素。



**以上内容为摘要**，剩余内容请参阅原文，链接：https://blog.csdn.net/qq_29493173/article/details/121139935

