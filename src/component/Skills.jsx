import React from 'react'

const Skills = ({item}) => {
  return (
    <div className=' rounded-md border-2 border-[#6751b9] m-2 '>
      <img src={item} alt=""  className='  items-center cursor-pointer p-2 skill'/>
    </div>
  )
}

export default Skills
