```html
  <ul id="notification-list">
    <li>通知 1：欢迎来到我们的网站！</li>
    <li>通知 2：我们的新产品上线了！</li>
    <li>通知 3：不要错过限时优惠！</li>
    <li>通知 4：感谢您的支持！</li>
  </ul>
</div>

<script>
    document.addEventListener("DOMContentLoaded", function() {
      const notificationList = document.getElementById("notification-list");
      const listItems = notificationList.querySelectorAll("li");
      const itemHeight = listItems[0].offsetHeight;
      let index = 0;

      function scrollNotification() {
        index++;
        notificationList.style.transition = "top 0.5s";
        notificationList.style.top = -(index * itemHeight) + "px";

        // 当到达最后一个时，重置位置
        if (index === listItems.length) {
          setTimeout(() => {
            notificationList.style.transition = "none"; // 去掉过渡动画
            notificationList.style.top = "0px"; // 重置到顶部
            index = 0; // 重置索引
          }, 500); // 等待动画结束再重置
        }
      }

      setInterval(scrollNotification, 3000); // 每3秒滚动一次
    });
</script>
```

