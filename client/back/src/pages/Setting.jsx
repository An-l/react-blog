import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Tools from '../components/Tools.jsx';

import { getOption, updateOptionById } from '../utils/request.js';

class Setting extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            id: "",
            blogName: "",
            blogDescription: "",
            url: "",
            faviconUrl: "",
            logoUrl: "",
            githubUrl: "",
            weiboUrl: "",
            ICP: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
        getOption()
            .then(res => {
                let {blogName, blogDescription, url, faviconUrl, logoUrl, githubUrl, weiboUrl, ICP} = res[0];
                this.setState({
                    id: res[0]['_id'],
                    blogName,
                    blogDescription,
                    url,
                    faviconUrl,
                    logoUrl,
                    githubUrl,
                    weiboUrl,
                    ICP
                });
            })
    }

    handleInputChange(e) {
        let newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);

    }

    // 提交表单
    handleSubmit(e) {
        e.preventDefault();
        let {id, blogName, blogDescription, url, faviconUrl, logoUrl, githubUrl, weiboUrl, ICP} = this.state;
        
        let newOption = {
            blogName, 
            blogDescription,
            url, 
            faviconUrl, 
            logoUrl, 
            githubUrl, 
            weiboUrl, 
            ICP
        };
        
        updateOptionById(id, newOption)
            .then(res => {
                 if (!res) {
                    return alert('设置失败！');
                }
                return alert('设置成功！');
            })
    }

    // 渲染表单组件
    renderSetingForm() {
        let {blogName, blogDescription, url, faviconUrl, logoUrl, githubUrl, weiboUrl, ICP} = this.state;
        return (
            <Form className='form-setting'
                name='optionForm'
                id='optionForm'
                onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label htmlFor="blogName">博客标题名</Label>
                    <Input type="text" name="blogName" id="blogName" placeholder="博客标题名" 
                        value={blogName}
                        onChange={this.handleInputChange}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="blogDescription">博客描述</Label>
                    <Input type="text" name="blogDescription" id="blogDescription" placeholder="博客描述" 
                        value={blogDescription}
                        onChange={this.handleInputChange}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="blogUrl">网站地址</Label>
                    <Input type="text" name="blogUrl" id="blogUrl" placeholder="网站地址" 
                        value={url}
                        onChange={this.handleInputChange}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="faviconUrl">favicon地址</Label>
                    <Input type="text" name="faviconUrl" id="faviconUrl" placeholder="favicon地址" 
                        value={faviconUrl}
                        onChange={this.handleInputChange}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="logoUrl">logo地址</Label>
                    <Input type="text" name="logoUrl" id="logoUrl" placeholder="logo地址" 
                        value={logoUrl}
                        onChange={this.handleInputChange}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="githubUrl">github地址</Label>
                    <Input type="text" name="githubUrl" id="githubUrl" placeholder="github地址" 
                        value={githubUrl}
                        onChange={this.handleInputChange}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="weiboUrl">微博地址</Label>
                    <Input type="text" name="weiboUrl" id="weiboUrl" placeholder="微博地址" 
                        value={weiboUrl}
                        onChange={this.handleInputChange}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="ICP">网站备案号</Label>
                    <Input type="text" name="ICP" id="ICP" placeholder="网站备案号" 
                        value={ICP}
                        onChange={this.handleInputChange}/>
                </FormGroup>
            </Form>
        )
    }
    
    render() {
        return (
            <div className='settingPage'>
                <Tools title='设置'>
                    <Button className='btn-primary-outline' color="primary" size='sm'
                        form='optionForm'>
                        提交设置
                    </Button>
                </Tools>
                <div className='content-wrapper'>
                    {this.renderSetingForm()}
                </div>
            </div>
            
        );
    }
}

export default Setting;
