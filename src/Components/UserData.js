import React from 'react'
import { useParams } from 'react-router-dom'

const UserData = () => {
    const {userId}= useParams()
  return (
    <div>
      User {userId} Details!
    </div>
  )
}

export default UserData
