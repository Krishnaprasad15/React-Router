import React from 'react'
import { Outlet,useSearchParams } from 'react-router-dom'

const Users = () => {
    const [searchParams,setSearchParams]= useSearchParams()
    const filter= (searchParams.get('filter')==='active')
  return (
    <div>
      <h2>user 1</h2>
      <h2>user 2</h2>
      <h2>user 3</h2>
      <Outlet/>
      <button onClick={()=>setSearchParams({filter:'active'})}>Active Users</button>
      <button onClick={()=>setSearchParams()}>Reset filters</button>
      {
        filter? (<div>Showing Active users</div>): (<div>Showing all users</div>)
      }
    </div>
  )
}

export default Users
