import React, { Component } from 'react';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: new Date().toLocaleTimeString,
      circle: this.props.circle,
      isToggleOn: true
    };
    this.starTimer = this.starTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    if(this.state.isToggleOn) {
      this.stopTimer()
    }else {
      this.starTimer()
    }
  }
  
  componentDidMount() {
    this.starTimer();
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState, "prevState");
    if(!prevState.circle) {
      clearInterval(this.timer);
      this.setState({
        circle: prevState.circle
      })
    }
  } 

  componentWillUnmount() {
    console.log("componentWillUnmount",this.state);
    clearInterval(this.timer);
  }

  starTimer() {
    this.timer = setInterval (() => {
      this.setState({circle: this.state.circle - 1});
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
    this.setState(prevState => ({
      circle: prevState.circle
    }))
  }
  
  render() {
    return (
      <div>
        <h2>Countdown time is: {this.state.circle}</h2>
        <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'STOP' : 'START'}
      </button>
      </div>
    );
  }
}

export default index;
