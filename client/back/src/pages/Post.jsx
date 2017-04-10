import React, { Component } from 'react';
import PostList from '../components/PostList.jsx';
import Tools from '../components/Tools.jsx';
import { getPostList, deletePostById } from '../utils/request';    

class Post extends Component {
       constructor (props) {
        super(props);

        this.state = {
            postList:[],
            modal: false,
            activePost: ''
        };
        this.handelToggle = this.handelToggle.bind(this);
        this.handelDelete = this.handelDelete.bind(this);
    }

    componentDidMount() {
        getPostList()
            .then(res => {
                this.setState({
                    postList: res
                });
            });
    }

    handelToggle(post) {
        this.setState({
            modal: !this.state.modal,
            activePost: post
        });
    }

    handelDelete() {
        let id = this.state.activePost['_id'];
        // 从postList中删除activePost这篇文章
        let newPost = this.state.postList.filter(post => post !== this.state.activePost);
        // 发送delete请求，删除当前文章
        deletePostById(id);
        
        this.setState({
            postList: newPost,
            modal: !this.state.modal,
            activePost: ''
        });
    }

    render() {
        return (
            <div className='postPage'>
                <Tools title='文章列表'/>
                <div className='content-wrapper'>
                    <PostList 
                        postList={this.state.postList} 
                        modal={this.state.modal} 
                        handelToggle={this.handelToggle} 
                        handelDelete={this.handelDelete}/>
                </div>
            </div>
        );
    }
}

export default Post;