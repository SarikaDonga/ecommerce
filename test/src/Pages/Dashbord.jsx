import React from 'react'

import { Link, Outlet } from 'react-router-dom'

const Dashbord = () => {
  return (
    <div>   

        <Link to="profile">Profile</Link>
        <Link to="setting">Setting</Link>

        <Outlet/>
    </div>
  )
}

export default Dashbord