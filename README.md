cordova-plugins-toast
=====================
####这是我参考了nl.x-services.plugins.toast做的第一个cordova插件，在此做下开发备忘。

##使用方式
假设项目路径为/Workspaces/ionicdemo

下载zip包，解压到/Workspaces/my_plugins，随后切换到shell终端，进入/Workspaces/ionicdemo，再输入

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

##插件开发时遇到的坑
- JS报错：Cannot read property 'toast' of undefined
我解开的原因：
插件www/Toast.js中有错误，我的错误是一次是module.exports写错了，一次是调用exec时，第3个参数"ToastService"没跟plugin.xml中的<feature name="ToastService">对应起来。
我的建议是插件主类都命名为xxxService，对着我的代码看哪些地方要写ToastService,哪些地方只用写Toast或toast，就容易区分了。

- DDMS中看logcat中有java的warning：提示找不到com.zlzkj.cordova.ToastService字样
我解开的原因：
在/Workspaces/ionicdemo/platforms/android/res/xml/config.xml中自动注册插件信息有误

```xml
<feature name="ToastService">
    <param name="android-package" value="com.zlzkj.cordova.ToastService" />
</feature>
```
这里的value必须是写上java类名字，也就是ToastService，此外feature name最好也命名成java类的名字，重点是这个feature name要写在Toast.js中的exec的第三个参数中。  
