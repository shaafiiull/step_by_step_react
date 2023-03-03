import React, { Component } from "react";

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }
  /*   render() {
    if (this.state.isLoggedIn) {
      return <div>Hello John Doe</div>;
    } else {
      return <div>Hello User</div>;
    }
  } */
  /*   render() {
    let message;
    if (this.state.isLoggedIn) {
      message = <div>Hello John Doe</div>;
    } else {
      message = <div>Hello User</div>;
    }
    return message;
  } */
  /*   render() {
    return <div>{this.state.isLoggedIn ? "Hello John Doe" : "Hello User"}</div>;
  } */
  render() {
    return <div>{this.state.isLoggedIn && "Hello John Doe"}</div>;
  }
}

export default ConditionalRendering;
