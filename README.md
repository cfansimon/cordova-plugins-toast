cordova-plugins-toast
=====================
####这是我参考了nl.x-services.plugins.toast做的第一个cordova插件，在此做下开发备忘。

##使用方式
假设项目路径为/workspaces/ionicdemo

下载zip包，解压到/workspaces/my_plugins，随后切换到shell终端，进入/workspaces/ionicdemo，再输入

```bash
cordova plugins add ../my_plugins/cordova-plugins-toast-master
```

安装完成。

JS中调用方式为：

```js
if (cordova.plugins.toast) {
    cordova.plugins.toast.show(msg,"short","bottom");
}
```

###参数说明
- 第1个参数：message 提示内容
- 第2个参数：duration 时长[short,long]
- 第3个参数：position 位置[top,center,bottom]

