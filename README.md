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


2018.7.14

input价格输入

onkeyup="amount(this)";

function amount(th, ev){
            let event = ev || window.event;

            if (event.keyCode == 37 || event.keyCode == 39) {
                return;
            }
            var regStrs = [
                ['^0(\\d+)$', '$1'], //禁止录入整数部分两位以上，但首位为0
                ['[^\\d\\.]+$', ''], //禁止录入任何非数字和点
                ['\\.(\\d?)\\.+', '.$1'], //禁止录入两个以上的点
                ['^(\\d+\\.\\d{2}).+', '$1'] //禁止录入小数点后两位以上
            ];
            for(i=0; i<regStrs.length; i++){
                var reg = new RegExp(regStrs[i][0]);
                th.value = th.value.replace(reg, regStrs[i][1]);
            }
        }

2018.7.20

ES6学习，ES6五种方法遍历对象的属性

 （1）for...in
 for...in循环遍历对象自身和继承的可枚举属性（不含Symbol属性）。
 （2）Object.keys(obj)
 Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含Symbol属性）的键名
 （3）Object.getOwnPropertyNames(obj)
 Object.getOwnPropertyName返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。
（4）Object.getOwnPropertySymbols(obj)

Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性的键名。

（5）Reflect.ownKeys(obj)

Reflect.ownKeys返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。

2018.7.25
学习，后端重定向是根据路由请求进行的，在登录过期之后需要对用户进行首页的重定向操作，应该添加对HTTP请求的判断，因为一些AJAX请求是不进行路由跳转的导致失效，在登录失效之后对HTTP请求加上重定向判断应该可以解决此问题。
在元素中使用onclick="fn(1,2,3,)"绑定函数，当函数参数名为空时在某些浏览器会报错，Unexpected token 肯定就是那个地方少了对应的符号，比如“”，只有一般就会报这个错误，会在<!DOCTYPE html>这个地方报错！,该问题也很可能时传入参数类型的问题，
在IE浏览器中，可以测试出标签的正确闭合问题

2018.7.26
学习，今天目标开始跳进异步编程的坑，学习使用ES6的Promise对象开始，希望不要踩太多的坑。
Promise 对象的特点
（1）对象的状态不受外界影响。三个状态：pending(进行中)、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何操作都无法改变这个状态。“承诺”
（2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。冲进行变成成功，或者进行变成失败。pending => fulfilled 和 pending => rejected。 结果确定称为 resolved（已定型）。如果改变已经发生了，再对Promise 对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点，如何你错过了它，再去监听，是得不到结果的。

2018.8.2
这几天在做前端优化，负责的项目进行优化
从对css的压缩，公共js的提取，html结构的优化开始
1、js优化：  之前使用jQuery的AJAX 进行操作，由于以前能力不足使用了AJAX的同步请求，导致网页有时候会卡死，此次js优化开始尝试使用ES6 的Promise 进行异步编程，改了很多东西总算把功能做好了，不过还有一些Javascript的函数感觉还可以继续优化，先保留优化权利。
2、AJAX操作页面的状态保持，使用了sessionStorage 进行存储离开页面之前的AJAX状态，在重新回到这个页面之后进行判断sessionStorage的状态进行调用AJAX保持未刷新的操作，暂时使用这个（后面找到好的方法在补充）缺点，会多次调用AJAX需要多次写入sessionStirage，不过能够解决需求就好
3、一些相同接口请求返回的参数相同时候使用sessionStorage进行数据保存，当有session不为空时直接解析sessionStorage的值，大大减少AJAX的请求次数，得以优化。
4、一个特别坑的问题，使用jQuery的AJAX方法进行异步请求时候，当你设置了contenttype 的时候，在使用Promise 进行调用时候，参数不正确的情况下会不断刷新页面，相当于http攻击，之后可能需要防范一下

前端分页的了解
1、将后端得到的数据进行处理，将处理过的数据传入模板中进行渲染，结束，等待点击时候将处理数据的参数传入到参数处理函数里面，返回需要的参数重新渲染分页。

2018.8.8
1、最近时候VUE进行原先项目MVC 的cshtml的重构，由于对于vue有段时间不使用了，而且之前不是很少，再加上期间有一些需求和bug需要处理，项目搭建就快一周了才搭建好（表示需要不断学习）
此次使用的是vue脚手架进行搭建项目，全局安装vue-cli 命令为 npm install -g vue-cli 之后使用vue init webpack project （项目名称）开始创建文件夹并下载模板，然后切换进项目目录中进行依赖下载
重构思想：开发一个单页面应用，利用APP.vue进行根节点的挂载，在其中使用一个Login组件与Index组件作为一级路由，登录成功之后跳转到Index 页面，然后其中的一些功能页路由依托Index路由完成渲染，
技术栈： 
生产依赖: Vue 2.5.2 + VueX 3.0.1 + vuerouter + 3.0.1 + axios 0.18.0 
开发依赖：less + elementUI
Vuex的 状态绑定v-module 需要进行设置set：

2、对于项目健壮性的建议是可以使用typescript进行编写js代码，然后在AJAX请求处理方面使用webpack-dev-server的请求代理进行转接到后端服务中，然后就可以使用后台服务了

3、在一些页面上使用静态页面可以不需要进行访问源站，进行CND的存储能够极大的提高访问速度，这是一个项目整体优化的方向

4、对于开发的一些个人理解，认为需要一个明确的流程进行项目开发，保证提交的代码没有问题之后可以反思一下，到底是做了哪些更改，这些更改的必要性，需要的时间，取到的效果等，可以给这次的需求打一个分数，然后休息一下进行下一步的项目，在项目开发的时候常常会被改动，因为项目是根据数据分析得来的，可以不用抗拒新需求，但是要有一下时间去时间，比如项目一星期，做到一般，提需求了，人员确定需要可行，然后就需要考虑该需求的完成项目的总时间了，不能完成需求之后还要这周完成之前的项目的，很幸运的是老大是技术人员，所以这个我是享受到了

5、客户端网站的重构，准备仿照后端的项目重构进行开发，做完了在继续写吧

2018.8.29

最近在维护H5活动页，
1、移动端在手机上适配问题比较严重微信浏览器或者普通的浏览器都有一些兼容性问题，目前笨方法是使用css3的媒体查询进行渲染区域的大小进行写不同的样式代码去适配手机，
2、在通过AJAX获取数据在渲染的问题上，不可简单的通过return AJAX请求结果，然后调用参数，这样在网络不畅通的情况下会返回undefind值，造成想要的效果丢失，方法：（1）使用同步请求，可能会造成浏览器卡死，（2）使用异步编程，目前我使用的是ES6的Promise 异步函数，在resolve的时候在进行操作可以保证返回的数据是ok的。

VUE 项目重构.Net的MVC项目
使用Vuex进行全局的状态管理可以保证组件之间的传递有效化，在公共js方向上目前是写进一个js文件里面，然后在组件中引入在使用，感觉不是很理想，还在探索中

2018.9.6

最近写了一个H5转盘的页面，使用vue框架写，逻辑比较简单，主要是移动端的适配问题，对于转盘的旋转动画用tranation 过渡属性比aniation 简单一下，兼容性好，这两个属性冲突，后面添加的不执行，使用vue的自动添加样式前缀可以更方便支持移动端

vue的项目，对象不能直接赋值，第一次赋值是成功的，后面再重新赋值的话会出现该对象变成要赋值的对象了

2018.9.14
VUE中使用ElementUi的el-input 对于@keyup,等键盘事件需要添加修饰器 .native才会触发，对于一些点击事件不想冒泡等待都可以通过添加修饰器解决，





2018.10.12
学习Vue原理： 
1、间戳变化需要在data对象上存在才是响应式的
2、使用set方法添加对象属性可以响应个更新Vue.set(object, key, value)
3、由于 Vue 不允许动态添加根级响应式属性，必须在初始化实例前声明根级响应式属性


2018.12.12
总结
从10月份国庆回归，开发了两个H5页面，一个比较有意思的是需要使用上下滑动大概范围的滑动切换，我使用的swiper插件，刚开始有点不知所云所以开发周期有4天左右，而且在滑动到最后一块高亮的时候需要添加一个多余的空白块，用于高亮跳转。另一个较简单不纪录了

学习笔因为加班或者其他原因忘记写了，很愧疚自己的内心

2、开发了一个大数据的后台系统，
因为是用于查询的后台，所以交互少，正则会少很多开发速度较快，使用了ElementUI框架进行快速成型，

3、为了配合大数据后台客户端，使用node的express框架搭建了一个代理服务器，有登录、验证码等功能，使用了session进行登录状态校验，登录过期的接口， 退出登录的接口等等，花园所有的前端请求都使用了request模块进行转发，解决了axjx跨域问题

4、11月底，大数据后台还未正式上线，接到自建站项目，随后急忙将大数据后台进行上线，12月初开始着手了解自建站内容
    自建站项目开始，使用vue进行开发，
    自建站的组件主要使用组件式的设计，添加的为一套组件，设置数据的为另一套组件，使用vue的：is="comment"组件的功能进行开发，
    在生成的最后导出html字符串进行存储，辅以相对于的css和js即可完成自建站的开发
    编辑数据存储为json对象，在需要进行编辑的时候使用vuex的提交完成项目重新编辑
    昨天开始开发了一个自建站的站点管理页面，有此页面可以进行站点预览与站点重新编辑入口


