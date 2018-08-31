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
        <Switch initalState={false} />
        <button />
      </div>
    )
  }
}

export default App

// Stateless Components
function Welcome (props) {
  return <h1 className='App-title'>Welcome to React, {props.name}</h1>
}

// State Full Component
class Switch extends Component {
  constructor (props) {
    super(props)
    this.state = { on: this.props.initalState, name: 'AKila' }
    this.onClick = this.onClick.bind(this)
  }

  componentWillMount () {
    console.log('Component will mount')
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('Should component update', nextProps, nextState)
    return false
  }

  onClick () {
    this.setState({ on: !this.state.on })
  }

  render () {
    return (
      <div>
        {this.state.name}
        <button onClick={this.onClick}>{this.state.on ? 'On' : 'Off'}</button>
      </div>
    )
  }
}

Switch.propTypes = {
  initalState: PropTypes.bool
}
