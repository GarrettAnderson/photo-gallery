import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header>
        <h1>
          <Link to="/">Things I Like</Link>
        </h1>
        <h2>A Photo Gallery by Garrett Anderson</h2>
      </header>
    )
  }
}

export default Header
