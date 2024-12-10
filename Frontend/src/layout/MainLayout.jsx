import React from 'react'
import { Outlet } from 'react-router-dom'
import HomeNavBar from '../components/NavBar/HomeNavBar'

const MainLayout = () => {
  return (
    <div>
      <HomeNavBar />
      <Outlet />
    </div>
  )
}

export default MainLayout