import React, { Component } from 'react';
import {Link} from 'react-router';

import {getTag, getTagNum} from '../utils/request';

class Tags extends Component {
     constructor(props) {
        super(props);

        this.state = {
            tags: [],
            postNumObj: {}
        };
    }

    componentWillMount() {
        getTag()
        .then(res => {
           this.CountPostByTag(res);
        });
    }

    // 计算当前tag下有多少篇文章
    CountPostByTag( tags ) {
       let newPostNumObj = {};

        tags.map((tag) => {
            let tagName = tag.name;

            getTagNum(tagName)
                .then(num => {
                    if (!newPostNumObj[tagName]) {
                        newPostNumObj[tagName] = 0;
                    } 
                    if (num !== 0) {
                        newPostNumObj[tagName] = num;
                    }
                })
                .then(() => {
                     this.setState({
                        tags: tags,
                        postNumObj: newPostNumObj
                    });
                })
        })
    }

    render() {
        const {tags, postNumObj} = this.state;

        return (
            <article className='tags'>
                <h2 className='title'>标签</h2>
                <section className='content'>
                    {
                        Object.keys(postNumObj).map((tag) => {
                            return (
                                <Link key={tag} to={`/tag/${tag}`} >
                                    {`${tag}(${postNumObj[tag]})`}
                                </Link>
                            )
                        })
                    }
                </section>
            </article>
        );
    }
}

export default Tags;