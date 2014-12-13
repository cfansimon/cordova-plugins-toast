
//引入依赖
var exec = require('cordova/exec');

/**
 * 主类
 */
function Toast() {
}
;

/**
 * 显示一个原生Toast;
 *
 * @param message
 *            提示内容
 * @param duration
 *            时长[short,long]
 * @param position
 *            位置[top,center,bottom](默认bottom)
 */
Toast.prototype.show = function(message, duration, position,
		successCallback, errorCallback) {
	exec(successCallback, errorCallback, "ToastService", "show", [
			message, duration, position ]);
};

/**
 * 安装插件
 */
module.exports = {
	toast : new Toast()
};
