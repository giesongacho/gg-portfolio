import React, {useContext,useCallback} from 'react'
import { UserContext } from '../context/UserContextWrapper'
import {SunOutlined,MoonOutlined,AlignLeftOutlined} from '@ant-design/icons'

const Header = () => {
    const {isDarkMode,setIsDarkMode,isToggle,setIstoggle} = useContext(UserContext)
   const handleToggle = useCallback(()=>{
    setIstoggle(!isToggle)
   },[isToggle,setIstoggle])

   const handleDarkmode = useCallback(()=>{
    setIsDarkMode(!isDarkMode)
   },[isDarkMode,setIsDarkMode])
  return (
    <div className={`h-[10vh] ${!isDarkMode ? 'shadow-xl' : 'bg-slate-800 text-white shadow-xl'} flex justify-between items-center px-5 fixed top-0 w-full z-30`}>
        <button className='text-2xl cursor-pointer' onClick={()=>handleToggle()}>
            <AlignLeftOutlined />
        </button>

        <button className="text-2xl cursor-pointer" onClick={()=>handleDarkmode()}>
                {isDarkMode ? <SunOutlined /> : <MoonOutlined />}
        </button>
    </div>
  )
}

export default Header
