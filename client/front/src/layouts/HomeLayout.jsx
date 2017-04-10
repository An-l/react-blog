import React, { Component } from 'react';
import NavBar from '../components/NavBar.jsx';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';

class HomeLayout extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         loading: true
    //     }
    //     this.initLoading = this.initLoading.bind(this);
    //     this.stopLoading = this.stopLoading.bind(this);
    // }
    // componentWillReceiveProps(prevProps, prevState) {
    //     this.initLoading();
    // }
    
    // stopLoading() {
    //     if (this.state.loading) {
    //         this.setState({
    //             loading: false
    //         });
    //     }
    // }
    // initLoading() {
    //     if (!this.state.loading) {
    //         this.setState({
    //             loading: true
    //         });
    //     }
    // }
    
    render() {
        return (
            <div className='body'>
                <header className='navbar-wrap'>
                    <NavBar />
                </header>
                <main className='main'>
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

// <ReactCSSTransitionGroup
//                         className='animation-wrap clearfix'
//                         component="div"
//                         transitionName="page"
//                         transitionEnterTimeout={500}
//                         transitionLeaveTimeout={500}>
//                         {React.cloneElement(this.props.children, {
//                             key: this.props.location.pathname,
//                             loading: this.state.loading,
//                             initLoading: this.initLoading,
//                             stopLoading: this.stopLoading
//                         })}
//                     </ReactCSSTransitionGroup>