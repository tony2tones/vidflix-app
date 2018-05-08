import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'

import Landing from './Landing'
import Search from './Search'

const App = () => (
  <HashRouter>
    <div className='app'>
      <Route extact path='/' component={Landing} />
      <Route extact path='/search' component={Search} />
    </div>
  </HashRouter>
)

render(<App />, document.getElementById('app'))
