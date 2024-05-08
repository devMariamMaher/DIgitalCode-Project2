import React from 'react'
import { TopBar } from './TopBar'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const Layout = () => {
  return (
    <div>
        <TopBar/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
