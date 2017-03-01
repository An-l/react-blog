import React, { Component } from 'react';
import { Link } from 'react-router';
import { getPostById } from '../utils/request';

class Post extends Component {
     constructor (props) {
        super(props);

        this.state = {
            post:{}
        };
    }

    componentWillMount() {
        // console.log(this.props.params);
        let id = this.props.params.id;
        getPostById(id)
            .then(res => {
                this.setState({
                    post: res
                });
            });
    }

    // 渲染Toc的无状态组件
    renderToc ({ toc={} }) {
        return (
            <div id="toc" className="toc"
            dangerouslySetInnerHTML={{__html: toc}}>
            </div>
        )
    }

     // 渲染文章content的无状态组件
    renderContent ({ content='' }) {
        return (
            <div className="post-content"
                dangerouslySetInnerHTML={{__html: content}}>
            </div>
        )
    }

    render() {
        const {post} = this.state;

        return (
            <article className="post">
                <div className="meta">
                    <div className="date">{post.createdAt}</div>
                </div>
                <h2 className="title">{post.title}</h2>
                <div className="content">
                    { post.toc !== "" ? this.renderToc(post) : '' }
                    { post.content !== "" ? this.renderContent(post) : '' }
                </div>

                <p>-- END --</p>
                <div className="post-info"><p> 发表于 <i>2017-02-25 15:46:41</i> ，
                    添加在分类「
                    <a href='#'><code className="notebook">Node.js</code></a> 
                    」下 ，并被添加「
                    <a href='#'><code className="notebook">git</code></a> 
                    」标签 ，最后修改于 <i>2017-02-27 13:28:15</i></p>
                </div>
            </article>
        );
    }
}

export default Post;