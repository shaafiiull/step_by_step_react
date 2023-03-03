import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment() {
    this.setState(
      (state) => ({
        count: state.count + 1,
      }),
      () => {
        console.log(this.state.count);
      } //if we want to do something after the state being changed, pass a second parameter as callback function to setState method
    );
    // console.log(this.state.count);
  }
  decrement() {
    this.setState(
      (state) => ({
        count: state.count - 1,
      }),
      () => {
        console.log(this.state.count);
      } //if we want to do something after the state being changed, pass a second parameter as callback function to setState method
    );
    // console.log(this.state.count);
  }
  reset() {
    this.setState(
      (state) => ({
        count: 0,
      }),
      () => {
        console.log(this.state.count);
      } //if we want to do something after the state being changed, pass a second parameter as callback function to setState method
    );
    // console.log(this.state.count);
  }
  sayHi() {
    console.log("hello");
  }
  // sayHi method does not need to bind 'this' as it doesn't access any state or props of the class
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
        {/* <button onClick={this.sayHi}>SayHiToConsole</button> */}
        {/*the above button was added to test why some method does not need to bind 'this'  */}
      </div>
    );
  }
}

export default Counter;
