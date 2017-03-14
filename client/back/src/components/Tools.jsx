import React, { Component } from 'react';

import { InputGroup, InputGroupButton, Input, Button } from 'reactstrap';

class Tools extends Component {
    render() {
        return (
            <div className='tools'>
                <div className='tools-title'>
                    <span>文章列表</span>
                </div>
                <InputGroup size="sm">
                    <Input />                
                    <InputGroupButton><Button>Search</Button></InputGroupButton>
                </InputGroup>

            </div>
        );
    }
}

export default Tools;