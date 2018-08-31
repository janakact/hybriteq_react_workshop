import React, { Component } from 'react'
import logo from './logo.svg'
import PropTypes from 'prop-types'
import './App.css'
import UserList, { UserListHeader, name } from './components/UserList'

const users = [{ name: 'Akila', phoneNumber: '0113313rr21' }, { name: 'Narthana', phoneNumber: '032892113' }]

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Timer>
          {count => <h1>{count}</h1>}
        </Timer>
        <Timer>
          {count => <h1>{count + 100}</h1>}
        </Timer>
      </div>
    )
  }
}

class Timer extends Component {
  state = { count: 0 }
  componentDidMount () {
    this.timer = setInterval(() => {
      const count = this.state.count
      this.setState({ count: count + 1 })
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    this.props.children
    return this.props.children(this.state.count)
  }
}

export default App
