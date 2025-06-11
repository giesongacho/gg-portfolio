import React, {useContext,lazy, Suspense} from 'react'
import { UserContext } from '../context/UserContextWrapper'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import {Routes,Route} from 'react-router-dom'
import Content from '../content/Content'
import Hero from '../pages/hero/Hero'
import TechStack from '../pages/stack/TechStack'
import Experience from '../pages/experience/Experience'
import Education from '../pages/education/Education'
import Certificate from '../pages/certificates/Certificate'
const Layout = () => {
const {isToggle} = useContext(UserContext)
  return (
    <div className='h-screen bg-slate-50'>
        <Header />
        {isToggle &&  <Sidebar />}
        
        <Routes>
          <Route path="/" element={<Content />}>
              <Route index element={<Hero />}/>
              <Route path="skills" element={<TechStack />}/>
              <Route path="experience" element={<Experience />}/>
              <Route path="education" element={<Education />}/>
              <Route path="certificate" element={<Certificate />}/>
              {/* <Route path="experience" element={<Proje />}/> */}
          </Route>
        </Routes>
    </div>
  )
}

export default Layout
