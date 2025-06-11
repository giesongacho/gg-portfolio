import React, {useContext} from 'react'
import { UserContext } from '../context/UserContextWrapper'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import {Routes,Route} from 'react-router-dom'
import Content from '../content/Content'
import Hero from '../pages/hero/Hero'
const Layout = () => {
const {isToggle} = useContext(UserContext)
  return (
    <div className='h-screen bg-slate-50'>
        <Header />
        {isToggle &&  <Sidebar />}
        
        <Routes>
          <Route index element={<Content />}>
              <Route path="/" element={<Hero />}/>
          </Route>
        </Routes>
    </div>
  )
}

export default Layout
