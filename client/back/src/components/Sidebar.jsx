import React, { Component } from 'react';
import classnames from 'classnames';
import { Link, browserHistory } from 'react-router';
import { logout } from '../utils/request';


class Sidebar extends Component {
    constructor(props) {
        super(props);
        let pathName = this.props.pathName.slice(1);
        this.state = {
            active: pathName || 'home'
        }
        this.handleLogout = this.handleLogout.bind(this);
    }
    // componentWillReceiveProps(nextProps) {
    //     debugger
    // }
    
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
                    alert('注销失败！');
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
                        <Link className={checkActive('post')} to='/admin/manage/post' onClick={() => this.handleChange('post')}><i className="iconfont icon-note"></i></Link>
                    </li>
                    <li className="nav-item">
                            <Link className={checkActive('category')} to='/admin/manage/category' onClick={() => this.handleChange('category')}><i className="iconfont icon-regimentation"></i></Link>
                    </li>
                    <li className="nav-item">
                            <Link className={checkActive('edit')} to='/admin/manage/edit' onClick={() => this.handleChange('edit')}><i className="iconfont icon-write"></i></Link>
                    </li>
                    <li className="nav-item">
                            <Link className={checkActive('setting')} to='/admin/manage/setting' onClick={() => this.handleChange('setting')}><i className="iconfont icon-theme"></i></Link>
                    </li>
                </ul>
                <div className='logout'>
                    <Link className={checkActive('logout')}  onClick={this.handleLogout}><i className="iconfont icon-logout"></i></Link>
                </div>
            </section>
        );
    }
}

export default Sidebar;