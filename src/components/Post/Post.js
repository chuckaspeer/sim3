import React, { Component } from "react";
import axios from "axios";

export default class Post extends Component {
  state = {
    id: "",
    title: "",
    img: "",
    content: "",
    username: "",
    picture: ""
  };
  componentDidMount() {
    //console.log(this.props.match.params.postid);
    axios.get(`/api/onepost/${this.props.match.params.postid}`).then(res => {
      console.log(res);
      this.setState({
        id: res.data[0].id,
        title: res.data[0].title,
        img: res.data[0].img,
        content: res.data[0].content,
        username: res.data[0].username,
        picture: res.data[0].profile_pic
      });
    });
  }

  deletePost = () => {
    axios.delete(`/api/post/delete/${this.state.id}`).then(response => {
      this.props.history.push("/api/dashboard");
    });
  };

  render() {
    return (
      <div>
        <p>Title:{this.state.title}</p>
        <p>
          Image:<img src={this.state.img} alt="robot" />
        </p>
        <p> Content:{this.state.content}</p>
        <p> Username:{this.state.username}</p>
        <p>
          Picture:<img src={this.state.picture} alt="pic" />
        </p>
        <button onClick={this.deletePost}>Delete Post</button>
      </div>
    );
  }
}
