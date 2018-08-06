import React, { Component } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import  {userAuth}  from "../../ducks/reducer";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  register = () => {
    let user = {
      username: this.state.username,
      password: this.state.password,
      img: `https://robohash.org/${this.state.username}`
    };

    axios.post("/api/auth/register", user).then(res => {
      const { id, username, profile_pic } = res.data;
       //console.log(this.props);
      this.props.userAuth(id, username, profile_pic);
      this.props.history.push("/dashboard");
    });
  };

  login = () => {
    let user = {
      username: this.state.username,
      password: this.state.password
    };

    axios.get(`/api/auth/login/${user.username}/${user.password}`).then(res => {
      const { id, username, profile_pic } = res.data;
      this.props.userAuth(id, username, profile_pic);
      this.props.history.push("/dashboard");
    });
  };

  handleUserNm = event => {
    this.setState({
      username: event
    });
  };

  handlePassword = event => {
    this.setState({
      password: event
    });
  };

  render() {
    return (
      <div className="Auth">
        <input
          value={this.state.username}
          onChange={event => this.handleUserNm(event.target.value)}
          type="Text"
        />
        <input
          value={this.state.password}
          onChange={event => this.handlePassword(event.target.value)}
          type="Text"
        />

        <button onClick={this.login}>Login</button>

        <button onClick={this.register}>Register</button>
      </div>
    );
  }
}
export default connect(
  null,
   {userAuth} 
)(Auth);
