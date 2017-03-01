import React, {PropTypes} from 'react';
import { Link } from 'react-router';

import style from '../styles/index.scss'

class NavBar extends React.Component {

    render() {
        return (
            <nav className='navbar'>
                <h1>An-l的小站</h1>
                <ul className='nav'>
                    <li>
                        <Link to="/" title="首页">
                            <i className="iconfont icon-home"></i>
                            <span>首页</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/archive" title="归档">
                            <i className="iconfont icon-archive"></i>
                            <span>归档</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/tag" title="标签">
                            <i className="iconfont icon-tags"></i>
                            <span>标签</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" title="关于">
                            <i className="iconfont icon-user"></i>
                            <span>关于</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;
