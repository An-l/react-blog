import React, { Component, PropTypes } from 'react';
import { InputGroup, InputGroupButton, Input, Button } from 'reactstrap';

class Tools extends Component {  
    static propTypes = {
        title: PropTypes.string
    }

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
                <div className='tools-btn'>     
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Tools;