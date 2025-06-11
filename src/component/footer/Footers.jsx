import React, {useContext} from 'react'
import { UserContext } from '../context/UserContextWrapper'
const Footers = () => {
    const {isDarkMode} = useContext(UserContext)

  return (
    <div className={`w-full h-[10vh] ${isDarkMode ? 'bg-slate-900 text-white' : ''}  flex justify-center items-center`}>
        <span>All rights reserved </span>
        
    </div>
  )
}

export default Footers
