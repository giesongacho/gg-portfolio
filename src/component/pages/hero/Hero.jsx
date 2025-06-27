import React, {useContext,useState} from 'react'
import ProfilePic from '../../../assets/profile.jpg'
import { Divider,Timeline,Collapse   } from 'antd';
import { UserContext } from '../../context/UserContextWrapper';
import Footers from '../../footer/Footers';

import { FaHtml5,FaBootstrap,FaLinux,FaGithub,FaGit } from "react-icons/fa";
import { SiCss3,SiTailwindcss,SiExpress,SiSequelize,SiMysql,SiTypescript,SiPostman} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { DiNodejs } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { TiArrowSortedDown,TiArrowSortedUp } from "react-icons/ti";
const Experience = () => {
  return (
    <>
    
    </>
  )
}

const TechCard = ({icon,name,description}) => {

  const {isDarkMode} = useContext(UserContext);

  return (
    <div className={`h-[12rem] rounded-md ${isDarkMode ? 'bg-slate-700' : 'bg-white'} shadow-md`}>
      <div className="grid grid-cols-2 h-full">

         <div className='flex flex-col justify-evenly items-center'>
          <i className='text-[8rem]'>{icon}</i>
          <span className='font-semibold'>{name}</span>
         </div>

         <div className='w-full h-full overflow-y-auto py-2'>
          <h2 className='text-xl font-semibold'>Use Cases:</h2>
          <span className='whitespace-normal break-words '>
            {description}
          </span>
         </div>
      </div>
       
    </div>
  )
}
const TechStack = ({tech}) => {
    const [toggleTech,setToggleTech] = useState(false)
  return (
       <div className='p-2 '>
        <div className='flex justify-between items-center'>
           <h2 className='font-bold text-2xl m-2 pb-2'>Tech-Stack</h2>
            <i className='text-3xl' onClick={()=>setToggleTech(!toggleTech)}>{!toggleTech ? <TiArrowSortedDown /> : <TiArrowSortedUp />} </i>
        </div>
          <div className={`grid items-center gap-5 m-2  rounded-md `}>
            {tech.map((tech,index)=>(
              <>
              {!toggleTech && <TechCard key={index} {...tech}/>}
              </>
            ))}
            
          </div>
      </div>
  )
}
const TechTools = ({tools}) => {
  const [toggleTool,setToggleTool] = useState(false)
  return (
     <div className='p-2 '>
         <div className='flex justify-between items-center'>
           <h2 className='font-bold text-2xl m-2 pb-2'>Tech-Tools</h2>
            <i className='text-3xl' onClick={()=>setToggleTool(!toggleTool)}>{!toggleTool ? <TiArrowSortedDown /> : <TiArrowSortedUp />} </i>
        </div>
          <div className={`grid items-center gap-5 m-2  rounded-md `}>
            {tools.map((tech,index)=>(
              <>
              {!toggleTool && <TechCard key={index} {...tech}/>}
              </>
            ))}
            
          </div>
      </div>
  )
}

const WorkExperience = () => {

  const {isDarkMode} = useContext(UserContext);

  const items = [
    {
      key:"1",
      label: <div className={` ${isDarkMode ? 'text-white' : ''} flex justify-between`} >
        <span className='font-bold text-xl'>Mang Inasal</span>
        <span className='font-semibold'>2013-2014</span>
      </div>,
      children: <div className={`${isDarkMode ? 'text-white' : ''} `}>
        <div><span className="font-semibold">Position</span>: Service Crew</div>
        <p>My job is to cook the chicken, and I've been here for 6 months because i continue my study and enroll as another course in the university.</p>
      </div>,
    },
    {
      key:"2",
      label: <div className={`${isDarkMode ? 'text-white' : ''} flex justify-between`} >
        <span className='font-bold text-xl'>Monde Nissin</span>
        <span className='font-semibold'>2016-2017</span>
      </div>,
      children: <div className={` ${isDarkMode ? 'text-white' : ''}`} >
         <span><b>Position</b>: Production Operator</span>
         <p>My job here is to load the dough of egg-nog biscuit into the machine, and I've been here for 6 months because my work contract is only for 6 months.</p>
      </div>,
    },
    {
      key:"3",
      label: <div className={` ${isDarkMode ? 'text-white' : ''} flex justify-between`} >
        <span className='font-bold text-xl'>Onsemiconductor</span>
        <span className='font-semibold'>2018-2023</span>
      </div>,
      children: <div className={` ${isDarkMode ? 'text-white' : ''}`} >
        <span><b>Position</b>: Production Operator</span>
        <p>My job here to assist the machine that will attache the wire into the electronic component, and sometimes repairing the machine if there is a problem, this is not part of my job but i want to help the other technician to reduce the downtime to that machine.</p>
      </div>,
    },
    {
      key: "4",
      label: <div className={` ${isDarkMode ? 'text-white' : ''} flex justify-between`} >
        <span className='font-bold text-xl'>TelproPh</span>
         <span className='font-semibold'>2023 - (Present)</span>
      </div>,
      children: <div className={` ${isDarkMode ? 'text-white' : ''}`} >
        <span><b>Position</b> : Frontend Web Developer</span>
        <p>My job here to create a UI using Reactjs and Javascript, until i learned how to create API and Backend using Nodejs,Expressjs with sequilize ORM if using mysql/postgre, and i learned how to create Authorization and Authentication on Nodejs and also basic knowledge for Deploment with VPS.</p>
      </div>,
    },
     
  ]

  return (
    <div>
      <h2 className='font-bold text-2xl m-2 pl-2 pb-2'>Work Experience</h2>
      <Collapse items={items} bordered={false} ghost={true} defaultActiveKey={['1']} />
    </div>
  )
}
const ExperienceDescription = () => {
  return (
    <div>

    </div>
  )
}
const Hero = () => {
   const {isDarkMode} = useContext(UserContext);

   const [tech,setTech] = useState([
    {
      icon:<FaHtml5 />,
      name:"HTML",
      description:"HTML (HyperText Markup Language) is the standard language used to create and structure content on the web. Its primary function is to define the structure and layout of a webpage by using a system of tags and attributes to organize text, images, links, forms, and other elements. Here’s a concise explanation of its key functions."
    },
    {
      icon:<SiCss3 />,
      name:"CSS",
      description:"Makes webpages visually appealing and consistent across devices."
    },
    {
      icon:<FaBootstrap />,
      name:"Bootstrap",
      description:"Rapidly builds consistent, responsive websites without writing extensive custom CSS."
    },
     {
      icon:<SiTailwindcss />,
      name:"Tailwind",
      description:"Ideal for developers who want granular control over design without leaving HTML or for building custom UI quickly."
    },
    {
      icon:<IoLogoJavascript />,
      name:"Javascript",
      description:"Powers interactive features like form validation, animations, and real-time updates in web applications."
    },
     {
      icon:<SiTypescript />,
      name:"Typescript",
      description:"Used in large-scale applications to reduce bugs and improve collaboration among developers."
    },
     {
      icon:<GrReactjs />,
      name:"Reactjs",
      description:"Powers fast, interactive front-end applications like dashboards or social media platforms."
    },
    {
      icon:<DiNodejs />,
      name:"Nodejs",
      description:"Builds scalable back-end services or full-stack applications."
    },
    {
      icon:<SiExpress />,
      name:"Expressjs",
      description:"Used to create back-end APIs or serve web content efficiently."
    },
    {
      icon:<SiSequelize />,
      name:"Sequelize",
      description:"Streamlines database operations in Node.js applications, reducing raw SQL queries."
    },
    {
      icon:<SiMysql />,
      name:"Mysql",
      description:"Powers data storage, retrieval, and management in applications like e-commerce or analytics platforms."
    },
    {
      icon:<FaLinux />,
      name:"Linux",
      description:"Runs production servers, development environments, or containerized applications for web development."
    },
   ])

   const [tools,setTools] = useState([
    {
      icon: <SiPostman />,
      name: "Postman",
      description: "Test, develop, and document APIs; automate testing, monitor performance, and collaborate on API projects."
    },
    {
      icon: <FaGithub />,
      name: "Github",
      description: "Host code repositories, enable team collaboration, automate CI/CD, manage projects, and support open-source contributions."
    },
    {
      icon: <FaGit />,
      name: "git",
      description: "Track code changes, manage branches, enable collaboration, and support version control for development."
    },
    {
      icon: <TbApi />,
      name: "Rest API",
      description: "Facilitate client-server communication, power web/mobile apps, support microservices, enable integrations, and automate tasks via HTTP."
    },
   ])
  return (
     <div>
      <div className={`flex flex-col h-[30rem] items-center gap-5 shadow-md  ${isDarkMode ? 'bg-slate-700' : ''}`}>
          <div >
              <img alt="profile" src={ProfilePic} className=' h-[full] w-[20rem] bg-yellow-300 m-5 rounded-[50%] ring ring-4 ring-slate-300 ring-offset-2 '></img>

              </div>
                <span className='h-[10rem] w-[20rem] rounded-md font-semibold text-2xl text-center'>Hello, Im Gieson Gacho i'm a Frontend web developer</span>
              <div className=''>     
          </div>
          
      </div>
      
        <TechStack tech={tech}/>
        <TechTools tools={tools}/>
        <WorkExperience />
       <div className='h-[20vh] mt-5'>
        <Footers />
      </div>
     </div>
  )
}

export default Hero
