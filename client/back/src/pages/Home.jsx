import React, { Component } from 'react';
import Tools from '../components/Tools.jsx';

class Home extends Component {

  render() {
    return (
      <div>
          <Tools title='主页'/>
          <div className='content-wrapper'>
              Home
          </div>
      </div>
    );
  }
}

export default Home;