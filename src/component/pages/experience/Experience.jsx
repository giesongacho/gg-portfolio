import React, {useState,useContext} from 'react'
import {Timeline} from 'antd';
import { UserContext } from '../../context/UserContextWrapper';

 const WorkExperience = () => {

  }

const Experience = () => {
  const {isDarkMode} = useContext(UserContext)
  const experience = [
    {
      name:"Mang Inasal",
      position:"Service Crew",
      year:"2013"
    },
    {
      name:"Mang Inasal",
      position:"Service Crew",
      year:"2013"
    },
  ]
 
  return (
    <div className='flex flex-col justify-center'>
    
            <div className={`shadow-md m-5 ${isDarkMode ? 'bg-slate-700 text-white' : 'bg-white '}`}>
              <h2 className='text-center m-5 text-2xl font-bold italic'>Work Experience</h2>

                <div className='m-5 grid grid-cols-2 gap-4'>
                    <div className="bg-white shadow-md">
                        <div>text1</div>
                    </div>

                    <div className="bg-white shadow-md">
                      text2
                    </div>

                    <div className="bg-white shadow-md">
                      text3
                    </div>

                    <div className="bg-white shadow-md">
                      text4
                    </div>
                </div>
            </div>
             
     
            
    </div>
  )
}

export default Experience
