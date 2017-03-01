import React, { Component } from 'react';
import { Link } from 'react-router';
import PostList from '../components/PostList.jsx'

import {getPostList} from '../utils/request';

class Home extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            postList: []
        }
    }

    
    componentWillMount() {
        // 获取文章列表
        getPostList()
            .then(res => {
                this.setState({
                    postList: res
                });
            });
    }
    
    
    render() {
        const {postList} = this.state;

        return (
            <section>
                <PostList postList={postList} />
            </section>
        );
    }
}

export default Home;