import React, { Component } from 'react';
import classnames from 'classnames';
import { Link, browserHistory } from 'react-router';
import hljs from 'highlight.js';

import CloudTie from '../components/CloudTie.jsx';
import Tools from '../components/Tools.jsx';
import Loading from '../components/Loading.jsx';

import { getPostById } from '../utils/request';

class Post extends Component {
     constructor (props) {
        super(props);

        this.state = {
            post:{},
            tocAcitve: false,
            loading: true
        };

        this._tocToggle = this._tocToggle.bind(this);
        this._tocShow = this._tocShow.bind(this);
        this._tocHide = this._tocHide.bind(this);
    }

    componentDidMount() {
        // console.log(this.props.params);
        let id = this.props.params.id;
        getPostById(id)
            .then(res => {
                if (res.name == 'CastError') {
                    browserHistory.push(`/404`);
                }else {
                    this.setState({
                        post: res,
                        loading: false
                    });
                    hljs.initHighlightingOnLoad();
                }
            });

        window.onclick = () =>{
            this._tocHide();
        }
    }
    componentWillUnmount() {
        window.onclick = null;
    }
    
    
    _tocToggle(e){
        e.stopPropagation();
        this.setState({
            tocAcitve: !this.state.tocAcitve
        });
    }

    _tocHide(e) {
        // debugger
        // e.stopPropagation();
        this.setState({
            tocAcitve: false
        });
    }

    _tocShow(e) {
        e.stopPropagation();
        this.setState({
            tocAcitve: true
        });
    }

    render() {
        const {post} = this.state;

        if (!Object.keys(post).length) {
            return <Loading />
        } else {
            return (
                this._renderPost(post)
            );
        }

    }

     // 渲染Toc的无状态组件
    _renderToc (post) {
        const tocDropdownClass = classnames(['post-toc-dropdown', {'active': this.state.tocAcitve}])
        const tocClass = classnames(['post-toc-content', {'active': this.state.tocAcitve}])
        return (
            <div className='post-toc' >
                <a title="目录" className={tocDropdownClass}>
                    <i className="iconfont icon-category" onClick={this._tocToggle}></i>
                </a>
                <div id="toc" className={tocClass}
                    onClick={this._tocShow}
                    dangerouslySetInnerHTML={{__html: post.toc}}>
                </div>
            </div>
        )
    }

     // 渲染文章content的无状态组件
    _renderContent ({ content='' }) {
        return (
            <div className="post-content"
                dangerouslySetInnerHTML={{__html: content}}>
            </div>
        )
    }
    _renderTags ( tags=[] ) {
        return (
            tags.map(tag => {
                return (
                    <Link to={`/tag/${tag}`} key={tag}>
                        <code className="notebook">{tag}</code>&nbsp;
                    </Link> 
                )
            })
        )
    }
    _renderPost(post) {
        return (
            <section className="post">
                <header>
                    <div className="post-meta">
                        <div className="date">{post.createdAt}</div>
                    </div>
                    <h1 className="post-title">{post.title}</h1>
                    <div className="post-info">
                        <p>
                            添加在分类「
                            <Link to={`category/${post.category}`} >
                                <code className="notebook">{post.category}</code>&nbsp;
                            </Link> 
                            」下 ，并被添加「
                            {this._renderTags(post.tags)}
                            」标签 ，最后修改于 
                            <i>{post.updatedAt}</i>
                        </p>
                    </div>
                </header>
                
                <div className="post-content-wrap">
                    { post.toc !== "" ? this._renderToc(post) : '' }
                    { post.content !== "" ? this._renderContent(post) : '' }
                </div>

                <p>-- END --</p>
                
                <Tools />
                <CloudTie id={post['_id']}/>
            </section>
        )
    }
}

export default Post;