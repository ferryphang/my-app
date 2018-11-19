import React, { Component } from 'react';
import { fetchPosts } from '../actions/index';
import { connect } from 'react-redux';

class PostsIndex extends Component {
  componentWillMount(){
    this.props.fetchPosts();
    console.log(this.props.posts);

  };

  render() {
    return (
      <table>
        <thead>
          <th>Name</th>
          <tbody>
            <tr>
              <td>{this.props.posts}</td>
            </tr>
          </tbody>
        </thead>
      </table>
    );
  }
}

function mapStateToProps(state){
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
