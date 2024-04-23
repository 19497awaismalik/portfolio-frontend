import React, { useEffect, useRef } from 'react'
import profile from '/profile.jpeg'
import Skills from '../component/Skills.jsx'
import css from '/css.png'
import html from '/html.png'
import js from '/js.png'
import react from '/react.webp'
import next from '/next.png'
import { useTypewriter,Cursor } from 'react-simple-typewriter'

const Hero = () => {
  const skill = [react, next, js, html, css];
   let [text,hepler]= useTypewriter({words:["Web Developer","Full Stack Developer","React js","Next js"],loop:{}})

  return (
    <div>
      <div className=' flex md:justify-between  md:flex-row  flex-col-reverse items-center'>
        <div className=' flex   flex-col  w-[100%] h-[60vh] md:w-[600px] md:h-[500px] mx-auto profile '>
          <h1 className=' text-[40px] md:text-left text-center break-words md:text-[60px] text-white bg-transparent  mt-12   items-center font-semibold heading tracking-normal md:tracking-wider' > Hi,My name is Awais Malik and I am a passionate{" "} 
        <span className=' text-blue-600'>{text}</span>
          <Cursor />
            </h1>
          <br />

          <p className='md:text-start text-center md:mt-0  -mt-4'>
            Passionate Frontend Developer | Transforming Idead into Seamless and Visually Stunning Web Solutions

          </p>
        </div>
        <div className='  flex flex-col md:w-[500px] md:h-[500px] mt-[100px]  w-[90%] md:my-5 profile  md:mr-14 ' >
          <img src={profile} alt="" className=' rounded-full ' />
          <div className='w-full flex md:hidden  justify-center mt-6'>
            {skill.map((item, index) => (
              <div key={index} className='   w-[90px] !h-[90px]'>
                <Skills item={item} />
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  )
}

export default Hero
