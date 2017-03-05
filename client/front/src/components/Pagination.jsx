import React, { Component } from 'react';
import { Link } from 'react-router';

class Pagination extends Component {
    render() {
        let {pageNum, currentPage, next, prev} = this.props;
        return (
            <nav className='pagination'>
                {
                    currentPage > 1 && <Link to={`?page=${currentPage-1}`} className='prev' onClick={prev}>« 上一页</Link>
                }
                {
                    currentPage < pageNum && <Link to={`?page=${currentPage+1}`} className='next' onClick={next}>下一页 »</Link>
                }
                
                <div className='pagination-center'>
                    <Link to={'/archive'}>博客归档</Link>
                </div>
            </nav>
        );
    }
}

export default Pagination;