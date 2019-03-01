import React, { Component } from 'react'
import Header from '../components/Header'
import ImageDetail from '../components/ImageDetail'
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
        <section>
          🏡Home / {currentCategory.title} / {currentCategory.photos[this.props.match.params.id].title}
        </section>
        <ImageDetail />
      </main>
    )
  }
}

export default PhotoDetail
