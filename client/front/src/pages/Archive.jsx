import React, { Component } from 'react';
import { Link } from 'react-router';
import {getPostList} from '../utils/request';

class Archive extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            timeList: {}
        }
    }
    
    componentWillMount() {
        getPostList()
            .then(res => {
                this.initTimeList(res);
            })
    }

    initTimeList(postList) {
        let newTimeList = {};

        postList.forEach(post => {
            let timeArr = post['createdAt'].split("-",2);
            let year = timeArr[0];
            let mon = timeArr[1];

            if(!newTimeList[year]){
                newTimeList[year] = {};
            }
            if(!newTimeList[year][mon]){
                newTimeList[year][mon] = [];
            }
            newTimeList[year][mon].push(post);
        });

        this.setState({
            timeList: newTimeList
        });
    }
    
    renderArchiveList () {
        let {timeList} = this.state;
        return (
            Object.keys(timeList).map(year => {
                return (
                    Object.keys(timeList[year]).map(mon => {
                        return (
                            <div className='archive-item' key={mon}>
                                <h3>{year}年{mon}月 ({timeList[year][mon].length})</h3>
                                <ul>
                                    {
                                        timeList[year][mon].map(post => {
                                            return (
                                                <li key={post.title}>
                                                    <Link to={`/post/${post['_id']}`} title={post.title}>
                                                        {post.title}
                                                    </Link>
                                                    &nbsp;
                                                    <span className='date'>{post.createdAt.slice(0,10)}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                )
            })
        )
    }
    
    
    render() {
        return (
            <article className='archive'>
                <h2 className='title'>归档</h2>
                {
                    this.renderArchiveList()
                }
            </article>
        );
    }
}

export default Archive;