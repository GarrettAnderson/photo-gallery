import React, { Component } from 'react'
import data from '../data/categories.json'

class PhotoDetail extends Component {
  render() {
    let imageObject = Object.keys(data)
    let image = data.photos.pandas(this.props.match.params.i)
    console.log(image)
    return (
      // create variable to store the data - Object.keys(data)
      // persist appropriate data for image selected from photo list
      // dynamically show Image, Title of Image, and Description
      <main>
        <figure>
          <img alt="panda-image" src={this.props.src} />
          <figcaption>
            <h1>{image.title}</h1>
          </figcaption>
        </figure>
      </main>
    )
  }
}

export default PhotoDetail
