import React, { Component } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import data from '../data/categories.json'
import PhotoDetail from '../pages/PhotoDetail'

class PhotoList extends Component {
  state = {
    photos: []
  }

  render() {
    console.log(data)
    let pandas = Object.keys(data.pandas.photos)
    console.log(this.props.match.params.category)

    const currentCategory = data[this.props.match.params.category]
    console.log(currentCategory)

    return (
      <main>
        <Header />
        {/* <header>
          <h1>Things I Like</h1>
          <h2>A Photo Gallery by Garrett Anderson</h2>
        </header> */}
        <section>🏡Home / {currentCategory.title}</section>
        <section>
          <header>{currentCategory.title}</header>
          <p>{currentCategory.description}</p>
          <section>
            <ol>
              {currentCategory.photos.map((category, i) => {
                return (
                  <li>
                    <Link className="image-link" key={i} to={`/${this.props.match.params.category}/${i}`}>
                      <img src={currentCategory.photos[i].imageURL} />
                    </Link>
                    <p title={currentCategory.photos[i].title} />
                  </li>
                )
              })}
            </ol>
          </section>
        </section>
      </main>
    )
  }
}

export default PhotoList
