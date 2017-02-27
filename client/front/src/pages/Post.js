import React, { PropTypes } from 'react'
import { Link } from 'react-router';

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
        fetch('http://localhost:3000/posts?id=' + id)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    post: res[0]
                });
            });
    }

    render () {
        const {post} = this.state;

        return (
            <div className={style.post}>
                <h2 className={style.title}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </h2>
                <div className={style.time}>{post.time}</div>
                <div className={style.tags}>
                    {
                        post.tags ?
                            post.tags.map((tag) => {
                                return (
                                    <a key={tag} href="#/tags">{tag}</a>
                                )
                            })
                            : ''
                    }
                </div>
                <div className="post-content">
                    <p>
                        {post.content}
                    </p>
                </div>
            </div>
        )
    }
}

export default Post;
