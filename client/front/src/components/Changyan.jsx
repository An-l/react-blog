import React, { Component } from 'react';
// import '../utils/changyan'

class Changyan extends Component {
    constructor(props) {
        super(props);
        // window.changyan = null;
        this.createNs();
        this.createMobileNs();
        this.loadVersionJs();

        window.changyan.api.config({
            appid: 'cysUfqicU',
            conf: 'prod_d6191ef1d2ad215ba5e37decd013f63b'
        })
    }
    
    
    render() {
        return (
            <div id="SOHUCS" sid={this.props.sid}></div>
        );
    }

    createNs() {
        // if (window.changyan !== undefined) {
        //     return;
        // } else {
            window.changyan = {};
            window.changyan.api = {};
            window.changyan.api.config = function (conf) {
                window.changyan.api.tmpIsvPageConfig = conf;
            };
            window.changyan.api.ready = function (fn) {
                window.changyan.api.tmpHandles = window.changyan.api.tmpHandles || [];
                window.changyan.api.tmpHandles.push(fn);
            };
            window.changyan.ready = function (fn) {
              if (window.changyan.rendered) {
                fn && fn();
              } else {
                window.changyan.tmpHandles = window.changyan.tmpHandles || [];
                window.changyan.tmpHandles.push(fn);
              }
            }
        // }
    };

    createMobileNs() {
        if (window.cyan) {
            return;
        }

        window.cyan = {};
        window.cyan.api = {};
        window.cyan.api.ready = function (fn) {
            window.cyan.api.tmpHandles = window.cyan.api.tmpHandles || [];
            window.cyan.api.tmpHandles.push(fn);
        };
    };


    loadVersionJs() {
        var loadJs = function (src, fun) {
            var head = document.getElementsByTagName('head')[0] || document.head || document.documentElement;

            var script = document.createElement('script');
            script.setAttribute('type', 'text/javascript');
            script.setAttribute('charset', 'UTF-8');
            script.setAttribute('async', 'async');
            script.setAttribute('src', src);

            if (typeof fun === 'function') {
                if (window.attachEvent) {
                    script.onreadystatechange = function () {
                        var r = script.readyState;
                        if (r === 'loaded' || r === 'complete') {
                            script.onreadystatechange = null;
                            fun();
                        }
                    };
                } else {
                    script.onload = fun;
                }
            }

            head.appendChild(script);
        };

        var ver = +new Date() + window.Math.random().toFixed(16);
        var protocol = (('https:' == window.document.location.protocol) ? "https://" : "http://");
        var url = protocol + 'changyan.itc.cn/upload/version-v3.js?' + ver;
        loadJs(url);
    };

}

export default Changyan;