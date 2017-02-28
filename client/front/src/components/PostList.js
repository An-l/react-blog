import React, { Component } from 'react';
import { Link } from 'react-router';

import style from '../styles/Home.css'

class PostList extends Component {
    render() {
        let {postList} = this.props;

        return (
            <div className="list">
            {
                postList.map((post) => {
                    return (
                        <div key={post['_id']} className={style.post}>
                            <h2 className={style.title}>
                                <Link to={`/post/${post['_id']}`}>{post.title}</Link>
                            </h2>

                            <div className={style.time}>{post.createdAt}</div>

                            <div className={style.tags}>
                                {
                                    post.tags ? post.tags.map((tag) => {
                                        return (
                                            <Link key={tag} to={`/tag/${tag}`}>{tag}</Link>
                                        )
                                    })
                                    : ''
                                }
                            </div>
                            <div className="post-content"
                                dangerouslySetInnerHTML={{__html: post.summary}}>
                            </div>
                            <p>
                                <Link to={`/post/${post['_id']}`} className={style.readMore}>... Read more</Link>
                            </p>
                        </div>
                    )
                })
            }
            </div>
        );
    }
}

export default PostList;