import React, { Component } from 'react'
function UserList (props) {
  return (
    <div>
      <h1 className='App-title'>UserList</h1>
      {props.users.map(user => <p>{user.name}: {user.phoneNumber}</p>)}
    </div>
  )
}

export default UserList
