import React, { Component } from 'react'
import Header from '../components/Header'
import data from '../data/categories.json'

class ImageDetail extends Component {
  render() {
    const currentCategory = data[this.props.match.params.category]
    console.log(currentCategory)
    return (
      <main>
        <Header />
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

export default ImageDetail
