
1. iframe 加载完成后，通知父窗口自己加载完成了，记一个状态
2. 父窗口发送消息告诉iframe自己准备好了
2. 父窗口传递数据（前提条件是，iframe加载完成 & 数据完毕）-> 传送数据
  - postMessage : 发送数据
  - update: 更新数据
  - close: 关闭预览页（支持callback）