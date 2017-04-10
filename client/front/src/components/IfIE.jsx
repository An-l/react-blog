import React from 'react'

import classnames from 'classnames';

const IfIE = () => {
    let browser = myBrowser();
    let className = classnames(['ie', {'show': browser === 'IE'}]);
    return (
        <div className={className}>
            更好的阅读体验，请使用最新版的 Chrome 浏览器。
        </div>
    ); 
}


function myBrowser(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera"
    }; //判断是否Opera浏览器
    if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
    } //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1){
        return "Chrome";
 }
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } //判断是否Safari浏览器
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    }; //判断是否IE浏览器
}
export default IfIE;