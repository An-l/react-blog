import React, { Component } from 'react';
import { Link } from 'react-router';

class ArchiveList extends Component {
   
    render() {
        return (
            <div className="archive-list">
                {this._renderPostList(this.props.timeList)}
            </div>
        );
    }

     _renderPostList(timeList) {
        return (
            // 先对对象属性进行排序，然后遍历输出
            Object.keys(timeList).sort((a,b) => b-a).map(year => this._renderPostListByYear(timeList, year) )
        )
    }

    _renderPostListByYear(timeList, time) {
        if(Object.keys(timeList).length === 0) return;
        let year = time;
        
        return (
            <div key={year} className='archive-item'>
                <h3 className="archive-year">
                    {year} 年 ({timeList[year].length})
                </h3>
                <ul>
                    {
                        timeList[year].map(post => {
                            return (
                                <li key={post.title}>
                                    <Link to={`post/${post['_id']}`}>{post.title}</Link>
                                    <span className='post-info'>
                                        (
                                        <span className='createdAt'>{post.createdAt.slice(0,10)}</span>
                                        <span className='tags'>· 标签:
                                            {
                                                post.tags.length!==0 ? this._renderTags(post.tags) : ' '
                                            }
                                        </span>
                                        <span className="disqus-comment-count">·暂无评论)</span>
                                    </span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    
     _renderTags(tags) {
        return tags.map((tag) => {
            return (
                <Link key={tag} className="article-tag-link" to={`tag/${tag}/`}>{tag + '  '} </Link>
            )
        });
    }
}

export default ArchiveList;