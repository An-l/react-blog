import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Pagination extends Component {
    static propTypes = {
        currentPage: PropTypes.number,
        pageNum: PropTypes.number,
        handleNext: PropTypes.func,
        handlePrev: PropTypes.func
    }

    render() {
        let {pageNum, currentPage, handleNext, handlePrev} = this.props;
        return (
            <nav className='pagination'>
                {
                    currentPage > 1 && <Link to={`?page=${currentPage-1}`} className='prev' onClick={handlePrev}>« 上一页</Link>
                }
                {
                    currentPage < pageNum && <Link to={`?page=${currentPage+1}`} className='next' onClick={handleNext}>下一页 »</Link>
                }
                
                <div className='pagination-center'>
                    <Link to={'/archive'}>博客归档</Link>
                </div>
            </nav>
        );
    }
}

export default Pagination;