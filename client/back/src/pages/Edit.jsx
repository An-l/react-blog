import React, { Component } from 'react';
import { getPostById } from '../utils/request';
import Editor from '../components/Editor-mde.jsx';


class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            loadEnd: false
        }
    }
    
    componentDidMount() {
        let id = this.props.params.id;
        getPostById(id)
            .then(res => {
                this.setState({
                    post: res,
                    loadEnd: true
                });
            });
    }

    render() {   
        return (
            this.state.loadEnd && <Editor post={this.state.post}/>
        );
    }
}

export default Edit;