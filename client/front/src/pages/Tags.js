import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import {getTag} from '../utils/request';

import style from '../styles/Tags.css'

class Tags extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: []
        };
    }

    componentWillMount() {
        getTag()
        .then(res => {
            this.setState({tags: res});
        });
    }

    /**
     * 初始化对象tagList；
     * tagList的格式为 {'css':[post1,post2],'js':[post2,post3]}
     */
    // initTagsList(postList) {
    //     let tagList = {};

    //     for (let post in postList) { // 遍历每篇文章
    //         let newPost = {};

    //         newPost = {
    //             "id": postList[post].id,
    //             "title": postList[post].title,
    //             "time": postList[post].time
    //         }

    //         if (postList[post].hasOwnProperty('tags')) {
    //             let tags = postList[post].tags;

    //             for (let i in tags) { // 遍历每篇文章的tags
    //                 let tag = tags[i];

    //                 if (!tagList[tag]) { // 如果这个tag不存在，为这个tag创建一个新数组
    //                     tagList[tag] = [];
    //                 }
    //                 // 把构建的newPost放进每个tag对象中
    //                 tagList[tag].push(newPost);
    //             }
    //         }
    //     }
    //     return tagList;
    // }

render() {

    const {tags} = this.state;
    return (
        <div className={style.tags}>
            <div className={style.allTags}>
                <h2>All Tags</h2>
                <p className={style.tagList}>
                    {
                        tags.map((tag) => {
                            return (
                                <Link key={tag['_id']} to={`/tag/${tag.name}`}>{tag.name}</Link>
                            )
                        })
                    }
                </p>
            </div>
        </div>
    )
}
}

export default Tags;
