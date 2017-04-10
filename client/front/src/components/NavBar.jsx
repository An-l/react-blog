import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import SearchBox from '../components/SearchBox.jsx';

import { getOption } from '../utils/request.js';

class NavBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            blogName : "An-l的小站",
            blogDescription : "",
            url : "an-l.cn",
            faviconUrl : "",
            logoUrl : "",
            githubUrl : "https://github.com/An-l",
            weiboUrl : "http://weibo.com/annnl",
            ICP : ""
        }
    }

    
    componentDidMount() {
        getOption()
            .then(res => {
                let {blogName, blogDescription, url, faviconUrl, logoUrl, githubUrl, weiboUrl, ICP} = res[0];
                this.setState({blogName, blogDescription, url, faviconUrl, logoUrl, githubUrl, weiboUrl, ICP});

                this._initFavicon(faviconUrl);
                this._consoleBlogDecription(blogDescription);

            })    
    }
    
    _initFavicon(faviconUrl) {
        let links = document.getElementsByTagName("link");
        for(let i=0;i<links.length;i++){
            let link = links[i];
            if(link.rel === "icon" || link.rel === "shortcut icon"){
                link.href = faviconUrl;
            }
        }
    }

    _consoleBlogDecription(value) {
        console.log(value);
    }

    render() {
        return (
            <nav className='navbar'>
                <h1>{this.state.blogName}</h1>
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
                        <a title="GitHub" target="_blank" href={this.state.githubUrl}>
                            <i className="iconfont icon-github"></i>
                        </a>
                        <a title="Weibo" target="_blank" href={this.state.weiboUrl}>
                            <i className="iconfont icon-zliconweibo01"></i>
                        </a>
                        <a title="RSS" target="_blank" href="/rss.xml">
                            <i className="iconfont icon-rss"></i>
                        </a>
                </div>
                <SearchBox />
            </nav>
        );
    }
}

export default NavBar;
