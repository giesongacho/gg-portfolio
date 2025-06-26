import React, {useContext} from 'react'
import { UserContext } from '../context/UserContextWrapper'
const Footers = () => {
    const {isDarkMode} = useContext(UserContext)

  return (
    <div className={`w-full h-full ${isDarkMode ? 'bg-slate-900 text-white' : ''}  flex justify-center items-center shadow-lg bg-slate-100`}>
        <span>All rights reserved </span>
        
    </div>
  )
}

export default Footers
