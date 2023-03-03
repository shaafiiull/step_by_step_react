import React, { Component } from "react";

class BindingEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
    };
    // this.changeMessage = this.changeMessage.bind(this);
  }

  changeMessage = () => {
    this.setState({
      message: "Bye",
    });
  };
  /*   changeMessage() {
    this.setState({
      message: "Bye",
    });
  } */
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.changeMessage}>Change Hello</button> */}
        {/*  <button onClick={this.changeMessage.bind(this)}>Change Hello</button> */}
        {/* <button onClick={() => this.changeMessage()}>Change Hello</button> */}
        <button onClick={this.changeMessage}>Change Hello</button>
      </div>
    );
  }
}

export default BindingEvent;
