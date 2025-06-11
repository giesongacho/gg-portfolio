import React, {useContext} from 'react'
import { UserContext } from '../context/UserContextWrapper'
import Footers from '../footer/Footers'
import { Outlet } from 'react-router-dom'
const Content = () => {
  const {isDarkMode} = useContext(UserContext)
  return (
    <div className={`${isDarkMode ? 'bg-slate-800  text-white' : ''} absolute mt-[10vh]  w-full`}>
      
        <div className="flex flex-col h-[80vh]" >
            <div
              className='h-full w-full ' 
              // style={{
              //   clipPath: "polygon(0 1%, 100% 1%, 100% 100%, 0% 100%)",
              //   backgroundImage: `radial-gradient(#abbad1 1.5px, transparent 1.5px), radial-gradient(#abbad1 1.5px, transparent 1.5px)`, 
              //   backgroundSize: "51px 51px",
              //   backgroundPosition: "0 0, 25.5px 25.5px"
              
              // }}
            >
              {/* OUTLET HERE */}
              <Outlet />
            </div>
           
        </div>
        <Footers />
    </div>
  )
}

export default Content
