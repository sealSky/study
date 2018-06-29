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