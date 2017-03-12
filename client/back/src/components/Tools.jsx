import React, { Component } from 'react';

class Tools extends Component {
    render() {
        return (
            <div className='tools'>
                <form className="search">
                    <input type="text" className="form-control" id="search-input" placeholder="搜索..." />
                    <div className="dropdown-menu bd-search-results" id="search-results"></div>
                </form>
            </div>
        );
    }
}

export default Tools;