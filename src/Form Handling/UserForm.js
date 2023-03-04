import React, { Component } from "react";
import styles from "./UserFormStyle.module.css";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comment: "",
      profession: "BCS Cadre",
      userInfo: [],
    };
  }
  handleUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleComment = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };
  handleProfession = (event) => {
    this.setState({
      profession: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const arr = [
      this.state.username,
      this.state.comment,
      this.state.profession,
    ];
    this.setState({
      userInfo: [...arr],
      username: "",
      comment: "",
      profession: "BCS Cadre",
    });
  };
  render() {
    const { username, comment, userInfo } = this.state;
    const userList = userInfo.map((user) => <li>{user}</li>);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className={styles.infoCollection}>
            <div>
              <label htmlFor="username">Username: </label>
              <input
                type="text"
                value={username}
                onChange={this.handleUsername}
                required
              />
            </div>
            <div>
              <label htmlFor="comment">Comment: </label>
              <textarea
                type="text"
                value={comment}
                onChange={this.handleComment}
                required
              />
            </div>
            <div>
              <label htmlFor="profession">Profession : </label>
              <select
                value={this.state.profession}
                onChange={this.handleProfession}
              >
                <option value="BCS Cadre">BCS Cadre</option>
                <option value="Police">Police</option>
                <option value="Doctor">Doctor</option>
              </select>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
        {userInfo.length > 0 && userList}
      </div>
    );
  }
}

export default UserForm;
