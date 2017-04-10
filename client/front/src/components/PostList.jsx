import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Loading from '../components/Loading.jsx';

class PostList extends Component {
    static propTypes = {
        postList: PropTypes.array
    }

    // 渲染文章列表
    renderPostList(postList) {
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
    
    render() {
        let {postList} = this.props;

        if (!postList.length) {
            return <Loading />
        } else {
            return (
                <div className='post-list'>
                    {this.renderPostList(postList)}
                </div>
            );
        }
    }
}

export default PostList;