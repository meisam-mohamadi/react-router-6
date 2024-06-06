import React from 'react'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
        <MainHeader/>
        <h1>this is main layout</h1>
        <Outlet/>
        <MainFooter/>
    </div>
  )
}

export default MainLayout