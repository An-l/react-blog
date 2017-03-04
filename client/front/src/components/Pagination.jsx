import React, { Component } from 'react';
import { Link } from 'react-router';
import {  } from '../utils/request';

class Pagination extends Component {
    render() {
        let {currentPage} = this.props;
        return (
            <nav className='pagination'>
                <Link to={`?page=2`} className='next'>下一页 »</Link>
                <div className='pagination-center'>
                    <Link to={'/archive'}>博客归档</Link>
                </div>
            </nav>
        );
    }
}

export default Pagination;