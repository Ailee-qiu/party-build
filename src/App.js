import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import OnlionLearning from './components/OnlineLearning'
import HTMLPage from './components/PartyBuild'

function App () {

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/online-learning">
          <OnlionLearning />
        </Route>
        <Route exact path="/platform">
          <HTMLPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
