import './App.css';
import React, { Component } from 'react';
import logo from './logo.svg';
import promise from 'redux-promise';
import PostsIndex from './containers/posts_index';

class App extends Component {
  render() {
    return (
      <div className="App">
          <PostsIndex />
      </div>
    );
  }
}

export default App;
