import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Tools from '../components/Tools.jsx';

class Setting extends Component {

    renderSetingForm() {
        return (
            <Form className='form-setting'>
                <FormGroup>
                    <Label htmlFor="blogName">博客标题名</Label>
                    <Input type="text" name="blogName" id="blogName" placeholder="博客标题名" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="blogDescription">博客描述</Label>
                    <Input type="text" name="blogDescription" id="blogDescription" placeholder="博客描述" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="blogUrl">网站地址</Label>
                    <Input type="text" name="blogUrl" id="blogUrl" placeholder="网站地址" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="favUrl">favicon地址</Label>
                    <Input type="text" name="favUrl" id="favUrl" placeholder="favicon地址" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="logURL">logo地址</Label>
                    <Input type="text" name="logURL" id="logURL" placeholder="logo地址" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="blogName">github地址</Label>
                    <Input type="text" name="blogName" id="blogName" placeholder="github地址" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="weibo">微博地址</Label>
                    <Input type="text" name="weibo" id="weibo" placeholder="微博地址" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="ICP">网站备案号</Label>
                    <Input type="text" name="ICP" id="ICP" placeholder="网站备案号" />
                </FormGroup>
                
                <FormGroup check row>
                    <Col sm={2} className='col-md-offset-5'>
                        <Button className='btn-primary-outline' color="primary" size='lg' block>Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
    
    render() {
        return (
            <div>
                <Tools title='设置'/>
                <div className='content-wrapper'>
                    {this.renderSetingForm()}
                </div>
            </div>
            
        );
    }
}

export default Setting;
