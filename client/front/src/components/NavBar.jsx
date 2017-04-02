import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import SearchBox from '../components/SearchBox.jsx';    

class NavBar extends React.Component {

    render() {
        return (
            <nav className='navbar'>
                <h1>An-l的小站</h1>
                <ul className='main-nav'>
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
                        <Link to="/category" title="分类">
                            <i className="iconfont icon-category"></i>
                            <span className='text'>分类</span>
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
                        <a title="GitHub" target="_blank" href="https://github.com/An-l">
                            <i className="iconfont icon-github"></i>
                        </a>
                        <a title="Weibo" target="_blank" href="http://weibo.com/annnl">
                            <i className="iconfont icon-zliconweibo01"></i>
                        </a>
                        <a title="RSS" target="_blank" href="/rss.xml">
                            <i className="iconfont icon-rss"></i>
                        </a>
                        
                </div>
                <SearchBox />
            </nav>
        )
    }
}

export default NavBar;
