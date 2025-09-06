举一个简单的例子

已知一个查询语句

```sql
select name from xxx where msg = '张三'
```



现在我们将`name`和`'张三'`挖空

```sql
select ? from xxx where msg = ?
```



定义变量a = 'name', b = '张三'



`#`和`$`的本质区别在于`sql语句`和`变量`两个概念

```sql
select name from xxx
```

上述语句中，select、name、from、xxx都是sql语句，简单理解就是不带引号

对于这种类型的挖空，我们要使用\$，即\${a}



另一种就是变量，简单理解就是带引号的

就要使用#{b}