import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import data from '../data/categories.json'
import PhotoDetail from '../pages/PhotoDetail'

class PhotoList extends Component {
  state = {
    photos: []
  }

  render() {
    console.log(data)
    let categories = Object.keys(data)
    console.log(categories)
    return (
      <main>
        {data.pandas.photos.map((photo, i) => {
          return (
            <Link key={i} to={'./pandas' + i}>
              <img src={photo.imageURL} title={photo.title} />
            </Link>
          )
        })}
      </main>
    )
  }
}

export default PhotoList
