import React, { Component } from 'react'
import logo from './logo.svg'

import Layout from './containers/Layout'
import TaskLists from './components/TaskLists/TaskLists'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <TaskLists />
        </Layout>
      </div>
    )
  }
}

export default App
