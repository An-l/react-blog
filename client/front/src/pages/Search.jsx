import React, { Component } from 'react';
import {Link} from 'react-router';
import PostList from '../components/PostList.jsx';

import {getPostByTitle} from '../utils/request';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: this.props.params.name || '',
            postList: []
        }
    }

    
    componentDidMount() {
        let searchValue = this.props.params.name;
        this._getPostList(searchValue);
        
    }
    componentWillReceiveProps(nextProps) {
        let searchValue = nextProps.params.name;
        this._getPostList(searchValue);
    }

    _getPostList(value) {
        getPostByTitle(value)
            .then(res => {
                this.setState({
                    searchValue: value,
                    postList: res
                });
            })
    }
    
    renderNull() {
        return (
            <div className='post-null'>
                <h3>没有找到文章。试试其它搜索？</h3>
            </div>
        )
    }
    
    render() {
        let {postList, searchValue} = this.state;

        return (
           <section className='search'>
                <h2 className='title'>搜索：<span className='tag-name'>{searchValue}</span></h2>
                {
                    postList.length ? <PostList postList={postList}/> : this.renderNull()
                }
    
            </section>
        );
    }

}

export default Search;