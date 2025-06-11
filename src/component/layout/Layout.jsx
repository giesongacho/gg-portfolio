import React, {useContext} from 'react'
import { UserContext } from '../context/UserContextWrapper'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Footer from '../footer/Footer'
import {Routes,Route} from 'react-router-dom'
import Content from '../content/Content'
const Layout = () => {
const {isToggle,isDarkMode} = useContext(UserContext)
  return (
    <div className='h-screen bg-slate-50'>
        <Header />
        {isToggle &&  <Sidebar />}

        <Footer />
    </div>
  )
}

export default Layout
