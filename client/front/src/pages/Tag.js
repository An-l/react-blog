import React, { Component } from 'react';
import {Link} from 'react-router';
import PostList from '../components/PostList';
import {getPostByTag} from '../utils/request';

import style from '../styles/Tags.css'

class Tag extends Component {
   constructor(props) {
        super(props);

        this.state = {
            postList: []
            tagName: ''
        };
    }

    componentWillMount() {
        let tagName = this.props.params.name;

        getPostByTag(tagName)
        .then(res => {
            this.setState({
                postList: res,
                tagName: tagName
            });
            
        });
    }

    render() {
        let {postList, tagName} = this.state;

        return (
            <div className={style.tag}>
                <h2>{tagName}</h2>
                <PostList postList={postList}/>
            </div>
        );
    }
}

export default Tag;