import React, { Component } from "react";

class Subscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubscribed: false,
      message: "Welcome to my channel",
      btn: "Please Subscribe",
    };

    this.handleSubscription = this.handleSubscription.bind(this);
  }

  handleSubscription() {
    this.setState({
      isSubscribed: !this.state.isSubscribed,
      message: "Thanks for your subscription",
      btn: "Unsubscribe",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.handleSubscription}>{this.state.btn}</button>
      </div>
    );
  }
}

export default Subscription;
