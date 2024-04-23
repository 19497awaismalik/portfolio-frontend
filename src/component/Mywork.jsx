import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
const Mywork = ({ item }) => {
  return (
   <>
   <div className=' container relative m-3 md:w-[300px]    w-[90%]   h-[300px]  md:h-[300px]  rounded-md'>
    <img src={item.image} alt=""  className=' w-ful h-full rounded-md '/>
     <div className=' overal absolute  top-0 right-0 bottom-0 left-0 w-full h-full'> 
      <div className='content flex items-center justify-center  flex-col py-10 px-4 '>
        <h1>{item.content}</h1>
         <a href={item.url} target='_blank'><FaExternalLinkAlt size={30} className=' text-red-500 font-bold mt-4'/></a>
      </div>
    </div> 
   </div>
   </>
  )
}

export default Mywork
