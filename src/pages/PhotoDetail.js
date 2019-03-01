import React, { Component } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import data from '../data/categories.json'

class PhotoDetail extends Component {
  render() {
    console.log(this.props.match.params.category)

    const currentCategory = data[this.props.match.params.category]
    console.log(currentCategory)
    return (
      <main>
        <Header />
        {/* <header>
          <h1>
            <Link to="/">Things I Like</Link>
          </h1>
          <h2>A Photo Gallery by Garrett Anderson</h2>
        </header> */}
        <section>
          🏡Home / {currentCategory.title} / {currentCategory.photos[this.props.match.params.id].title}
        </section>
        <section>
          <header>{currentCategory.photos[this.props.match.params.id].title}</header>
          <img src={currentCategory.photos[this.props.match.params.id].imageURL} />
          <a
            href={currentCategory.photos[this.props.match.params.id].sourceURL}
            className="image-source"
            target="_blank"
          >
            Source
          </a>
        </section>
      </main>
    )
  }
}

export default PhotoDetail
