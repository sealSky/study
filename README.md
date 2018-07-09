# study


1、描述：这是一个seal在生活、学习、工作中的前端开发学习经验，主要用来记录遇到的问题，以及解决的方法等待，类似与笔记一样的项目。


开始

2018.6.25日

需求1：input输入价格小数点最多为2位，达到两位数之后不可继续输入了。

方法1：使用键盘按下事件onkeydown 判断输入，获取小数点的在input的value中的位置，当有小数点时进行输入限制，使用字符串长度减去小数点的位置，当大于等于3时候设置input的maxlength属性。

function decimal(obj) {
    let val = $(obj).val();
    let index = val.indexOf('.');
    if (index != -1) {
        let len = val.length-index;
        if (len >= 3) {
            $(obj).prop("maxLength", val.length);
        } else {
            $(obj).prop("maxLength", 10);
        }
    } else {
        $(obj).prop("maxLength", 10);
    }
}

学习1：

使用webstrom开放TypeScript使用npm下载全局typescript包，在项目中建立tsconfig.json配置文件即可，具体配置的选项目前并没有阅读

2018.6.27

学习1：

使用iframe内嵌的网页时，当登录过期之后会在iframe中进行重定向，造成网站的整体不美观使用 

$(function () {
    //判断一下当前是不是做顶层，如果不是，则做一下顶层页面重定向
    if (window != top) {
        top.location.href = location.href;
    }
});

前端处理判断其所在的窗口是不是浏览器顶层窗口，不是的话就设置为顶层窗口。


2018.6.28

学习1：

使用form表单的action里面的submit提交数据可以使用回车键直接提交，但是会跳转到action的路径中去，可以改用AJAX进行数据提交而不跳转，或者form的onsubmit="return callback()" callback为提交的回调函数，提交按钮还是使用usbmit进行提交

2018.6.29

学习1：

pagination分页渲染数据与自身调用的方法，应该使用方法将请求渲染数据与重新定义分页放在一起，不要将分页直接放入渲染函数中，在分页的点击回调函数里面引入渲染函数，


2018.7.2

学习1：

在使用jquery日期控件的时候，需要添加一个清空已选日期的按钮，我没有找到组件的方法，使用一个div模拟原来的按钮进行操作，添加一个函数，清除所选的日期即可，在使用原控件的关闭类完成需求；

学习2：

一个开关可能需要用户进行关闭，开启操作，前端处理用户特定时间内能够点击的次数即可，显示时间的话需要将请求发送给后台，后台返回下次请求时间进行提示用户，需要的是不能够连续的平凡的无限制的访问后台，因此在前端使用一个自定义的data-send属性进行判断，初始化data-send的值为0，点击发送请求之后将值设置为非0，非0是不予发送HTTP请求，并提示用户平凡操作。

学习3：

使用jQuery的fadeIn()方法进行提示框弹出与fadeOut()隐藏的时候，添加提示框是否已经显示的判断 if (pointOut.is(':hidden')) {
        ticText.text(str);
        pointOut.fadeIn("slow");
    }，当提示框是隐藏状态的时候才执行fadeIn()方法，这样可以避免，需要提示多个的时候会一直的提示，知道所有弹窗都执行。

2018.7.4

DataTable数据初始化会先请求后台参数，得不到预期的效果

2018.7.9

开始实施前端图片优化，使用熊猫压缩对图片进行压缩处理，并没有使用前端打包工具进行项目的构建压缩等等，希望之后可以学到更多的图片优化方式，发现.gif格式的图片并不能进行压缩。