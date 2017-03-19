import React, { Component } from 'react';

import { InputGroup, InputGroupButton, Input, Button } from 'reactstrap';

class Tools extends Component {  

    renderSearch() {
        return (
            <InputGroup size="sm">
                <Input />                
                <InputGroupButton>
                    <Button>Search</Button>
                </InputGroupButton>
            </InputGroup>
        )
    }

    render() {
        return (
            <div className='tools'>
                <div className='tools-title'>
                    <span>{this.props.title || '文章列表'}</span>
                </div>
                {
                    // this.renderSearch()
                }
            </div>
        );
    }
}

export default Tools;