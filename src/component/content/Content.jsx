import React, {useContext} from 'react'
import { UserContext } from '../context/UserContextWrapper'
import Footers from '../footer/Footers'
import { Outlet } from 'react-router-dom'
const Content = () => {
  const {isDarkMode} = useContext(UserContext)
  return (
    <div className={`${isDarkMode ? ' text-white bg-slate-800' : 'bg-slate-100'} absolute mt-[10vh]  w-full`}>
      
        <div className="flex flex-col " >
            <div className=' w-full'>
              {/* OUTLET HERE */}
              <Outlet />
            </div>

            {/* <div className='h-[10vh] '>
              <Footers />
            </div> */}
        </div>
        
    </div>
  )
}

export default Content
