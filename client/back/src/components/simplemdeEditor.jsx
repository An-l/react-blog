import React, { Component } from 'react';
import SimpleMDE  from 'simplemde';


class Editor extends Component {
    
    componentDidMount() {
        var simplemde = new SimpleMDE({ element: $("#MyID")[0] });
    }
    
    render() {
        return (
            <div id='simplemde'>
                
            </div>
        );
    }
}

export default Editor;