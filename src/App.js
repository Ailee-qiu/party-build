import React from 'react'
import { Menu, Carousel, List } from 'antd'
import Nav from './components/Nav'
import Banner from './components/Banner'
import DayList from './components/List'
import Home from './components/Home'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import OnlionLearning from './components/OnlineLearning'
const data = [
  '每日一句1',
  '每日一句2',
  '每日一句3',
  // 添加更多的句子
]
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
      </Switch>
    </Router>
  )
}

export default App
