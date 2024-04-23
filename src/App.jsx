import React, { useState } from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Skills from './component/Skills'
import css from '/css.png'
import html from '/html.png'
import js from '/js.png'
import react from '/react.webp'
import next from '/next.png'
import SkillCard from './component/SkillCard'
import { LuMenuSquare } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { VscTools } from "react-icons/vsc";
import { TbCalendarUser } from "react-icons/tb";
import Progress from './Progress'
import ContactForm from './ContactForm'
import Footer from './component/Footer'
import Mywork from './component/Mywork'

import Colorgenerator from '/colorgenerator.jpg'
import contactmanager from '/contact-manager.jpg'
import pizzajoint from '/pizzajoin.jpg'
import textutils from '/textutils.png'
import inotebook from '/todo.jpg'

import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa6";
import {Toaster} from 'react-hot-toast'
import "./App.css"
const App = () => {
  const skill = [react, next, js, html, css]



  const skillCard = [
    {
      title: "Frontend", icon: LuMenuSquare,
      skill: [
        { language: "HTML5", progress: "80%" },
        { language: "CSS3", progress: "70%" },
        { language: "Javascript", progress: "90%" },
        { language: "Reactjs", progress: "85%" },
        { language: "Nextjs", progress: "70%" },
      ]
    },
    {
      title: "Backend", icon: CiSettings, skill: [
        { language: "Nodejs", progress: "80%" },
        { language: "Expressjs", progress: "85%" },
      ]
    },

  ]
  const nextskillCard = [
    {
      title: "Tools", icon: VscTools, skill: [
        { language: "Git & GitHub", progress: "85%" },
        { language: "Visual Studio Code", progress: "75%" },
        { language: "Webpack", progress: "60%" },
        { language: "Responsive Design", progress: "70%" },
      ]
    },
    {
      title: "Soft Skills", icon: TbCalendarUser, skill: [
        { language: "Problem-solving", progress: "70%" },
        { language: "Collaboration", progress: "70%" },
        { language: "Attentin to Detail", progress: "75%" }
      ]
    },
  ]
  const [currentSkill, setCurrentSkill] = useState([])
  const [heading, setheading] = useState({
    title: ""
  })
  const handle = (item) => {
    let skill = item.skill;
    let title = item.title;
    setCurrentSkill([skill]);
    setheading({ title: title })
  }
  const myWork = [
    { image: Colorgenerator, content: "Color Generator Website  is Website that is use for creating rgb color like this rgb(red,green,blue)", url: "https://color-generator-six-bice.vercel.app" },
    { image: textutils, content: "Textutils Website is Website for converting text to LowerCase,UpperCase, Capitalize,Copy and etc", url: "https://textutile.vercel.app" },
    { image: inotebook, content: "InoteBook Website is Website for saving the note on the cloud with user specific  and also perform crud operation on these note", url: "https://inotebook-mern-frontend.vercel.app" },
    { image: contactmanager, content: "Contact-Manager Website is Website for saving the contact on the cloud with user specific and alses perform crud operation on these user contact ", url: "https://contact-manager-nine-ruddy.vercel.app" },
    { image: pizzajoint, content: "PizzaJoint Website is Website for get order from the user and also display his order  on the screen ", url: "https://pizza-joint-ivory.vercel.app" },
  ]
  return (
    <div>
      <Toaster reverseOrder={false} position='top-center'/>
      <Navbar />
      <div className=' container '>
        <Hero />
        <div className='w-full md:flex hidden  justify-end pr-24  '>
          {skill.map((item, index) => (
            <div key={index} className='    md:w-[90px] md:!h-[90px]'>
              <Skills item={item} />
            </div>
          ))}
        </div>
      </div>
      <div className='       md:mt-10  flex justify-around  md:flex-row flex-col-reverse'>
        <div className='  md:w-1/3    w-[80%]  '>
          <h1 className=' text-center my-5  font-bold md:text-[25px] text-lg '>Teachnical Proficiency</h1>
          <div className=' flex  justify-around md:flex-row flex-col '>
            {skillCard.map((item, index) => (
              <SkillCard key={index} item={item} handle={handle} />
            ))
            }

          </div>
          <div className=' flex  md:justify-around  md:flex-row flex-col '>
            {nextskillCard.map((item, index) => (
              <SkillCard key={index} item={item} handle={handle} />
            ))
            }

          </div>

        </div>
        <div className={`     w-[95%] md:w-1/3 h-auto`} style={{ visibility: heading.title ? "visible" : "hidden" }}>
          {currentSkill && <div
            className={`${`   border-2 border-[#6751b9] rounded-md  `}`} >

            <h1 className={"  border-b-2 border-b-[#6751b9] p-3 my-2"}
            >
              {heading && heading.title}</h1>

            {currentSkill && currentSkill.map((item, index) => {
              return <div className=' pb-4' key={index}>
                <Progress skill={item} key={index} />
              </div>
            })}

          </div>
          }
        </div>
      </div>
      
      <h1 className=' font-bold md:text-[20px] md:pl-20 pl-14  tracking-wide text-[17px]'>My Work</h1>
      <div className=' flex w-[90%]   md:flex-row flex-col  my-7 p-5  items-center  relative rounded-xl  border-2 border-[#6751b9]    mx-5 md:mx-10 '>
      
        {myWork.map((item, index) =>(<Mywork item={item} key={index} />))}
        <span className=' absolute left-[-25px] cursor-pointer  bg-black p-2 rounded-lg border-2 border-[#6751b9]  md:flex hidden'><FaLessThan size={20} color='#6751b9' /></span>
        <span className=' absolute cursor-pointer right-[-25px]  bg-black p-2 rounded-lg border-2 border-[#6751b9] md:flex hidden'><FaGreaterThan size={20} color='#6751b9' /></span>
      </div>

      
      <ContactForm />
      
      <Footer />
    </div>
  )
}

export default App
