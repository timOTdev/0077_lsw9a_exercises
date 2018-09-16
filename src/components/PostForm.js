import React, { Component } from 'react'
import axios from 'axios'

export default class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
    }
  }
  
  onChange = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form>
          <div>
            <label>Title: </label><br />
            <input
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          
          <br/>

          <div>
            <label>Body: </label><br />
            <textarea
              name="body"
              value={this.state.body}
              onChange={this.onChange}
            />
          </div>

          <br/>

          <button type="submit">Submit</button>

        </form>
      </div>
    )
  }
}
