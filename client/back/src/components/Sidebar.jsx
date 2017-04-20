import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Link, browserHistory } from 'react-router';
import { logout } from '../utils/request';


class Sidebar extends Component {
    static propTypes = {
        pathName: PropTypes.string
    }

    constructor(props) {
        super(props);

        this.state = {
            active: 'post'
        }
        this.handleLogout = this.handleLogout.bind(this);
    }

    
    componentWillMount() {
        this._getActiveNavItem(this.props);
    }
    
    // componentWillReceiveProps(nextProps) {
    //     this._getActiveNavItem(nextProps);
    // }

    _getActiveNavItem(props) {
        let pathName = props.pathName.match(/post|edit|category|setting/i);
        // console.log(pathName);
        pathName = pathName && pathName[0];
        
        this.setState({
            active: pathName || 'post'
        });
    }
    
    handleChange(item) {
        this.setState({
            active: item
        });
    }
    handleLogout() {
        logout()
            .then(res => {
                if (res.status === 'success') {
                    alert('注销成功!');
                    sessionStorage.removeItem('blog-token');
                    browserHistory.push('/admin');
                }else {
                    browserHistory.push('/admin');
                }
            })
    }

    render() {
        const checkActive = (mode) => classnames(['nav-link', {'active': this.state.active === mode}]);
        return (
            <section className='sidebar'>
                <ul className='nav nav-pills nav-stacked nav-left'>
                    <li className="nav-item">
                        <Link 
                            className={checkActive('post')}
                            title='文章列表'
                            to='/admin/manage/post' 
                            onClick={() => this.handleChange('post')}>
                                <i className="iconfont icon-note"></i>
                            </Link>
                    </li>
                    <li className="nav-item">
                            <Link 
                                className={checkActive('category')}
                                title='分类列表'
                                to='/admin/manage/category' 
                                onClick={() => this.handleChange('category')}>
                                    <i className="iconfont icon-regimentation"></i>
                                </Link>
                    </li>
                    <li className="nav-item">
                            <Link 
                                className={checkActive('edit')}
                                title='markdown编辑器'
                                to='/admin/manage/edit' 
                                onClick={() => this.handleChange('edit')}>
                                    <i className="iconfont icon-write"></i>
                                </Link>
                    </li>
                    <li className="nav-item">
                            <Link 
                                className={checkActive('setting')}
                                title='博客信息设置'
                                to='/admin/manage/setting' 
                                onClick={() => this.handleChange('setting')}>
                                <i className="iconfont icon-theme"></i>
                            </Link>
                    </li>
                </ul>
                <div className='logout'>
                    <Link 
                        className={checkActive('logout')}
                        title='注销'
                        onClick={this.handleLogout}>
                        <i className="iconfont icon-logout"></i>
                    </Link>
                </div>
            </section>
        );
    }
}

export default Sidebar;