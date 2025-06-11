import React from 'react'
import ProfilePic from '../../../assets/profile.jpg'
import { Divider } from 'antd';
const Hero = () => {
   
  return (
     <div className='flex flex-col items-center gap-5'>
        <div >
            <img alt="profile" src={ProfilePic} className=' h-[20rem] w-[20rem] bg-yellow-300 m-5 rounded-[50%] ring ring-4 ring-slate-300 ring-offset-2 '></img>
        </div>
        <span className='h-[10rem] w-[20rem] rounded-md font-semibold text-2xl text-center'>Hello, Im Gacho i'm a Frontend web developer</span>
        <div className=''>
            {/* <Divider>
                 <h2 className="text-2xl font-bold italic text-shadow-lg mix-blend-multiply tracking-widest">Skills</h2>
            </Divider> */}
           
        </div>
    </div>
  )
}

export default Hero
