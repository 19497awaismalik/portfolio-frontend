import React from 'react'

const SkillCard = ({item,handle}) => {
  return (
    <div>
      <div className=' m-4 relative border-2 p-5 rounded-md hover:bg-[#6751b9]  cursor-pointer border-[#6751b9] min-w-full  md:w-[200px]' onClick={()=>handle(item)}>
       <item.icon size={40} color={"#6751b9"} className=" font-bold border-2 rounded-md border-[#6751b9] absolute left-[-15px] z-[999]  bg-black top-[-15px] p-1"/>
        <h1 className=' text-center md:text-lg text-md'>{item.title}</h1>

      </div>
    </div>
  )
}

export default SkillCard
