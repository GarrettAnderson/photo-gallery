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
        <main>
          <header>
            <h1>Things I Like</h1>
            <h2>A Photo Gallery by Garrett Anderson</h2>
          </header>
          <section>🏡Home</section>
          <section>
            {Object.keys(data).map((category, i) => {
              console.log('the hobby' + category)
              console.log('the category object:', data[category])
              return (
                <section key={i}>
                  <header>
                    <Link to={'/' + category}>{data[category].title}</Link>
                  </header>
                  <p>{data[category].description}</p>
                  <img src={data[category].photos[0].imageURL} />
                </section>
              )
            })}
          </section>
          <Link to="/pandas">Enter!</Link>
        </main>
      </div>
    )
  }
}

export default CategoryList
