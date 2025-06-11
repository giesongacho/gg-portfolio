import React from 'react'
import ProfilePic from '../../../assets/profile.jpg'
const Hero = () => {
  return (
     <div className='flex flex-col items-center gap-5'>
        <div>
            <img alt="profile" src={ProfilePic} className='h-[20rem] w-[20rem] bg-yellow-300 m-5 rounded-[50%] ring ring-4 ring-slate-600 ring-offset-2 '></img>
        </div>
        <span className='h-[15rem] w-[20rem] rounded-md font-semibold text-2xl text-center'>This is the Content</span>
    </div>
  )
}

export default Hero
