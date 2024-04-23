import React, { useState } from 'react'
import { HiMenuAlt3 } from "react-icons/hi";
import MobileNav from './MobileNav';
import { MdCancel } from "react-icons/md";
import CV from '/M.AWAIS RESUME .pdf'
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handleToggle=(e)=>{
        if(e.target.id==="screen"){
            setOpen(false);
        }
        
    }
  
  
 
    return (
        <div>
             <MobileNav open={open} setOpen={setOpen} handleToggle={handleToggle}/>
            <header className={`text-gray-600  w-full h-full py-4 nav    mb-5`}>
                <div className=" text-white  flex  ">
                    <span className="  font-bold  ">
                        <h1 className='logo tracking-wider  md:text-2xl text-xl md:pl-10 pl-5'>Time To Program</h1>
                    </span>

                <div className='md:ml-auto md:flex items-center  hidden '>
                    <ul className='flex    text-white '>
                        <li><a className='menu-item'>Home</a></li>
                        <li><a className='menu-item'>Skills</a></li>
                        <li><a className='menu-item'>Work Experience</a></li>
                        <li><a  className='menu-item'>Contact Me</a></li>
                    </ul>
                    <button className=' ml-5  contact-btn px-5 py-3'>Hire Me</button>
                   <button className=' '> <a className=' text-white ml-5 mr-[70px] contact-btn px-5 py-3' href={CV} download>Download  CV</a></button>
                     
                </div>
              <div className='toggle md:hidden '>
              <span className=' md:hidden block ml-auto  cursor-pointer'>
                {!open ?<HiMenuAlt3 size={30} style={{color:"white",cursor:"pointer"}} 
                onClick={()=>setOpen(true)}/>:<MdCancel size={30} style={{cursor:"pointer"}} 
                onClick={()=>setOpen(false)}/>
                }</span>

              </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar
