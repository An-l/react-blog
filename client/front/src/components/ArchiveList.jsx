import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class ArchiveList extends Component {
    static propTypes = {
        postList: PropTypes.array
    }
    constructor(props) {
        super(props);

        this.state = {
            timeList: {}
        }
    }

    componentWillMount() {
        this._initTimeList(this.props.postList);
    }

    componentWillReceiveProps(nextProps) {
        this._initTimeList(nextProps.postList);
    }
    
    

     // 从获取的文章数组中，初始化时间列表对象
    _initTimeList(postList) {
        let newTimeList = {};

        postList.length && postList.forEach(post => {
            let timeArr = post['createdAt'].split("-",2);
            let year = timeArr[0];

            if(!newTimeList[year]){
                newTimeList[year] = [];
            }
            newTimeList[year].push(post);
        });

        this.setState({
            timeList: newTimeList
        });
    }
   
    // 渲染文章列表
    renderPostList(timeList) {
        return (
            // 先对对象属性进行排序，然后遍历输出
            Object.keys(timeList).sort((a,b) => b-a).map(year => this.renderPostListByYear(timeList, year) )
        )
    }

    // 根据年份渲染文章列表
    renderPostListByYear(timeList, time) {
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
                                        (&nbsp;
                                        <span className='createdAt'>{post.createdAt.slice(0,10)}</span>
                                        <span className='tags'>标签:
                                            {
                                                post.tags.length!==0 ? this.renderTags(post.tags) : ' '
                                            }
                                        </span>
                                        &nbsp;)
                                    </span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    // 渲染标签列表
    renderTags(tags) {
        return tags.map((tag) => {
            return (
                <Link key={tag} className="article-tag-link notebook" to={`tag/${tag}/`}>{tag + '  '} </Link>
            )
        });
    }

    render() {
        return (
            <div className="archive-list">
                {this.renderPostList(this.state.timeList)}
            </div>
        );
    }
}

export default ArchiveList;