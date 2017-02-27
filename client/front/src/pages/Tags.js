import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import {getPost} from '../utils/request';

import style from '../styles/Tags.css'

class Tags extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            TagList: {}
        };
    }

    componentWillMount() {
        getPost()
        .then(res => {
            let tagList = {};
            tagList = this.initTagsList(res);

            this.setState({TagList: tagList});
        });
    }

    /**
     * 初始化对象tagList；
     * tagList的格式为 {'css':[post1,post2],'js':[post2,post3]}
     */
    initTagsList(postList) {
        let tagList = {};

        for (let post in postList) { // 遍历每篇文章
            let newPost = {};

            newPost = {
                "id": postList[post].id,
                "title": postList[post].title,
                "time": postList[post].time
            }

            if (postList[post].hasOwnProperty('tags')) {
                let tags = postList[post].tags;

                for (let i in tags) { // 遍历每篇文章的tags
                    let tag = tags[i];

                    if (!tagList[tag]) { // 如果这个tag不存在，为这个tag创建一个新数组
                        tagList[tag] = [];
                    }
                    // 把构建的newPost放进每个tag对象中
                    tagList[tag].push(newPost);
                }
            }
        }
        return tagList;
    }

render() {

    const {TagList} = this.state;
    return (
        <div className={style.tags}>
            <div className={style.allTags}>
                <h2>All Tags</h2>
                <p className={style.tagList}>
                    {
                        TagList ? Object.keys(TagList).map((tag) => {
                            return (
                                <a key={tag} href='javascript:;'>{tag}</a>
                            )
                        })
                        : ''
                    }
                </p>
            </div>
            {
                TagList ? Object.keys(TagList).map((tag) => {
                    let postList = TagList[tag];

                    return (
                        <div key={tag} className={style.tag}>
                            <h3>{tag}</h3>
                            <ul className={style.postList}>
                            {
                                TagList[tag].map((post) => {
                                    return (
                                        <li key={post.id} className={style.post}>
                                            <Link className={style.title} to={`/posts/${post.id}`}>
                                                {post.title}
                                            </Link>
                                            <span className={style.time}>
                                                {post.time}
                                            </span>
                                        </li>
                                    )
                                })
                            }
                            </ul>
                        </div>
                    )
                })
                : ''
            }
        </div>
    )
}
}

export default Tags;
