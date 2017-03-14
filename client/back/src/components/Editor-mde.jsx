import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import marked from 'marked';
import hljs from 'highlight.js';
import classnames from 'classnames';
import 'highlight.js/styles/atom-one-light.css';

var str="Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*\n```javascript\nfunction(){\n  alert(hehe);\n}\n```"

class markdownApp extends Component {
   

    constructor(props) {
        super(props);
       
        this.state = {
            post: this.props.post,
            content: this._convertor(this.props.post.markdownContent || '') || '',
            markdownContent: this.props.post.markdownContent || '',
            mode: 'split',
            isFullScreen: false
        }
    }
    
    componentDidMount() {
        // 缓存dom节点
        this.editorDom = this.refs.editor;
        // debugger
        this.showerDom = this.refs.shower;
    }
    componentWillUnmount() {
        // 清空缓存的dom节点
        this.editorDom = null;
        this.showerDom = null;
    }
    
    handleTextAreaChange(value) {
        this.setState({
            content: this._convertor(value),
            markdownContent: value
        });
    }
    
    render() {
        let {post, content, isFullScreen, mode} = this.state;
        const panelClass = classnames(['myEditor', {'fullscreen': isFullScreen}])
        const editorClass = classnames(['md-editor', mode]);

        return (
            <Form className='edit-wrapper'>
                <FormGroup row>
                    <Col sm={12}>
                        <Input type="text" name="title" placeholder="标题：我的标题咯" size="lg"
                            value={post.title || ''} />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col sm={3}>
                         <Input type="select" name="select" className='category'>
                            <option>{post.category || ''}</option>
                        </Input>
                    </Col>
                    <Col sm={9}>
                        <Input type="text" name="tags" placeholder="标签" value={post.tags || ''}/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col sm={12}>
                    {/** 编辑器 **/}
                         <div className={panelClass}>
                            <div className='md-menubar clearfix'>
                                {this._getToolBar()}
                                {this._getModeBar()}
                            </div>
                            <div className={editorClass}>
                                {this._getEditor()}
                                
                                {this._getShower()}
                            </div>
                        </div>
                    </Col>
                </FormGroup>

                <FormGroup check row>
                    <Col sm={2} className='col-md-offset-5'>
                        <Button className='btn-primary-outline' color="primary" size='lg' block
                            onSubmit={(e) => this.handleSubmit(e)}>
                            Submit
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
    // 渲染toolBar组件
     _getToolBar() {
        return (
            <ul className="md-toolbar clearfix">
                <li className="tb-btn"><a title="加粗" onClick={this._boldText.bind(this)}><i className="iconfont icon-bold"></i></a></li>{/* bold */}
                <li className="tb-btn"><a title="斜体" onClick={this._italicText.bind(this)}><i className="iconfont icon-italic"></i></a></li>{/* italic */}
                <li className="tb-btn spliter"></li>
                <li className="tb-btn"><a title="链接" onClick={this._linkText.bind(this)}><i className="iconfont icon-link"></i></a></li>{/* link */}
                <li className="tb-btn"><a title="引用" onClick={this._blockquoteText.bind(this)}><i className="iconfont icon-indent"></i></a></li>{/* blockquote */}
                <li className="tb-btn"><a title="代码段" onClick={this._codeText.bind(this)}><i className="iconfont icon-code"></i></a></li>{/* code */}
                <li className="tb-btn"><a title="图片" onClick={this._pictureText.bind(this)}><i className="iconfont icon-image"></i></a></li>{/* picture-o */}
                <li className="tb-btn spliter"></li>
                <li className="tb-btn"><a title="有序列表" onClick={this._listOlText.bind(this)}><i className="iconfont icon-orderedlist"></i></a></li>{/* list-ol */}
                <li className="tb-btn"><a title="无序列表" onClick={this._listUlText.bind(this)}><i className="iconfont icon-unorderedlist"></i></a></li>{/* list-ul */}
                <li className="tb-btn"><a title="标题" onClick={this._headerText.bind(this)}><i className="iconfont iconfont-header">H2</i></a></li>{/* header */}
                
            </ul>
        );
    }
    // 渲染modeBar组件
    _getModeBar() {
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
    _getEditor() {
        // let markdownContent = this.state.markdownContent || '';
        return (
            <section className='md-area' >
                <textarea className='md-content' 
                    placeholder="请输入markdown文本"
                    ref='editor'
                    onChange={(e) => {this.handleTextAreaChange(e.target.value)}} 
                    value={this.state.markdownContent || ''}>
                </textarea>
            </section>
        );
    }

    // 渲染md视图组件
    _getShower() {
        return (
            <div className='md-shower'
                ref='shower'
                dangerouslySetInnerHTML={{ __html: this.state.content }}>
            </div>
        );
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

        return marked(markdownContent);
    }

    _changeMode(mode) {
        return (e) => {
            this.setState({
                mode: mode
            });
        }
    }

    _toggleFullScreen() {
        this.setState({
            isFullScreen: !this.state.isFullScreen
        });
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