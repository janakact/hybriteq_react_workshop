import React, { Component } from 'react'
function UserList ({ users }) {
  return (
    <div>
      {users.map(user => <p>{user.name}</p>)}
    </div>
  )
}

export const UserListHeader = () => <h1 className='App-title'>UserList</h1>

export default UserList
export const name = "KJASLjjldka"