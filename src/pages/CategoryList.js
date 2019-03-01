import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import data from '../data/categories.json'

class CategoryList extends Component {
  render() {
    let imageObject = Object.keys(data)
    // let image = data.photos.pandas(this.props.match.params.i)
    // console.log(image)
    //return ( create variable to store the data - Object.keys(data) // persist appropriate data for image selected
    // from photo list // dynamically show Image, Title of Image, and Description
    return (
      <div>
        <h1>Things I Like</h1>
        <main>
          <figure>
            <img alt="panda-image" src="../waving_panda.jpeg" />
            <figcaption>
              <h1>Title</h1>
            </figcaption>
          </figure>
        </main>
        <Link to="/pandas">Enter!</Link>
      </div>
    )
  }
}

export default CategoryList
