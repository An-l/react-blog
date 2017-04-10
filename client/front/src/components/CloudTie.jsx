import React, { Component } from 'react';
import loader from '../utils/loader.js';

class CloudTie extends Component {
    componentDidMount() {
        window.cloudTieConfig = {
            url: document.location.href, 
            sourceId: this.props.id || '',
            productKey: "9ed327c62b594bce9dfb566815c7d1d6",
            target: "cloud-tie-wrapper"
            };
        window.yunManualLoad = true;
        loader(window);
        Tie.loader("aHR0cHM6Ly9hcGkuZ2VudGllLjE2My5jb20vcGMvbGl2ZXNjcmlwdC5odG1s", true);
        
    }
    
    
    render() {
        return (
            <div id="cloud-tie-wrapper" className="cloud-tie-wrapper">
                
            </div>
        );
    }
}

export default CloudTie;