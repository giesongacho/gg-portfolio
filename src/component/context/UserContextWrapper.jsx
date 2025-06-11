import React, {useState,createContext} from 'react'

export const UserContext = createContext()

const UserContextWrapper = ({children}) => {
    const [isDarkMode,setIsDarkMode] = useState(false)
    const [isToggle,setIstoggle] = useState(false)
  return (
    <div>
        <UserContext.Provider value={{isDarkMode,setIsDarkMode,isToggle,setIstoggle}}>
            {children}
        </UserContext.Provider>
    </div>
  )
}

export default UserContextWrapper
