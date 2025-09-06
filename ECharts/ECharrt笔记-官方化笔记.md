# ECharts使用笔记

## 一、入门

### 获取ECharts

https://echarts.apache.org/handbook/zh/basics/download

#### 从npm获取

```shell
npm install echarts --save
```

具体流程：

1. 在项目所在根目录打开**命令行窗口**（Powershell和CMD均可）

2. 执行上述**npm命令**

3. 在需要使用echarts的html文件中，用**script**引入

   ```html
   <!doctype html>
   <head>
       <script src="../node_modules/echarts/dist/echarts.min.js"></script>
   </head>
   ```

#### 其他方式

笔者使用的是npm方式获取，故暂无其他获取方式的笔记

## 二、概念

### 图标容器及大小

https://echarts.apache.org/handbook/zh/concepts/chart-size

#### 初始化

##### 1. 在div标签中设定样式

可以在**div**标签中通过**style**属性设置容器的大小，再使用**init**进行初始化

**不要忘记给div设置id**

```html
<div id="main" style="width: 600px;height:400px;"></div>
<script type="text/javascript">
  var myChart = echarts.init(document.getElementById('main'));
</script>
```

##### 2. 在初始化时指定容器大小

这种方式不需要在**div**中用**style**设置容器大小，而是在**init**初始化时进行设置

**不要忘记给div设置id**

```html
<div id="main"></div>
<script type="text/javascript">
  var myChart = echarts.init(document.getElementById('main'), null, {
    width: 600,
    height: 400
  });
</script>
```

#### 响应容器大小变化

##### 1. 响应容器大小变化

这种方式通过监听容器变化从而实时改变大小

```html
<style>
  #main,
  html,
  body {
    width: 100%;
  }
  #main {
    height: 400px;
  }
</style>
<div id="main"></div>
<script type="text/javascript">
  var myChart = echarts.init(document.getElementById('main'));
  window.addEventListener('resize', function() {
    myChart.resize();
  });
</script>
```

##### 2. 为图标设置特定大小

这种方式可以使图表大小不等于容器大小，能够解决部分图表溢出的问题

```javascript
myChart.resize({
  width: 800,
  height: 400
});
```

### 样式

此处不做说明，参见https://echarts.apache.org/handbook/zh/concepts/style

### 数据集

https://echarts.apache.org/handbook/zh/concepts/dataset

#### 在系列(Series)中设置数据

```js
option = {
  xAxis: {   // 这是X轴显示的数据
    type: 'category',
    data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie']
  },
  yAxis: {},
  series: [
    {
      type: 'bar',
      name: '2015',
      data: [89.3, 92.1, 94.4, 85.4]
    },
    {
      type: 'bar',
      name: '2016',
      data: [95.8, 89.4, 91.2, 76.9]
    },
    {
      type: 'bar',
      name: '2017',
      data: [97.7, 83.1, 92.5, 78.1]
    }
  ]
};
```

![结果示例图](http://112.124.30.120/MarkDownAssets/echart1.png)