import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import UserList from './components/UserList'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Welcome name={'Akila'} />
        <hr />
        <Switch />
        <hr />
        <UserList
          users={[
                        { name: 'Akila', phoneNumber: '0113313rr21' },
                        { name: 'Narthana', phoneNumber: '032892113' }
          ]}
                />
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
class Switch extends React.Component {
  constructor (props) {
    super(props)
    this.state = { on: false }
    this.onClick = this.onClick.bind(this)
  }

  onClick () {
    this.setState({ on: !this.state.on })
  }

  render () {
    return (
      <div>
        <button onClick={this.onClick}>{this.state.on ? 'On' : 'Off'}</button>
      </div>
    )
  }
}
