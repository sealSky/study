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