import React,{useContext} from 'react'
import { UserContext } from '../context/UserContextWrapper'
import {CloseOutlined,ProjectOutlined,SafetyCertificateOutlined,ApartmentOutlined,SolutionOutlined,SubnodeOutlined} from '@ant-design/icons'

const Sidebar = () => {
    const list = [
        {value: "Tech Stack", url : "", icon : <ApartmentOutlined />},
        {value: "Experience", url : "", icon : <SubnodeOutlined />},
        {value: "Education", url : "", icon : <SolutionOutlined />},
        {value: "Certificate", url : "", icon : <SafetyCertificateOutlined />},
        {value: "Projects", url : "", icon : <ProjectOutlined />}
    ]
    const {isDarkMode,isToggle,setIstoggle} = useContext(UserContext)
    const handleCloseSidebar = () => {
        setIstoggle(!isToggle)
    }
  return (
    <div className={`${isDarkMode ? "bg-slate-800" : "shadow-lg bg-slate-50"} w-[220px] h-screen absolute `}>
        <div className=" h-[100px] flex justify-end items-center shadow-md">
            <button className={`${isDarkMode ? 'text-white' : ''} w-[2rem] h-1/4 mr-5 rounded-md cursor-pointer`} onClick={()=> handleCloseSidebar()}><CloseOutlined /></button>
        </div>
        <div className="mt-5 h-1/2">
                <div className=" py-5">
                    {list.map((list) => (
                        <div className={`m-2 ${isDarkMode ? 'bg-slate-200 hover:opacity-80' : 'shadow-lg hover:bg-slate-200'} flex py-2 pl-5 gap-x-2 rounded-md`}>
                            <span>{list.icon}</span>
                            <button className="text-[1.2 font-semibold rem] cursor-pointer shrink">{list.value}</button>
                        </div>
                    ))}
                </div>
        </div>
    </div>
  )
}



export default Sidebar
