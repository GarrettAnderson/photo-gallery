import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CategoryList from './pages/CategoryList'
import PhotoList from './pages/PhotoList'
import PhotoDetail from './pages/PhotoDetail'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={CategoryList} />
            <Route exact path="/pandas" component={PhotoList} />
            <Route exact path="/pandas/:id" component={PhotoDetail} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
