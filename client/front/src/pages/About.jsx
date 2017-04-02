import React, { Component } from 'react';
import Rodal from '../components/Animations.jsx';

class About extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            visible: false,
            animation: 'door'
        }
    }

    show(animation) {
        this.setState({
            animation: animation,
            visible: true
        });
    }

    hide() {
        this.setState({
            visible: false
        });
    }
    

    render() {
        
        return (
            <section className='about'>
                <h2 className='title'>关于</h2>
                <p>大四狗一枚...</p>
                <button className="btn scale" onClick={this.show.bind(this, 'door')}>
                    show
                </button>
                <Rodal visible={this.state.visible}
                       onClose={this.hide.bind(this)}
                       animation={this.state.animation}>
                    <div className="header">Rodal</div>
                    <div className="body">A React modal with animations.</div>
                    <button className="rodal-confirm-btn" onClick={this.hide.bind(this)}>ok</button>
                    <button className="rodal-cancel-btn" onClick={this.hide.bind(this)}>close</button>
                </Rodal>
            </section>
        );
    }
}

export default About;