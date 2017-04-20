import React, { Component, PropTypes } from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import marked from 'marked';
import hljs from 'highlight.js';
import classnames from 'classnames';

import { createPost, updatePostById } from '../utils/request';

class markdownApp extends Component {
    static propTypes = {
        post: PropTypes.object,
        category: PropTypes.array,
        isUpdate: PropTypes.bool
    }

    constructor(props) {
        super(props);

        let post = this.props.post;
        this.state = {
            post: post,
            title: '',
            category: '',
            tags: [],
            createdAt: '',
            updatedAt:'',
            content: '',
            markdownContent: '',

            mode: 'split',
            isFullScreen: false,
            isUpdate: false
        }
        
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        this.input.focus();

        const post = this.props.post;
        this.setState({
            post: post,
            title: post.title || '',
            category: post.category || this.props.category[0].name || '',
            tags: post.tags || [],
            createdAt: post.createdAt || '',
            updatedAt: post.updatedAt || '',
            content: this._convertor(post.markdownContent || '') || '',
            markdownContent: post.markdownContent || '',

            isUpdate: this.props.isUpdate
        });
    }

    
    // content string → [string|null] 生成目录
    _createToc(content){
        if (typeof content !== 'string') {
            return null;
        }
        
        var div = document.createElement("div");
        div.innerHTML = content;

        let tocArr = div.getElementsByClassName('toc');
        

        let h2Ul = document.createElement("ul"),
            h3Ul = document.createElement("ul");

        for (let i = 0; i < tocArr.length; i++) {

            let h = tocArr[i];

            // 生成 <li><a href='xxx'></a></li>
            let li = document.createElement("li");
            let a = document.createElement("a");
            a.setAttribute('href', '#' + h.textContent.replace(/\s/g,''));
            a.innerHTML = h.textContent;
            li.appendChild(a);

            if (h.nodeName === 'H2') {
                // 如果当前元素是h2，直接插入h2Ul中
                h2Ul.appendChild(li)
            } else if (h.nodeName === 'H3') {
                // 如果当前元素是h3
                if (tocArr[i-1] && tocArr[i-1].nodeName === 'H2') { 
                    //如果上一个元素是h2，新建一个h3Ul，并将h3Ul插入到h2Ul中
                    h3Ul = document.createElement("ul");
                    h3Ul.appendChild(li);
                    h2Ul.lastChild.appendChild(h3Ul);
                }else {
                    //如果上一个元素是h3，将生成的li直接插入之前的h3Ul中
                    h3Ul.appendChild(li);
                }
            }
        }
        
        return h2Ul.outerHTML;
    }

    _verifyResult(res, Str) {
        if (!res) {
            return alert(Str + '失败！');
        }
        alert(Str + '成功！');
    }

    // 设置marked插件属性，以及highlight方式
    _convertor(markdownContent) {
        let rendererMD = new marked.Renderer();
        marked.setOptions({
            renderer: rendererMD,
            highlight: function (code) {
                return hljs.highlightAuto(code).value;
            },
            gfm: true, //允许 Git Hub标准的markdown.
            tables: true, //允许支持表格语法
            breaks: true, //允许回车换行。该选项要求 gfm 为true。
            pedantic: false, //不纠正原始模型任何的不良行为和错误
            sanitize: false, //对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
            smartLists: true, //使用比原生markdown更时髦的列表。
            smartypants: false //使用更为时髦的标点，比如在引用语法中加入破折号。 
        });

        rendererMD.heading = (text, level) => {
            return `<h${level} id=${text.replace(/\s/g,'')} class=toc>${text}</h${level}>`;
        }

        return marked(markdownContent);
    }

    // 改变显示的模式
    _changeMode(mode) {
        return (e) => {
            this.setState({
                mode: mode
            });
        }
    }
    // 是否全屏显示
    _toggleFullScreen() {
        this.setState({
            isFullScreen: !this.state.isFullScreen
        });
    }


    handleTextAreaChange(value) {
        this.setState({
            content: this._convertor(value),
            markdownContent: value
        });
    }

    handleInputChange(e) {
        let newState = {};
        newState[e.target.name] = e.target.value;
        // 如果输入的是tags，根据','分割成数组
        if (e.target.name === 'tags') {
            let tags = e.target.value.split(',');
            newState['tags'] = tags;
        }
        
        this.setState(newState);
    }

    // 设置快捷键
    handleKeyDown(e) {
        if (!e.ctrlKey) {
            return;
        }
        switch (e.keyCode) {
            case 66:
                this._boldText();  //ctrl+b 加粗
                break;
           case 73:
                this._italicText();  //ctrl+i 斜体
                break;
            case 76:
                this._linkText();  //ctrl+l 链接
                break;
            // case 81:
            //     this._blockquoteText();  //ctrl+l 链接
            //     break;
            case 81:
                this._blockquoteText();  //ctrl+q 引用
                break;
            case 75:
                this._codeText();  //ctrl+k 代码
                break;
            case 71:
                this._pictureText();  //ctrl+g 图片
                break;
            case 79:
                this._listOlText();  //ctrl+o  有序列表
                break;
            case 75:
                this._listUlText();  //ctrl+u 无序列表
                break;
            case 72:
                this._headerText();  //ctrl+h 标题
                break;
        }
    }

    // 提交表单
    handleSubmit(e) {
        e.preventDefault();
        let {post, title, category, tags, createdAt, updatedAt, content, markdownContent} = this.state;

        let date = new Date(),
            year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate(),
            hours = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds();

        month = month >= 10 ? month : '0' + month;
        day = day >= 10 ? day : '0' + day;
        

        let now = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
        if (!createdAt) {
            // 如果是第一次创建此文章
            createdAt = now;
        }
        updatedAt = now;

        let toc = this._createToc(content);

        let newPost = {
            title,
            category,
            tags,
            createdAt,
            updatedAt,
            content,
            markdownContent,
            toc
        };

        if (!this.state.isUpdate) {
            createPost(newPost)
                .then(res => {
                    this._verifyResult(res,'发表文章');
                })
        }else {
            updatePostById(post['_id'], newPost)
                .then(res => {
                    this._verifyResult(res,'编辑文章');
                })
        }
    }
    
    // 渲染toolBar组件
    renderToolBar() {
        return (
            <ul className="md-toolbar clearfix">
                <li className="tb-btn"><a title="加粗 ctrl+b" onClick={this._boldText.bind(this)}><i className="iconfont icon-bold"></i></a></li>{/* bold */}
                <li className="tb-btn"><a title="斜体 ctrl+i" onClick={this._italicText.bind(this)}><i className="iconfont icon-italic"></i></a></li>{/* italic */}
                <li className="tb-btn spliter"></li>
                <li className="tb-btn"><a title="链接 ctrl+l" onClick={this._linkText.bind(this)}><i className="iconfont icon-link"></i></a></li>{/* link */}
                <li className="tb-btn"><a title="引用 ctrl+q" onClick={this._blockquoteText.bind(this)}><i className="iconfont icon-indent"></i></a></li>{/* blockquote */}
                <li className="tb-btn"><a title="代码段 ctrl+k" onClick={this._codeText.bind(this)}><i className="iconfont icon-code"></i></a></li>{/* code */}
                <li className="tb-btn"><a title="图片 ctrl+g" onClick={this._pictureText.bind(this)}><i className="iconfont icon-image"></i></a></li>{/* picture-o */}
                <li className="tb-btn spliter"></li>
                <li className="tb-btn"><a title="有序列表 ctrl+o" onClick={this._listOlText.bind(this)}><i className="iconfont icon-orderedlist"></i></a></li>{/* list-ol */}
                <li className="tb-btn"><a title="无序列表 ctrl+u" onClick={this._listUlText.bind(this)}><i className="iconfont icon-unorderedlist"></i></a></li>{/* list-ul */}
                <li className="tb-btn"><a title="标题 ctrl+h" onClick={this._headerText.bind(this)}><i className="iconfont iconfont-header">H2</i></a></li>{/* header */}
                
            </ul>
        );
    }

    // 渲染modeBar组件
    renderModeBar() {
        const checkActive = (mode) => classnames({active: this.state.mode === mode});

        return (
             <ul className="md-modebar">
                <li className="tb-btn pull-right">
                    <a className={checkActive('preview')} onClick={this._changeMode('preview')} title="预览模式">
                        <i className="iconfont icon-preview"></i>
                    </a>
                </li> 
                <li className="tb-btn pull-right">
                    <a className={checkActive('split')} onClick={this._changeMode('split')} title="分屏模式">
                        <i className="iconfont icon-columns"></i>
                    </a>
                </li> 
                <li className="tb-btn pull-right">
                    <a className={checkActive('edit')} onClick={this._changeMode('edit')} title="编辑模式">
                        <i className="iconfont icon-write1"></i>
                    </a>
                </li>
                <li className="tb-btn spliter pull-right"></li>
                <li className="tb-btn pull-right">
                    <a title="全屏模式" onClick={this._toggleFullScreen.bind(this)}>
                        <i className="iconfont icon-fullscreen"></i>
                    </a>
                </li> 
            </ul>
        );
    }
    
    
    // 渲染编辑组件
    renderEditor() {
        // let markdownContent = this.state.markdownContent || '';
        return (
            <section className='md-area' >
                <textarea className='md-content' 
                    placeholder="请输入markdown文本"
                    name='markdownContent'
                    ref={(editorDom) => {this.editorDom = editorDom}}
                    onChange={(e) => {this.handleTextAreaChange(e.target.value)}}
                    onKeyDown={(e) => {this.handleKeyDown(e)}}
                    value={this.state.markdownContent || ''}>
                </textarea>
            </section>
        );
    }

    // 渲染md视图组件
    renderShower() {
        return (
            <div className='md-shower'
                ref='shower'
                dangerouslySetInnerHTML={{ __html: this.state.content }}>
            </div>
        );
    }
    
    render() {
        let {title, category, tags, isFullScreen, mode} = this.state;
        const panelClass = classnames(['myEditor', {'fullscreen': isFullScreen}])
        const editorClass = classnames(['md-editor', mode]);

        return (
            <Form className='edit-wrapper'
                name='editForm'
                id='editForm'
                onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" name="title" placeholder="标题：我的标题" 
                        className='edit-title form-control form-control-lg'
                        ref={(input) => {this.input = input}}
                        name='title'
                        value={title || ''}
                        onChange={this.handleInputChange}/>

                    <div className='clearfix'>
                        <Input type="select" name="select" className='category'
                            className='edit-category'
                            name='category'
                            value={category}
                            onChange={this.handleInputChange}>
                            {
                                this.props.category.map(item => <option key={item.name}>{item.name}</option>)
                            }
                        </Input>

                        <Input type="text" name="tags" placeholder="标签，多个标签间用,分割"
                            className='edit-tags'
                            name='tags'
                            value={tags || []}
                            onChange={this.handleInputChange}/>
                    </div>


                    <div className={panelClass}>
                    <div className='md-menubar clearfix'>
                        {this.renderToolBar()}
                        {this.renderModeBar()}
                    </div>
                    <div className={editorClass}>
                        {this.renderEditor()}
                        
                        {this.renderShower()}
                    </div>
                </div>
            </Form>
        );
    }
  
    /**
     * 根据不同功能按钮，设置插入不同的text到textArea中
     * 
     * @param {string} text 需要插入的字符串: **加粗文字**
     * @param {number} preStart 插入的字符串中文字的开始位置
     * @param {number} preEnd 插入的字符串中文字的结束位置
     * 
     */
    _preInputText(text, preStart, preEnd) {
        const start = this.editorDom.selectionStart;
        const end = this.editorDom.selectionEnd;
        const orgin = this.editorDom.value;

        // 当所选中的位置包括了字符串
        if (start !== end) {
            const exist = orgin.slice(start, end);
            text = text.slice(0, preStart) + exist + text.slice(preEnd);
            preEnd = preStart + exist.length;
        }

        this.editorDom.value = orgin.slice(0, start) + text + orgin.slice(end);
        
        if (this.editorDom.setSelectionRange) {
            this.editorDom.setSelectionRange(start + preStart, start + preEnd);
            this.editorDom.focus();
        } else {
            console.log('该浏览器不兼容setSelectionRange方法');
        }
       
        this.setState({
            content: this._convertor(this.editorDom.value),
            markdownContent: this.editorDom.value
        });
    }



    _boldText() {
        this._preInputText("**加粗文字**", 2, 6);
    }
     _italicText () {
        this._preInputText("_斜体文字_", 1, 5)
    }
    _linkText () {
        this._preInputText("[链接文本](www.yourlink.com)", 1, 5)
    }
    _blockquoteText () {
        this._preInputText("> 引用", 2, 4)
    }
    _codeText () {
        this._preInputText("```\ncode block\n```", 4, 14)
    }
    _pictureText () {
        this._preInputText("![alt](www.yourlink.com)", 2, 5)
    }
    _listUlText () {
        this._preInputText("- 无序列表项0\n- 无序列表项1", 2, 8)
    }
    _listOlText () {
        this._preInputText("1. 有序列表项0\n2. 有序列表项1", 3, 9)
    }
    _headerText () {
        this._preInputText("## 标题", 3, 5)
    }
}

export default markdownApp;