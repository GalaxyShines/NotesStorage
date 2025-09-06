## 1、 确保已安装Nginx

```bash
yum install nginx
```



## 2、 Nginx目录通常位于`/etc/nginx`



## 3、 在`/etc/nginx`创建两个目录`/etc/nginx/sites-available`和`/etc/nginx/sites-enabled`

```bash
[root@localhost ~] cd /etc/nginx
[root@localhost nginx] mkdir sites-available
[root@localhost nginx] mkdir sites-enabled
```

## 4、 进入/etc/nginx/nginx.conf文件，

```bash
vi /etc/nginx/nginx.conf
```

在http块内添加以下行：

```ngin
http{
	include /etc/nginx/sites-enabled/*;
	# 其他配置...
}
```

## 5、 配置Nginx虚拟主机

创建一个新的Nginx配置文件

```bash
vi /etc/nginx/sites-available/www.website.com
```

> 请将上述代码中的www.website.com替换为要设置的域名



在文件中添加以下内容

```bash
server {
    listen 80;
    server_name www.website.com;

    root /path/to/your;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}

```

>请将上述代码中的www.website.com替换为要设置的域名，将/path/to/your替换为网站所在本地路径

## 6、 启用配置文件

```bash
ln -s /etc/nginx/sites-available/www.website.com /etc/nginx/sites-enabled/www.website.com
```

> 请将上述代码中的www.website.com替换为实际文件名（通常是要设置的域名）

## 7、 测试Nginx配置

确保没有语法错误

```bash
nginx -t
```

如果配置测试通过，你会看到一条消息，表明测试成功。

## 8、 重新加载Nginx

```bash
systemctl reload nginx
```

## 9、验证设置

打开浏览器访问域名，能够访问网站则表示配置成功