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
    renderTags ( tags=[] ) {
        return (
            tags.map(tag => {
                return (
                    <Link to={`tag/${tag}`} key={tag}>
                        <code className="notebook">{tag}</code>&nbsp;
                    </Link> 
                )
            })
        )
    }

    render() {
        const {post} = this.state;

        return (
            <section className="post">
                <header>
                    <div className="post-meta">
                        <div className="date">{post.createdAt}</div>
                    </div>
                    <h2 className="post-title">{post.title}</h2>
                </header>

                <div className="post-content">
                    { post.toc !== "" ? this.renderToc(post) : '' }
                    { post.content !== "" ? this.renderContent(post) : '' }
                </div>

                <p>-- END --</p>
                <div className="post-info"><p> 发表于 <i>{post.createdAt}</i> ，
                    添加在分类「
                    <code className="notebook">{post.category}</code>
                    」下 ，并被添加「
                    {this.renderTags(post.tags)}
                    」标签 ，最后修改于 <i>{post.updatedAt}</i></p>
                </div>
            </section>
        );
    }
}

export default Post;