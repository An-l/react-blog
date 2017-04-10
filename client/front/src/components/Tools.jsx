import React, { Component } from 'react';

const Tools = () => {
    return (
        <div className='tools-wrap'>
            <a className="iconfont icon-totop" href="#" title="回到顶部" onClick={_toTop}></a>
            <a className="iconfont icon-comment" href="#cloud-tie-wrapper" title="去评论"></a>
        </div>
    );
}

function _toTop(e) {
    e.preventDefault();
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(fn) {
            setTimeout(fn, 17);
        };	
    }
    var doc = document.body.scrollTop? document.body : document.documentElement;
    Math.easeout(doc.scrollTop, 0, 8, function (value) {
        doc.scrollTop = value;
    });
}

// 缓动算法
// A现在的位置， B目标位置， rate速率
Math.easeout = function (A, B, rate, callback) {
    if (A == B || typeof A != 'number') {
        return;
    }
    B = B || 0;
    rate = rate || 2;
    
    let step = function () {
        A = A + (B - A) / rate;
        if (A < 1) {
            callback(B, true);
            return;
        }
        callback(A, false);
        requestAnimationFrame(step);
    }
    step();
}

export default Tools;