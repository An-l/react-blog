import React, { PropTypes } from 'react'
import { Link } from 'react-router';

import {getPost} from '../utils/request';

import style from '../styles/Home.css'

class Tags extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            postList:[],
            limit: 2,
            loadMore: 3
        };

        this.clickLoadMore = this.clickLoadMore.bind(this);
    }

    clickLoadMore() {
        let limit = this.state.limit,
            len = this.state.postList.length,
            loadMore = this.state.loadMore;

        if (limit < len) {
            limit += loadMore;
        }

        this.setState({
            limit: limit
        });
    }

    componentWillMount() {
        getPost()
            .then(res => {
                this.setState({
                    postList: res
                });
            });
    }

    render () {
        const {postList, limit} = this.state;
        let idx = 0;

        let PostList = postList.map((post) => {
            if (idx > this.state.limit) {
                return;
            }
            idx++;
            return (
                <div key={post.id} className={style.post}>
                    <h2 className={style.title}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </h2>
                    <div className={style.time}>{post.time}</div>
                    <div className={style.tags}>
                        {
                            post.tags ? post.tags.map((tag) => {
                                return (
                                    <a key={tag} href="#/tags">{tag}</a>
                                )
                            })
                            : ''
                        }
                        </div>
                        <div className="post-content">
                            <p>
                                {post.content}
                            </p>
                        </div>
                        <p>
                            <Link to={`/posts/${post.id}`} className={style.readMore}>... Read more</Link>
                        </p>
                    </div>
            )
        });

        return (
            <div className='content-wrapper'>
                <div className="list">
                    {
                        PostList
                    }
                </div>
                <div className='paginator'>
                    <a href='javascript:;'
                        onClick={this.clickLoadMore}>
                        {
                            limit < postList.length-1 ? '-- MORE --' : '-- NO MORE --'
                        }
                    </a>
                </div>
            </div>
        )
    }
}

export default Tags;
