import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Tools from '../components/Tools.jsx';

class HomeLayout extends Component {
    render() {
        
        return (
            <div className='body'>
                <header className='navbar-wrap'>
                    <Navbar />
                </header>
                <main className='main'>
                    <Sidebar pathName={this.props.location.pathname}/>

                    <section className='content'>
                        
                        {this.props.children}

                    </section>
                </main>
            </div>
        );
    }
}

export default HomeLayout;