import React, { Component } from 'react';
import NavBar from '../components/NavBar.jsx';
import IfIE from '../components/IfIE.jsx';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';

class HomeLayout extends Component {
    render() {
        return (
            <div className='body'>    
                
                <header className='navbar-wrap'>
                    <NavBar />
                </header>
                <main className='main'>
                    <IfIE />
                    {this.props.children}
                    <footer className="footer">
                        © 2017&nbsp;-&nbsp; An-l的小站 &nbsp;-&nbsp;
                        <a target="_blank" href="https://github.com/an-l/blog">博客源码</a>
                        <br/> Powered by&nbsp;
                        <a target="_blank" href="https://github.com/react">React</a>
                        &nbsp;&amp;&nbsp;
                        <a target="_blank" href="https://github.com/koajs/koa/tree/v2.x">Koa2</a>
                    </footer>
                </main>
            </div>
        );
    }
}

export default HomeLayout;