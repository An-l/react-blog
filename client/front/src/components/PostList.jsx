import React, { Component } from 'react';
import { Link } from 'react-router';

class PostList extends Component {
    render() {
        let {postList} = this.props;

        return (
            <div className='post-list'>
                {
                    postList.length !== 0 ?
                    this._renderPostList(postList)
                    : this._renderNull()
                }
            </div>
        );
    }
    _renderPostList(postList) {
        return postList.map((post) => {
            let summary = post.content.slice(0,150) + '...';

            return (
                <article className="post-item" key={post['_id']}>
                    <header>
                        <h2 className="post-item-title">
                            <Link to={`/post/${post['_id']}`}>{post.title}</Link>
                        </h2>
                        <div className="post-item-meta">
                            <time className="post-item-time">{post.createdAt}</time>
                        </div>
                        <div className="post-item-info">
                            <Link className="post-item-category" 
                                to={`/category/${post.category}`}>
                                    {post.category}
                                </Link>
                        </div>
                    </header>
                    <div className="post-item-summary"
                        dangerouslySetInnerHTML={{__html: summary}}>
                    </div>
                </article>
            )
        })
    }

    _renderNull() {
        return (
            <div className='post-null'>
                <h3>没有找到文章。试试其它搜索？</h3>
            </div>
        )
    }
}

export default PostList;