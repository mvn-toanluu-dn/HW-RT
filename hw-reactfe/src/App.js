import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/index';
import About from './components/About/index';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home",
    }
    this.handleRedirect = this.handleRedirect.bind(this);
  }
  handleRedirect(e, pageName) {
    e.preventDefault();
    this.setState({currentPage: pageName})
  }
  render() {
    return (
      <>
      <ul className='nav-links'>
        <li>
          <a href='https:google.com' onClick={(e) => this.handleRedirect(e,"home")}>Home</a>
        </li>
        <li>
          <a href='https:google.com' onClick={(e) => this.handleRedirect(e,"about")}>About</a>
        </li>
      </ul>
      <div className='App'>
        {this.state.currentPage === "home" ? <Home /> : <About />}
      </div>
      </>
    );
  }
}

export default App;
