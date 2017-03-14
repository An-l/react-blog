import React, { Component } from 'react';

class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: this.props.markdownContent || ''
        }
        console.log('constructor - '+ this.props.markdownContent);
    }
    
    componentWillMount() {
        console.log('componentWillMount - '+ this.props.markdownContent);
    }

    componentDidMount() {
        console.log('componentDidMount - '+ this.props.markdownContent);
        
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps - '+ nextProps.markdownContent);
    }
    
    
    
    
    render() {
        console.log('render - '+ this.props.markdownContent);
        console.log('render - state'+this.state.content);
        return (
            <div>
                {this.props.markdownContent}
                {this.state.content}
            </div>
        );
    }
}

export default componentName;