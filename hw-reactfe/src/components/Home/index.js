import React, { Component } from 'react';
import Circle from '../Circle/index';
class index extends Component {
  
  render() {
    return (
      <div>
      <h1>Home page</h1>
      <Circle circle="50"/>
      <Circle circle="40"/>
      <Circle circle="30"/>
      </div>
    );
  }
  
}

export default index;
