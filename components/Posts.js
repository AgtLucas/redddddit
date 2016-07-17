import React, { Component, PropTypes } from 'react'

export default class Posts extends Component {
  render () {
    return (
      <ul>
        {this.props.posts.map((post, i) =>
          <li key={i}>
            <a href={`https://www.reddit.com/${post.permalink}`}>{post.title}</a>
          </li>
        )}
      </ul>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}
