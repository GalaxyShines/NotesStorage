# 不使用SSL

## 1、确保安装了nginx

```bash
yum install nginx
```

## 2、 Nginx目录通常位于`/etc/nginx`



## 3、 在`/etc/nginx`创建两个目录`/etc/nginx/sites-available`和`/etc/nginx/sites-enabled`（目录已存在可忽略此步骤）

```bash
[root@localhost ~] cd /etc/nginx
[root@localhost nginx] mkdir sites-available
[root@localhost nginx] mkdir sites-enabled
```

## 4、 进入/etc/nginx/nginx.conf文件，

```bash
vi /etc/nginx/nginx.conf
```

在http块内添加以下行：（代码已存在可忽略此步骤）

```ngin
http{
	include /etc/nginx/sites-enabled/*;
	# 其他配置...
}
```

## 5. 在/etc/nginx/sites-available创建配置文件(文件名建议设置要配置的域名)



```nginx
server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://127.0.0.1:8888;  # 后端服务器地址
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
        add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type';
    }
}
```

## 6、 启用配置文件

```bash
ln -s /etc/nginx/sites-available/你的配置文件名 /etc/nginx/sites-enabled/你的配置文件名
```



# 使用SSL

## 1、确保安装了nginx

```bash
yum install nginx
```

## 2、 Nginx目录通常位于`/etc/nginx`



## 3、 在`/etc/nginx`创建两个目录`/etc/nginx/sites-available`和`/etc/nginx/sites-enabled`（目录已存在可忽略此步骤）

```bash
[root@localhost ~] cd /etc/nginx
[root@localhost nginx] mkdir sites-available
[root@localhost nginx] mkdir sites-enabled
```

## 4、 进入/etc/nginx/nginx.conf文件，

```bash
vi /etc/nginx/nginx.conf
```

在http块内添加以下行：（代码已存在可忽略此步骤）

```ngin
http{
	include /etc/nginx/sites-enabled/*;
	# 其他配置...
}
```

## 5. 在/etc/nginx/sites-available创建配置文件(文件名建议设置要配置的域名)



```nginx
server {
    listen 80;
    server_name sxxy.gshines.top;

    location / {
        return 301 https://$host$request_uri;  # 重定向
    }

    location /api {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header REMOTE-HOST $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
        add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type';
        proxy_pass https://127.0.0.1:8443;       # <<<<<<<<请将8443改为后端所在端口
        proxy_ssl_verify off;
    }
}

server {
    listen 443 ssl;
    server_name sxxy.gshines.top;  # <<<<<<<<改为需要配置的域名
    root /var/www/sxxy;      # <<<<<<<<改为网站所在路径
    index index.html index.htm;
    ssl_certificate /ssl/sxxy/sxxy.gshines.top.pem;      # <<<<<<<<改为ssl证书pem文件所在路径
    ssl_certificate_key /ssl/sxxy/sxxy.gshines.top.key;  # <<<<<<<<改为ssl证书key文件所在路径
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;

    location / {
        try_files $uri $uri/ /index.html;
        root /var/www/sxxy;  # <<<<<<<<改为网站所在路径
        index index.html;
    }

    location /api {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header REMOTE-HOST $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
        add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type';
        proxy_pass https://127.0.0.1:8443;  # <<<<<<<<请将8443改为后端所在端口
        proxy_ssl_verify off;
    }
}
```

## 6、 启用配置文件

```bash
ln -s /etc/nginx/sites-available/你的配置文件名 /etc/nginx/sites-enabled/你的配置文件名
```

