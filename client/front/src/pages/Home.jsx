import React, { Component } from 'react';
import { Link } from 'react-router';
import PostList from '../components/PostList.jsx'
import Pagination from '../components/Pagination.jsx';

import {countPost, getPostByPage} from '../utils/request';

class Home extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentPage: 1,
            pageNum: 0,
            limit: 6,
            postList: []
        };

        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
    }

    componentWillMount() {
        countPost()
            .then(res => {
                let pageNum = Math.ceil(res/this.state.limit); 
                this.pageQuery(pageNum);
            })
    }

    pageQuery(newPageNum=0, currentPage) {
        // 如果不传入currentPage参数，说明是在页面加载时调用此方法，设置currentPage = url中的page参数
        currentPage = currentPage ? currentPage : parseInt(this.props.location.query.page);
        // 经过上面的处理，如果currentPage依然不存在，则默认加载第一页
        currentPage = currentPage ? currentPage : 1;

        getPostByPage(newPageNum, currentPage, this.state.limit)
            .then(res => {
                this.setState({
                    pageNum: newPageNum,
                    currentPage: currentPage,
                    postList: res
                });
            })
    }

    handleNext() {
        let {pageNum, currentPage} = this.state;
        
        if (currentPage >= pageNum) {
            return;
        }

        currentPage++;
        this.pageQuery(pageNum, currentPage);
        this.setState({
            currentPage: currentPage
        });
    }
    
    handlePrev() {
        let {pageNum, currentPage} = this.state;
        
        if (currentPage <= 1) {
            return;
        }

        currentPage--;
        this.pageQuery(pageNum, currentPage);
        this.setState({
            currentPage: currentPage
        });
    }
    
    
    render() {
        const {pageNum, currentPage, postList} = this.state;

        return (
            <section>
                <PostList postList={postList} />
                <Pagination 
                    currentPage={currentPage}
                    pageNum={pageNum} 
                    next={this.handleNext}
                    prev={this.handlePrev}/>
            </section>
        );
    }
}

export default Home;