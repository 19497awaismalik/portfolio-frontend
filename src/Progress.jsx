import React from 'react'

const Progress = ({skill}) => {
  return (
   <>
   {skill.map((skill,index)=>(
    <div key={index}>
   <div className=' w-full flex justify-between p-2 px-3 '>
    <h1 className=' md:text-lg text-md'>{skill.language}</h1>
    <h1 className=' text-[#dd8cfa]'>{skill.progress}</h1>
   </div>
   <div className='skill-progress-bg my-2  bg-[#382e68] rounded-xl mx-4 '>
    <div className={` skill-progress   Progress  `} style={{width:skill.progress}} ></div>
   </div>
    </div>
   ))
        
      
    }
   </>
  )
}

export default Progress
