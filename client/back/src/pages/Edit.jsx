import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Editor from '../components/Editor.jsx';

class Edit extends Component {
    render() {
        return (
            <Form className='edit-wrapper'>
                <FormGroup row>
                    <Col sm={12}>
                        <Input type="text" name="title" placeholder="标题：我的标题咯" size="lg" />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col sm={3}>
                         <Input type="select" name="select" className='category'>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </Col>
                    <Col sm={9}>
                        <Input type="text" name="tags" placeholder="标签"/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col sm={12}>
                        <Editor />
                    </Col>
                </FormGroup>

                <FormGroup check row>
                    <Col sm={2} className='col-md-offset-5'>
                        <Button className='btn-primary-outline' color="primary" size='lg' block>Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default Edit;