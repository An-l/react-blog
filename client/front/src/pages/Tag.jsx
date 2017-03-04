import React, { Component } from 'react';
import {Link} from 'react-router';
import PostList from '../components/PostList.jsx';

import {getPostByTag} from '../utils/request';

class Tag extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            tagName: '',
            postList: []
        }
    }

    
    componentWillMount() {
        let tagName = this.props.params.name;

        getPostByTag(tagName)
            .then(res => {
                this.setState({
                    tagName: tagName,
                    postList: res
                });
            })
    }
    
    
    render() {
        let {postList, tagName} = this.state;

        return (
           <section className='tag'>
                <h2 className='title'>标签：<span className='tag-name'>{tagName}</span></h2>
                <PostList postList={postList}/>
            </section>
        );
    }
}

export default Tag;