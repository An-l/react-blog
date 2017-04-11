import React, { Component } from 'react';
import { Link } from 'react-router';
import PostList from '../components/PostList.jsx'
import Pagination from '../components/Pagination.jsx';
import Loading from '../components/Loading.jsx';

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

    componentDidMount() {
        countPost()
            .then(res => {
                let pageNum = Math.ceil(res/this.state.limit);
                return pageNum;
            })
            .then(pageNum => {
                this._pageQuery(pageNum);
            })
    }

    // 分页，获取文章列表
    _pageQuery(newPageNum=0, currentPage) {
        // 如果不传入currentPage参数，说明是在页面加载时调用此方法，设置currentPage = url中的page参数
        currentPage = currentPage ? currentPage : parseInt(this.props.location.query.page);
        // 如果url中的page参数大于总页数，则加载第一页
        currentPage = currentPage > newPageNum ? 1 : currentPage;
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

    // 下一页
    handleNext() {
        let {pageNum, currentPage} = this.state;
        
        if (currentPage >= pageNum) {
            return;
        }

        currentPage++;
        this._pageQuery(pageNum, currentPage);
        this.setState({
            currentPage: currentPage
        });
    }

    // 上一页
    handlePrev() {
        let {pageNum, currentPage} = this.state;
        
        if (currentPage <= 1) {
            return;
        }

        currentPage--;
        this._pageQuery(pageNum, currentPage);
        this.setState({
            currentPage: currentPage
        });
    }
    
    render() {
        const {pageNum, currentPage, postList} = this.state;
        
        if (!postList.length) {
            return <Loading />
        } else {
            return (
                <section className='home'>
                    <PostList postList={postList} />
                    <Pagination 
                        currentPage={currentPage}
                        pageNum={pageNum} 
                        handleNext={this.handleNext}
                        handlePrev={this.handlePrev}/>
                </section>
            )
        }
    }

}

export default Home;