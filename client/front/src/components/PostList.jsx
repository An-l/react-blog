import React, { Component } from 'react';
import { Link } from 'react-router';

class PostList extends Component {
    render() {
        let {postList} = this.props;

        return (
            <div className='post-wrap'>
            {
                postList.map((post) => {
                    return (
                        <article className="post" key={post['_id']}>
                            <div className="meta">
                                <div className="date">{post.createdAt}</div>
                            </div>
                            <h2 className="title">
                                <Link to={`/post/${post['_id']}`}>{post.title}</Link>
                            </h2>
                            <div className="content"
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