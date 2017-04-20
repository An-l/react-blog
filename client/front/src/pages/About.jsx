import React, { Component } from 'react';

const About = () => {
    return (
        <section className='about'>
            <h2 className='title'>关于</h2>
            <div className="flex-item">
                <div className="flex-label">姓名:</div>
                <div className="flex-content">李志豪</div>
            </div>
            <div className="flex-item">
                <div className="flex-label">年龄:</div>
                <div className="flex-content">1994.01</div>
            </div>
            <div className="flex-item">
                <div className="flex-label">职业:</div>
                <div className="flex-content">Web前端开发</div>
            </div>
            <div className="flex-item">
                <div className="flex-label">Github:</div>
                <div className="flex-content"><a href="https://github.com/An-l" target="_blank">@An-l</a></div>
            </div>
            <div className="flex-item">
                <div className="flex-label">技能:</div>
                <div className="flex-content">
                    <ul>
                        <li>HTML5 + CSS3</li>
                        <li>ES6</li>
                        <li>React</li>
                        <li>JQuery</li>
                        <li>Bootstrap</li>
                        <li>WebPack</li>
                        <li>Gulp</li>
                        <li>SCSS</li>
                        <li>PHP</li>
                        <li>NodeJS</li>
                    </ul>
                </div>
            </div>
            <p>本站服务端采用 koa2 + mongoDB 搭建, 客户端采用 React + React-router 搭建</p>
            <p>网站分成前台和后台, 前后台均采用 SPA 模式, 前台近期内将会改为服务端渲染</p>
            <p>主要技术栈: koa2, mongoDB, react, react-router, webpack, es6, scss, bootstrap</p>
        </section>
    );
    
}

export default About;