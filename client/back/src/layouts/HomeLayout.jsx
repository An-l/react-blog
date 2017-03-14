import React, { Component } from 'react';
import { Link } from 'react-router';
import Navbar from '../components/Navbar.jsx';
import Tools from '../components/Tools.jsx';

class HomeLayout extends Component {
    render() {
        const {children} = this.props;
        
        return (
            <div className='body'>
                <header className='navbar-wrap'>
                    <Navbar />
                </header>
                <main className='main'>
                    <section className='sidebar'>
                        <ul className='nav nav-pills nav-stacked nav-left'>
                            <li className="nav-item">
                                <Link className='nav-link' to='/post'><i className="iconfont icon-note"></i></Link>
                            </li>
                            <li className="nav-item">
                                    <Link className='nav-link ' to='/category'><i className="iconfont icon-regimentation"></i></Link>
                            </li>
                            <li className="nav-item">
                                    <Link className='nav-link active' to='/edit'><i className="iconfont icon-write"></i></Link>
                            </li>
                            <li className="nav-item">
                                    <Link className='nav-link' to='/setting'><i className="iconfont icon-theme"></i></Link>
                            </li>
                        </ul>
                        <div className='logout'>
                            <Link className='nav-link' to='/postList'><i className="iconfont icon-logout"></i></Link>
                        </div>
                    </section>

                    

                    <section className='content'>
                        <Tools />
                        <div className='content-wrapper'>
                            {children}
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default HomeLayout;