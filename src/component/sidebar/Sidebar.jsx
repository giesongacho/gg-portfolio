import React,{useContext} from 'react';
import {useState} from 'react';
import { UserContext } from '../context/UserContextWrapper';
import {CloseOutlined,ProjectOutlined,SafetyCertificateOutlined,ApartmentOutlined,SolutionOutlined,SubnodeOutlined,HomeOutlined,LeftOutlined,RightOutlined} from '@ant-design/icons';
import {Tooltip } from 'antd';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const list = [
        {value: "Skills", url : "skills", icon : <ApartmentOutlined />},
        {value: "Experience", url : "experience", icon : <SubnodeOutlined />},
        {value: "Education", url : "education", icon : <SolutionOutlined />},
        {value: "Certificate", url : "certificate", icon : <SafetyCertificateOutlined />},
        // {value: "Projects", url : "", icon : <ProjectOutlined />},
        {value: "Home", url : "/", icon : <HomeOutlined />}
    ]
    const {isDarkMode,isToggle,setIstoggle} = useContext(UserContext)
    const [minimize,setMinimize] = useState(false)
    const handleCloseSidebar = () => {
        setIstoggle(!isToggle)
    }
  return (
    <div className={`${isDarkMode ? "bg-slate-800" : " bg-slate-50 "} ${minimize ? "w-[80px]" : "w-[220px] "} h-screen fixed shadow-2xl z-40`}>
        <div className=" h-[100px] flex justify-end items-center">
            {!minimize && (
                
                <button className={`${isDarkMode ? 'text-white hover:bg-slate-700' : 'hover:bg-slate-200'} w-[2rem] h-[2rem] mr-5 rounded-md cursor-pointer`} onClick={()=> handleCloseSidebar()}> <CloseOutlined /></button>
            )}
        </div>
        <div className="mt-5 h-1/2">
                <div className=" py-5">
                    {list.map((list,index) => (
                        <Tooltip placement="right" title={!minimize ? '' : list.value}>
                            <Link key={index}  to={list.url}>
                                <div className={`m-2 ${isDarkMode ? 'text-white hover:bg-slate-700' : ' hover:bg-slate-200'} flex py-2 pl-5 gap-x-2 rounded-md cursor-pointer `}>
                                    <span>{list.icon}</span>
                                    {!minimize && <button className="text-[1.2 font-semibold] shrink">{list.value}</button>}
                                </div>
                            </Link>
                        </Tooltip>
                    ))}
                </div>
        </div>
        <div className={`fixed bottom-0 ${minimize ? "w-[80px]" : "w-[220px] "} fond-bold py-2 rounded-md   shadow-md text-center   text-2xl  cursor-pointer`} onClick={() => setMinimize(!minimize)}>
            <div className={`${isDarkMode ? 'text-white bg-slate-700' : 'bg-slate-300'}  m-2 py-2 rounded-md hover:opacity-50 inset-shadow-md `}>
                {!minimize ? <LeftOutlined /> : <RightOutlined />}
            </div>
        </div>
    </div>
  )
}



export default Sidebar
