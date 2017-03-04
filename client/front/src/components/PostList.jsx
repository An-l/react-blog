import React, { Component } from 'react';
import { Link } from 'react-router';

class PostList extends Component {
    render() {
        let {postList} = this.props;

        return (
            <div className='post-list'>
                {
                    postList.map((post) => {
                        return (
                            <article className="post-item" key={post['_id']}>
                                <header>
                                    <div className="post-item-meta">
                                        <div className="date">{post.createdAt}</div>
                                    </div>
                                    <h2 className="post-item-title">
                                        <Link to={`/post/${post['_id']}`}>{post.title}</Link>
                                    </h2>
                                </header>
                                <div className="post-item-summary"
                                    dangerouslySetInnerHTML={{__html: post.summary}}>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        );
    }
}

export default PostList;