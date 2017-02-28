import React, { PropTypes } from 'react'
import { Link } from 'react-router';
import { getPostById } from '../utils/request';

import style from '../styles/Home.css'

class Post extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            post:{}
        };
    }

    componentWillMount() {
        // console.log(this.props.params);
        const id = this.props.params.id;
        getPostById(id)
            .then(res => {
                this.setState({
                    post: res
                });
            });
    }

    render () {
        const {post} = this.state;

        return (
            <div className={style.post}>
                <h2 className={style.title}>
                    {post.title}
                </h2>
                <div className={style.time}>{post.createdAt}</div>
                <div className={style.tags}>
                    {
                        post.tags ?
                            post.tags.map((tag) => {
                                return (
                                    <Link key={tag} to={`/tag/${tag}`}>{tag}</Link>
                                )
                            })
                            : ''
                    }
                </div>
                <div className="post-content"
                    dangerouslySetInnerHTML={{__html: post.content}}>
                </div>
            </div>
        )
    }
}

export default Post;
