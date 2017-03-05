import React, {PropTypes} from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component {

    render() {
        return (
            <nav className='navbar'>
                <h1>An-l的小站</h1>
                <ul className='nav'>
                    <li>
                        <Link to="/" title="首页">
                            <i className="iconfont icon-home"></i>
                            <span className='text'>首页</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/archive" title="归档">
                            <i className="iconfont icon-archive"></i>
                            <span className='text'>归档</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/tag" title="标签">
                            <i className="iconfont icon-tags"></i>
                            <span className='text'>标签</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" title="关于">
                            <i className="iconfont icon-user"></i>
                            <span className='text'>关于</span>
                        </Link>
                    </li>
                </ul>
                <div className='sider-nav'>
                        <a rel="nofollow" target="_blank" href="https://github.com/An-l">
                            <i title="GitHub" className="iconfont icon-github"></i>
                        </a>
                        <a rel="nofollow" target="_blank" href="http://weibo.com/annnl">
                            <i title="Weibo" className="iconfont icon-zliconweibo01"></i>
                        </a>
                        <a href="/rss.xml">
                            <i title="RSS" className="iconfont icon-rss"></i>
                        </a>
                        <a target="_blank" href="https://www.google.com/webhp#newwindow=1&amp;safe=strict&amp;q=site:http://an-l.cn">
                            <i title="Search" className="iconfont icon-search"></i>
                        </a>
                </div>
            </nav>
        )
    }
}

export default NavBar;
