import React, { Component } from "react";
import { connect } from 'react-redux'
import axios from "axios";

 class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      imgUrl: "",
      content: ""
    };
  }

  handleTitleChange = value => {
    this.setState({ title: value });
  };

  handleContentChange = value => {
    this.setState({ content: value });
  };

  handleImgChange = value => {
    this.setState({ imgUrl: value });
  };
  submit = () => {
      console.log(this.props.id)
    let obj = {
      id: this.props.id,
      title: this.state.title,
      content: this.state.content,
      imgUrl: this.state.imgUrl
    };
    axios.post("/api/post", obj).then(response => {
      this.props.history.push("/dashboard");
    });
  };

  render() {
    return (
      <div>
        <h4>New Post</h4>
        <label>Title:</label>
        <input
          onChange={e => this.handleTitleChange(e.target.value)}
          type="text"
        />
        <img src={this.state.imgUrl} alt='imgUrl' height="500" width="500" />
        <label>Image Url:</label>
        <input
          onChange={e => this.handleImgChange(e.target.value)}
          type="text"
        />
        <label>Content:</label>
        <textarea
          onChange={e => this.handleContentChange(e.target.value)}
          type="text"
        />
        <button onClick={this.submit}>Submit Post</button>
      </div>
    );
  }
}

const mapStateToProps =(state)=>{
        return{
            id: state.reducer.id
        }
}

export default connect(mapStateToProps, null)(Form)
