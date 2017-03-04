import React, { Component } from 'react';
import { Link } from 'react-router';
import PostList from '../components/PostList.jsx'
import Pagination from '../components/Pagination.jsx';

import {getPostList} from '../utils/request';

class Home extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentPage: 1;
            postList: []
        }
    }

    
    componentWillMount() {
        // 获取文章列表
        pageQuery()
            .then(res => {
                this.setState({
                    postList: res
                });
            });
    }
    
    
    render() {
        const {currentPage, postList} = this.state;

        return (
            <section>
                <PostList postList={postList} />
                <Pagination currentPage={currentPage}/>
            </section>
        );
    }
}

export default Home;