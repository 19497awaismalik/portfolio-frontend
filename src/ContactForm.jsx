import React, { useState } from 'react'
import { FiMail } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import {toast} from 'react-hot-toast'
const ContactForm = () => {
  const [data, setData] = useState({
    fname:"",
    lname:"",
    email:"",
    message:""
  });
  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value});
  }
const handleSubmit=async(e)=>{
  e.preventDefault();
  if(data.fname===""|| data.lname==="" || data.email==="" || data.message===""){
    toast.error("Pleas fill all these fields");
  }else{
  let response=  await  fetch("https://portfolio-backend-puce.vercel.app/contacts",{
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
      body:JSON.stringify({fname:data.fname,lname:data.lname,email:data.email,message:data.message})
    })
    setData({
      fname:"",
      lname:"",
      email:"",
      message:""
    })
    toast.success("Thanks you for contact us");
    console.log(response);
  }
}
  return (
    <div className=' mt-10'>
      <h1 className=' font-bold mx-auto ml-10 md:ml-36  my-10 md:text-xl tracking-wide text-lg' >Contact Me</h1>
      <div className=' flex justify-around md:flex-row flex-col-reverse  '>
      <div className=' flex flex-col'>
      <div className=' border-2 border-[#382e68] rounded-md   bg-[#130f2a] mb-3 md:w-[650px] w-[90%]  py-4 flex items-center flex-col '>
            <div className=' bg-[#382e68] rounded-md p-1 '>
        <FiMail  size={30} color='#fff' style={{background:" #382e68"}} className=' cursor-pointer  m-2' />
            </div>
         <h1 ><a href={`mailto:19497.awaismalik@gmail.com`} target='_blank' className=' text-white cursor-pointer '>19497.awaismalik@gmail.com</a></h1>

        </div>
      <div className=' border-2 border-[#382e68] mt-3  bg-[#130f2a] rounded-md md:w-[650px] w-[90%]  flex items-center  flex-col py-4 '>
            <div className=' bg-[#382e68] rounded-md p-1'>
        <BsGithub  size={30} color='#fff' style={{background:" #382e68"}} className=' cursor-pointer  m-2' />

            </div>
        <h1><a href="http://github.com/19497awaismalik" target='_blank' className=' cursor-pointer text-white'>http://github.com/19497awaismalik</a></h1>

        </div>
      </div>
        <div className='  rounded-md md:w-[650px] w-[90%] '>
            <form action="" onSubmit={handleSubmit}>
                <div className=' flex  md:justify-between items-center md:flex-row  flex-col'>
                    <input type="text" placeholder='First Name' onChange={handleChange} name='fname' value={data.fname} className=' w-[95%]  md:mb-0  mb-5 
                    md:w-[47%] p-2 rounded-md text-white border-2 border-[#6751b9] bg-[#130f2a]' />

                    <input type="text" placeholder='Last Name' onChange={handleChange} name='lname' value={data.lname} className=' w-[95%] md:w-[47%] p-2 rounded-md text-white border-2 border-[#6751b9] bg-[#130f2a]' />
                </div>
                <div className=' flex  w-full my-6 items-center justify-center'>
                    <input type="email" placeholder='Email' onChange={handleChange} name='email' value={data.email} className='w-[95%] md:w-full p-2 rounded-md text-white border-2 border-[#6751b9] bg-[#130f2a]' />
                </div>
                <div className=' flex  w-full  my-6 justify-center items-center'>
                 <textarea    className=' w-[95%] md:w-full p-2 rounded-md text-white border-2 border-[#6751b9] bg-[#130f2a]' onChange={handleChange} name='message' value={data.message} rows={5} placeholder='Message'></textarea>
                </div>
                <div className=' w-full md:w-full  flex justify-center items-center  my-10 md:my-3'>
                    <button className=' w-[95%] md:w-full items-center border-2 border-[#a891fe]   p-2 rounded-md  formBtn '>CONTACT ME </button>
                </div>
                
            </form>

        </div>
      </div>
    </div>
  )
}

export default ContactForm
