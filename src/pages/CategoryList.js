import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CategoryList extends Component {
  render() {
    return (
      <div>
        <h1>Interests</h1>
        <h3>Categories</h3>
        <Link to="/pandas">Enter!</Link>
      </div>
    )
  }
}

export default CategoryList
