# css动画
## 前言：
css3可以创建动画，它可以取代许多网页动画图像、Flash动画和JavaScript实现的效果。
## CSS3 @keyframes规则
要创建 `CSS3` 动画，你需要了解 `@keyframes` 规则。

`@keyframes` 规则是创建动画。

`@keyframes` 规则内指定一个 `CSS` 样式和动画将逐步从目前的样式更改为新的样式。

**创建`keyframes`实例：**
```css
@keyframes myfirst
{
    from {background: red;}
    to {background: yellow;}
}
 
@-webkit-keyframes myfirst /* 旧版浏览器的写法 */
{
    from {background: red;}
    to {background: yellow;}
}
```
当我们创建了`keyframes`，需要绑定到一个选择器，否则不会有效果：
```css
div
{
    animation: myfirst 5s;
    -webkit-animation: myfirst 5s; /* 旧版浏览器写法 */
}
```
>在上述代码中，我们将名为`myfirst`的`keyframes`绑定到`div`中，并设置这个动画的执行时间为5秒

### 除了上述的方法，我们还可以使用百分比的方式来设置动画
以下是一段示例代码
```css
@keyframes myfirst
{
    0%   {background: red;}
    25%  {background: yellow;}
    50%  {background: blue;}
    100% {background: green;}
}
 
@-webkit-keyframes myfirst /* 旧版浏览器的写法 */
{
    0%   {background: red;}
    25%  {background: yellow;}
    50%  {background: blue;}
    100% {background: green;}
}
```

下面的表格列出了 @keyframes 规则和所有动画属性：

|            属性	             |                     描述	                      | CSS |
|:--------------------------:|:--------------------------------------------:|:---:|
|        @keyframes	         |                    规定动画。                     | 	3  |
|         animation          |                	所有动画属性的简写属性。                 | 	3  |
|      animation-name	       |             规定 @keyframes 动画的名称。             | 	3  |
|    animation-duration	     |          规定动画完成一个周期所花费的秒或毫秒。默认是 0。	          |  3  |
| animation-timing-function	 |            规定动画的速度曲线。默认是 "ease"。	            |  3  |
|    animation-fill-mode	    | 规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。 | 	3  |
|      animation-delay       |               规定动画何时开始。默认是 0。	               |  3  |
| animation-iteration-count	 |              规定动画被播放的次数。默认是 1。               | 	3  |
|    animation-direction	    |        规定动画是否在下一周期逆向地播放。默认是 "normal"。        | 	3  |
|   animation-play-state	    |         规定动画是否正在运行或暂停。默认是 "running"。         | 	3  |