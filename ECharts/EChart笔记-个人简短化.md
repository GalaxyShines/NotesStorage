# ECharts笔记



## 怎么安装？

```shell
npm install echarts --save
```





## 怎么引入？

```html
<!DOCTYPE html>
<html>
    <head>
        <script src="../node_modules/echarts/dist/echarts.min.js"></script>
    </head>
</html>
```





## 数据如何显示？



```js
let chart = echarts.init(document.getElementById('demo'))

let option = {
    ...
}
    
chart.setOption(option)  // 应用配置
```

### 



## 一、容器大小设置

### 直接在div用css设置大小（常用）

```html
<div id="main" style="width: 600px;height:400px;"></div>
<script type="text/javascript">
  var myChart = echarts.init(document.getElementById('main'));
</script>
```



### 在init中设置大小

```html
<div id="main"></div>
<script type="text/javascript">
  var myChart = echarts.init(document.getElementById('main'), null, {
    width: 600,
    height: 400
  });
</script>
```



### 响应式大小

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



### 特定大小（解决溢出）

```js
myChart.resize({
  width: 800,
  height: 400
});
```







## 二、样式

参见官网

https://echarts.apache.org/handbook/zh/concepts/style





## 三、柱状图

```js
option = {
  xAxis: {
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {},
  series: [
    {
      type: 'bar',
      data: [23, 24, 18, 25, 27, 28, 25]
    }
  ]
};
```

### 柱体的宽度、颜色设置 与 数值的显示

在series中设置

```js
series: [{
    type: 'bar',
    label: {
        show: true,  // 开启数值显示
        position: 'top',  // 数值显示位置
        formatter: '{c}',  // 只显示数值
        color: '#666666',  // 数值颜色
        fontSize: 8   // 数值字体大小
    },
    data: [814, 6137, 501, 743, 476],
    barWidth: '45%',  // 柱体宽度
    color: '#1890ff'  // 柱体颜色
}]
```

### Y轴的数值跨度、最值 与 数值的格式

```js
yAxis: {
    type: 'value',
    axisLabel: {
        formatter: function(value) {  // 实现了将数值 2,700 变成 2700
            return value
        }
    },
    min: 0, // 显示数值最小值
    max: 6200,  // 显示数值最大值
    interval: 1240  // 数值的跨度
},
```

### X轴的字体设置 与 项目设置

```js
xAxis: {
    type: 'category',
    axisLabel: {
        fontSize: 8,  // 字体大小
        color: '#666666'   // 字体颜色
    },
    data: ['iPho...', '长视频斗..', '互联网亲...', '什么是紧...', '让人热泪...']  // 数据
},
```

### 柱状图完整示例

```html
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<link href="../css/mui.css" rel="stylesheet" />
		<script src="../node_modules/echarts/dist/echarts.min.js"></script>
		<script type="module">
			document.addEventListener('DOMContentLoaded', () => {
				var myChart = echarts.init(document.getElementById('data1'), null, {});
				let option = {
					dataset: {},
					xAxis: {
						type: 'category',
						axisLabel: {
							fontSize: 8,    // X轴字体大小
							color: '#666666'
						},
						data: ['iPho...',
                               '长视频斗..',
                               '互联网亲...',
                               '什么是紧...',
                               '让人热泪...']    // 数据设置
					},
					yAxis: {    // Y轴设置
						type: 'value',
						axisLabel: {
							formatter: function(value) {  // 数值格式处理  2,700 变成 2700
								return value
							},
                            fontSize: 8,    // Y轴字体大小设置
                            color: '#666666'   // Y轴字体颜色设置
						},
						min: 0,   // 显示最小值
						max: 6200,   // 显示最大值
						interval: 1240    // Y轴数值跨度
					},
					series: [{
						type: 'bar',
						label: {
							show: true,         // 是否显示
							position: 'top',    // 显示位置
							formatter: '{c}',   // 显示格式（只显示数值）
							color: '#666666',   // 字体颜色
							fontSize: 8         // 字体大小
						},
						data: [814, 6137, 501, 743, 476],  // 数值设置
						barWidth: '45%',  // 柱状体宽度
						color: '#1890ff'  // 柱状体颜色
					}]
				};
				myChart.setOption(option);  // 将数据显示
		</script>
	</head>

	<body>
		<script src="../js/mui.js"></script>
		<script type="text/javascript">
			mui.init()
		</script>
        <div id="data1" style="width: 100%;padding: 0%;height: 40vh;"></div>
	</body>

</html>
```





## 四、折线图

### 折线图完整示例

```js
let chart2 = echarts.init(document.getElementById('data2'), null, {})
let option2 = {
    xAxis: {  // X轴设置
        type: 'category',
        data: ['甘A', '甘B', '甘C', '甘D']    // 数据设置
        axisLabel: {
            fontSize: 8,				// X轴字体大小
			color: 'bcbcbc'   			// X轴字体颜色
        }
    },
    yAxis: {
        type: 'value',
        min: 0,							// 显示最小值
        max: 26000,						// 显示最大值
        interval: 5200,					// 显示数值跨度
        axisLabel: {
            fontSize: 8,				// Y轴字体大小
            color: 'bcbcbc'				// Y轴字体颜色
            formatter: function(value) {   // Y轴格式化（2,700转2700）
                return value
            }
        }
    },
    series: [{
        data: [10, 20, 30, 40],     // 数据设置
        type: 'line',		// 模式设置（折线图）
        label: {
            show: true,		// 数值显示开启
            coloe: '#666666',		// 数值显示颜色
            position: 'top',		// 数值显示位置
            formatter: '{c}',		// 数值格式化（只显示数值）
            fontSize: 10		// 字体大小
        },
        color: '#1890ff'		// 折线颜色
    }]
}
chart2.setOption(option2)
```

## 五、饼图

### 饼图完整示例

```js
let chart3 = echarts.init(document.getElementById('data3'), null, {})
let option3 = {
    series: [
        {
            type: 'pie',	// 模式设置（饼图）
            label: {
                show: true,	// 数值显示（开启）
                position: 'outside',	// 数值显示位置（外部）
                formatter: '{c}' // 只显示数值
            },
            labelLine: { // 显示标签连线
                show: true
        },
        data: [ // 数据项设置
            {
                value: 8653,
                name: '前端开发'
            },
            {
                value: 1223,
                name: 'java工程师'
            },
            {
                value: 125,
                name: '酒店前台经理'
            }
        ],
        radius: '40%', // 饼图半径
        itemStyle: {
            color: function(params) {
                const colors = ['#fac858', '#2496ff', '#91cb74'] // 设置每一项的块颜色，与数据项顺序对应
                return colors[params.dataIndex]
            }
        },

    }],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: { // 底部显示每一项对应的颜色
        orient: 'horizontal', // 横向显示
        bottom: 0, // 底部距离
        left: 'center',
        data: ['前端开发', 'java工程师', '酒店前台经理'], // 每一项名称，与数据项顺序对应
        textStyle: {
            fontSize: 12, // 图例字体大小
            color: '#333' // 图例文本颜色
        },
        itemWidth: 20, // 图例标记的宽度
        itemHeight: 14, // 图例标记的高度
    }

}
chart3.setOption(option3)
```

