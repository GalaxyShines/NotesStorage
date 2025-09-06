# JQuery学习笔记

最后更新：2024年9月17日

## 一、安装

### · 引用CDN

官方文档地址：https://www.runoob.com/jquery/jquery-install.html



这里使用的是百度CDN

```html
<head>
<script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js">
</script>
</head>
```



## 二、选择器

使用方法与HTML DOM类似



### · 常见选择器

```javascript
$('p')  // 选择p元素
$('p.title')  // 选择class为title的p元素
$('p#title.styles')  // 选择id为title且class为styles的p元素
$('#title')  // 选择所有id为title的元素
$('.test')  // 选择所有class为test的元素
```

### · 更多选择器

| 语法                     | 描述                                                      |
| :----------------------- | :-------------------------------------------------------- |
| $("*")                   | 选取所有元素                                              |
| $(this)                  | 选取当前 HTML 元素                                        |
| $("p.intro")             | 选取 class 为 intro 的 \<p> 元素                          |
| $("p:first")             | 选取第一个 \<p> 元素                                      |
| $("ul li:first")         | 选取第一个\<ul> 元素的第一个 \<li> 元素                   |
| $("ul li:first-child")   | 选取每个 \<ul> 元素的第一个 \<li> 元素                    |
| $("[href]")              | 选取带有 href 属性的元素                                  |
| $("a[target='_blank']")  | 选取所有 target 属性值等于 "_blank" 的 \<a> 元素          |
| $("a[target!='_blank']") | 选取所有 target 属性值不等于 "_blank" 的 \<a> 元素        |
| $(":button")             | 选取所有 type="button" 的 \<input> 元素 和 \<button> 元素 |
| $("tr:even")             | 选取偶数位置的 \<tr> 元素                                 |
| $("tr:odd")              | 选取奇数位置的 \<tr> 元素                                 |

## 三、JQuery 事件

### · $(document).ready()

$(document).ready() 方法允许我们在文档**完全加载完后**执行函数。



### · click()

click() 方法是当按钮**点击**事件被触发时会调用一个函数

```js
$("p").click(function(){
  $(this).hide();
});
```



### · dblclick()

当**双击元素**时，会发生 dblclick 事件。

```js
$("p").dblclick(function(){
  $(this).hide();
});
```



### · mouseenter()

当鼠标指针**穿过元素**时，会发生 mouseenter 事件。

```js
$("#p1").mouseenter(function(){
    alert('您的鼠标移到了 id="p1" 的元素上!');
});
```



### · mouseleave()

当鼠标指针**离开元素**时，会发生 mouseleave 事件。

```js
$("#p1").mouseleave(function(){
    alert("再见，您的鼠标离开了该段落。");
});
```



### · mousedown()

当鼠标指针**移动到元素上方，并按下鼠标按键**时，会发生 mousedown 事件。

```js
$("#p1").mousedown(function(){
    alert("鼠标在该段落上按下！");
});
```



### · mouseup()

当在元素上**松开鼠标按钮时**，会发生 mouseup 事件

```js
$("#p1").mouseup(function(){
    alert("鼠标在段落上松开。");
});
```



### · hover()

hover()方法用于模拟**光标悬停**事件。

当鼠标移动到元素上时，会触发指定的第一个函数(mouseenter);当鼠标移出这个元素时，会触发指定的第二个函数(mouseleave)。

```js
$("#p1").hover(
    function(){
        alert("你进入了 p1!");
    },
    function(){
        alert("拜拜! 现在你离开了 p1!");
    }
);
```



### · focus()

当元素获得焦点时，发生 focus 事件。

```js
$("input").focus(function(){
  $(this).css("background-color","#cccccc");
});
```



### · blur()

当元素失去焦点时，发生 blur 事件。

```js
$("input").blur(function(){
  $(this).css("background-color","#ffffff");
});
```



## 四、JQuery 效果

### 4.1 隐藏/显示

#### · hide() 和 show()

==使用 hide() 和 show() 方法来**隐藏和显示** HTML 元素：==



**方法：hide ( speed, type, callback )**

**speed:** 规定显示/隐藏的速度（可选值 “slow” 、 “fast” 或 毫秒）

**type：** 规定使用哪种缓动函数吗，jQuery自身提供"linear" 和 "swing"

**callback：**回调函数



**方法：show ( speed, type, callback )**

**speed:** 规定显示/隐藏的速度（可选值 “**slow**” 、 “**fast**” 或 **毫秒**）

**type：** 规定使用哪种缓动函数吗，jQuery自身提供"**linear**" 和 "**swing**"

**callback：**回调函数

```js
// 这是不带参数的hide
$("#hide").click(function(){
  $("p").hide();
});

// 这是带参数的hide
$("#hide").click(function(){
  $("p").hide(1000, 'linear', function(){
      console.log('hide success')
  });
});
 
$("#show").click(function(){
  $("p").show();
});
```



#### · toggle()

==使用 toggle() 方法来**切换** hide() 和 show() 方法。==

**方法：toggle ( speed, type, callback )**

**speed:** 规定显示/隐藏的速度（可选值 “**slow**” 、 “**fast**” 或 **毫秒**）

**type：** 规定使用哪种缓动函数吗，jQuery自身提供"**linear**" 和 "**swing**"

**callback：**回调函数

```js
$("button").click(function(){
  $("p").toggle();
});
```



### 4.2 淡入淡出



#### · fadeIn()

==fadeIn() 用于淡入已隐藏的元素。==



**语法：$( *selector* ).fadeIn( *speed , callback* );**

**selector：**选择器

**speed：**规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。.

**callback：**参数是 fading 完成后所执行的函数名称。

```js
$("button").click(function(){
  $("#div1").fadeIn();
  $("#div2").fadeIn("slow");
  $("#div3").fadeIn(3000);
});
```



#### · fadeOut()

==fadeOut() 方法用于淡出可见元素。==



**语法：$( *selector* ).fadeOut( *speed , callback* );**

**selector：**选择器

**speed：**规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。.

**callback：**参数是 fading 完成后所执行的函数名称。

```js
$("button").click(function(){
  $("#div1").fadeOut();
  $("#div2").fadeOut("slow");
  $("#div3").fadeOut(3000);
});
```



#### · fadeToggle()

==fadeToggle() 方法可以在 fadeIn() 与 fadeOut() 方法之间进行切换。==



**语法：$( *selector* ).fadeToggle( *speed , callback* );**

**selector：**选择器

**speed：**规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。

**callback：**参数是 fading 完成后所执行的函数名称。

```js
$("button").click(function(){
  $("#div1").fadeToggle();
  $("#div2").fadeToggle("slow");
  $("#div3").fadeToggle(3000);
});
```



#### · fadeTo()

==fadeTo() 方法允许渐变为给定的不透明度（值介于 0 与 1 之间）==



**语法：$( *selector* ).fadeToggle( *speed , opacity , callback* );**

**selector：**选择器

**speed：**规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。

**opacity：**将淡入淡出效果设置为给定的不透明度（值介于 0 与 1 之间）。

**callback：**参数是 fading 完成后所执行的函数名称。

```js
$("button").click(function(){
  $("#div1").fadeTo("slow",0.15);
  $("#div2").fadeTo("slow",0.4);
  $("#div3").fadeTo("slow",0.7);
});
```



### 4.3 滑动

#### · slideDown()

==slideDown() 方法用于向下滑动元素。==

**语法：$(*selector*).slideDown(*speed,callback*);**

**selector：**选择器

**speed：**规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。

**callback：**参数是 fading 完成后所执行的函数名称。

```js
$("#flip").click(function(){
  $("#panel").slideDown();
});
```



#### · slideUp()

==slideUp() 方法用于向上滑动元素。==

**语法：$(*selector*).slideUp(*speed,callback*);**

**selector：**选择器

**speed：**规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。

**callback：**参数是 fading 完成后所执行的函数名称。

```js
$("#flip").click(function(){
  $("#panel").slideUp();
});
```



#### · slideToggle()

==slideToggle() 方法可以在 slideDown() 与 slideUp() 方法之间进行切换==

**语法：$(*selector*).slideToggle(*speed,callback*);**

**selector：**选择器

**speed：**规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。

**callback：**参数是 fading 完成后所执行的函数名称。

```js
$("#flip").click(function(){
  $("#panel").slideToggle();
});
```





### 4.4 动画

**语法：$(*selector*).animate({*params*}*,speed,callback*);**

#### ·  单个属性

```js
$("button").click(function(){
  $("div").animate({left:'250px'});
});
```

#### · 多个属性

```js
$("button").click(function(){
  $("div").animate({
    left:'250px',
    opacity:'0.5',
    height:'150px',
    width:'150px'
  });
});
```

#### · 使用相对值

```js
$("button").click(function(){
  $("div").animate({
    left:'250px',
    height:'+=150px',
    width:'+=150px'
  });
});
```

#### · 使用预定义值（show、hide、toggle）

```js
$("button").click(function(){
  $("div").animate({
    height:'toggle'
  });
});
```

#### · 队列功能

```js
$("button").click(function(){
  var div=$("div");
  div.animate({height:'300px',opacity:'0.4'},"slow");
  div.animate({width:'300px',opacity:'0.8'},"slow");
  div.animate({height:'100px',opacity:'0.4'},"slow");
  div.animate({width:'100px',opacity:'0.8'},"slow");
});
```

```js
$("button").click(function(){
  var div=$("div");
  div.animate({left:'100px'},"slow");
  div.animate({fontSize:'3em'},"slow");
});
```

### 4.5 停止动画

**$(*selector*).stop(*stopAll,goToEnd*);**

可选的 stopAll 参数规定是否应该清除动画队列。默认是 false，即仅停止活动的动画，允许任何排入队列的动画向后执行。

可选的 goToEnd 参数规定是否立即完成当前动画。默认是 false。

### 4.6 callback方法

以下实例在隐藏效果完全实现后回调函数:

```js
$("button").click(function(){
  $("p").hide("slow",function(){
    alert("段落现在被隐藏了");
  });
});
```

以下实例没有回调函数，警告框会在隐藏效果完成前弹出：

```js
$("button").click(function(){
  $("p").hide(1000);
  alert("段落现在被隐藏了");
});
```

### 4.7 链

```js
$("#p1").css("color","red").slideUp(2000).slideDown(2000);
```

或

```js
$("#p1").css("color","red")
  .slideUp(2000)
  .slideDown(2000);
```





## 五、JQuery HTML

### 5.1 捕获

#### 获得内容 - text()、html() 以及 val()

- **text()** - 设置或返回所选元素的文本内容
- **html()** - 设置或返回所选元素的内容（包括 HTML 标签）
- **val()** - 设置或返回表单字段的值

```js
$("#btn1").click(function(){
  alert("Text: " + $("#test").text());
});
$("#btn2").click(function(){
  alert("HTML: " + $("#test").html());
});
```



#### 获取属性 - attr()

attr() 方法用于获取属性值。

```js
$("button").click(function(){
  alert($("#runoob").attr("href"));
});
```



### 5.2 设置

#### text()、html() 以及 val() 的使用

- text() - 设置或返回所选元素的文本内容
- html() - 设置或返回所选元素的内容（包括 HTML 标记）
- val() - 设置或返回表单字段的值

```js
$("#btn1").click(function(){
    $("#test1").text("Hello world!");
});
$("#btn2").click(function(){
    $("#test2").html("<b>Hello world!</b>");
});
$("#btn3").click(function(){
    $("#test3").val("RUNOOB");
});
```

#### text()、html() 以及 val() 的回调函数

text()、html() 以及 val()，同样拥有回调函数。回调函数有两个参数：被选元素列表中当前元素的下标，以及原始（旧的）值。然后以函数新值返回您希望使用的字符串。

```js
$("#btn1").click(function(){
    $("#test1").text(function(i,origText){
        return "旧文本: " + origText + " 新文本: Hello world! (index: " + i + ")"; 
    });
});
 
$("#btn2").click(function(){
    $("#test2").html(function(i,origText){
        return "旧 html: " + origText + " 新 html: Hello <b>world!</b> (index: " + i + ")"; 
    });
});
```

#### 设置属性 - attr()

设置单个属性

```js
$("button").click(function(){
  $("#runoob").attr("href","http://www.runoob.com/jquery");
});
```

设置多个属性

```js
$("button").click(function(){
    $("#runoob").attr({
        "href" : "http://www.runoob.com/jquery",
        "title" : "jQuery 教程"
    });
});
```

#### attr() 的回调函数

```js
$("button").click(function(){
  $("#runoob").attr("href", function(i,origValue){
    return origValue + "/jquery"; 
  });
});
```



### 5.3 添加元素

- append() - 在被选元素的结尾插入内容
- prepend() - 在被选元素的开头插入内容
- after() - 在被选元素之后插入内容
- before() - 在被选元素之前插入内容

#### append() 方法

append() 方法在被选元素的结尾插入内容（仍然在该元素的内部）。

```js
$("p").append("追加文本");
```



#### prepend() 方法

prepend() 方法在被选元素的开头插入内容。

```js
$("p").prepend("在开头追加文本");
```



#### 通过 append() 和 prepend() 方法添加若干新元素

在上面的例子中，我们只在被选元素的开头/结尾插入文本/HTML。

不过，append() 和 prepend() 方法能够通过参数接收无限数量的新元素。可以通过 jQuery 来生成文本/HTML（就像上面的例子那样），或者通过 JavaScript 代码和 DOM 元素。

```js
function appendText(){
    var txt1="<p>文本-1。</p>";              // 使用 HTML 标签创建文本
    var txt2=$("<p></p>").text("文本-2。");  // 使用 jQuery 创建文本
    var txt3=document.createElement("p");
    txt3.innerHTML="文本-3。";               // 使用 DOM 创建文本 text with DOM
    $("body").append(txt1,txt2,txt3);        // 追加新元素
}
```



#### after() 和 before() 方法

jQuery after() 方法在被选元素之后插入内容。

jQuery before() 方法在被选元素之前插入内容。

```js
$("img").after("在后面添加文本");
 
$("img").before("在前面添加文本");
```



#### 通过 after() 和 before() 方法添加若干新元素

after() 和 before() 方法能够通过参数接收无限数量的新元素。可以通过 text/HTML、jQuery 或者 JavaScript/DOM 来创建新元素。

```js
function afterText()
{
    var txt1="<b>I </b>";                    // 使用 HTML 创建元素
    var txt2=$("<i></i>").text("love ");     // 使用 jQuery 创建元素
    var txt3=document.createElement("big");  // 使用 DOM 创建元素
    txt3.innerHTML="jQuery!";
    $("img").after(txt1,txt2,txt3);          // 在图片后添加文本
}
```



### 5.4 删除元素

- remove() - 删除被选元素（及其子元素）
- empty() - 从被选元素中删除子元素

#### remove() 方法

jQuery remove() 方法删除被选元素及其子元素。

```js
$("#div1").remove();
```



#### empty() 方法

jQuery empty() 方法删除被选元素的子元素。

```js
$("#div1").empty();
```



#### 过滤被删除的元素

jQuery remove() 方法也可接受一个参数，允许您对被删元素进行过滤。

该参数可以是任何 jQuery 选择器的语法。

下面的例子删除 class="italic" 的所有 <p> 元素：

```js
$("p").remove(".italic");
```



### 5.5 获取并设置 CSS 类

- addClass() - 向被选元素添加一个或多个类
- removeClass() - 从被选元素删除一个或多个类
- toggleClass() - 对被选元素进行添加/删除类的切换操作
- css() - 设置或返回样式属性

#### addClass() 方法

```js
$("button").click(function(){
  $("h1,h2,p").addClass("blue");
  $("div").addClass("important");
});
```

或者添加多个类

```js
$("button").click(function(){
  $("body div:first").addClass("important blue");
});
```



#### removeClass() 方法

```js
$("button").click(function(){
  $("h1,h2,p").removeClass("blue");
});
```

或者删除多个类

```js
$("button").click(function(){
  $("h1,h2,p").removeClass("blue important");
});
```



#### jQuery toggleClass() 方法

jQuery toggleClass() 方法。该方法对被选元素进行添加/删除类的切换操作：

```js
$("button").click(function(){
  $("h1,h2,p").toggleClass("blue");
});
```



### 5.6 css() 方法

css() 方法设置或返回被选元素的一个或多个样式属性。

#### 返回 CSS 属性

**语法：css("*propertyname*");**

下面的例子将返回首个匹配元素的 background-color 值：

```js
$("p").css("background-color");
```



#### 设置 CSS 属性

**语法：css("*propertyname*","*value*");**

```js
$("p").css("background-color","yellow");
```



#### 设置多个 CSS 属性

**语法：css({"*propertyname*":"*value*","*propertyname*":"*value*",...});**

```js
$("p").css({"background-color":"yellow","font-size":"200%"});
```



### 5.7 尺寸

![](https://www.runoob.com/images/img_jquerydim.gif)

#### width() 和 height() 方法

width() 方法设置或返回元素的宽度（不包括内边距、边框或外边距）。

height() 方法设置或返回元素的高度（不包括内边距、边框或外边距）。

```js
$("button").click(function(){
  var txt="";
  txt+="div 的宽度是: " + $("#div1").width() + "</br>";
  txt+="div 的高度是: " + $("#div1").height();
  $("#div1").html(txt);
});
```



#### innerWidth() 和 innerHeight() 方法

innerWidth() 方法返回元素的宽度（包括内边距）。

innerHeight() 方法返回元素的高度（包括内边距）。

```js
$("button").click(function(){
  var txt="";
  txt+="div 宽度，包含内边距: " + $("#div1").innerWidth() + "</br>";
    txt+="div 高度，包含内边距: " + $("#div1").innerHeight();
  $("#div1").html(txt);
});
```



#### outerWidth() 和 outerHeight() 方法

outerWidth() 方法返回元素的宽度（包括内边距和边框）。

outerHeight() 方法返回元素的高度（包括内边距和边框）。

```js
$("button").click(function(){
  var txt="";
  txt+="div 宽度，包含内边距和边框: " + $("#div1").outerWidth() + "</br>";
  txt+="div 高度，包含内边距和边框: " + $("#div1").outerHeight();
  $("#div1").html(txt);
});
```





## 六、JQuery遍历

### 6.1 JQuery祖先

- parent()
- parents()
- parentsUntil()



#### parent() 

==parent() 方法返回被选元素的直接父元素。==

该方法只会向上一级对 DOM 树进行遍历。

下面的例子返回每个 <span> 元素的直接父元素：

```js
$(document).ready(function(){
  $("span").parent();
});
```



#### parents() 方法

==parents() 方法返回被选元素的所有祖先元素，它一路向上直到文档的根元素 (<html>)。==

下面的例子返回所有 <span> 元素的所有祖先：

```js
$(document).ready(function(){
  $("span").parents();
});
```

