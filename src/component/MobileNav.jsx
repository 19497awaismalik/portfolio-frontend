import React from 'react'
import CV from '/M.AWAIS RESUME .pdf'

const MobileNav = ({ open, setOpen, handleToggle }) => {

    return (
        <div>
            {open && <>
                <div className={`mobile-menu w-[100vw] h-[100vh] flex flex-col ${open ? "active" : ""}`} id='screen' onClick={(e) => handleToggle(e)}>
                    <div className='mobile-menu-container text-white w-full'>
                        <span className="font-bold">
                            <h1 className='logo tracking-wider text-center  justify-center flex text-2xl   py-4'>Time To Program</h1>
                        </span>
                        <div>
                            <div className=' flex flex-col    '>
                                <ul className=' flex flex-col    text-white '>
                                    <li className=' my-4 pl-4'><a className='menu-item'>Home</a></li>
                                    <li className=' my-4 pl-4'><a className='menu-item'>Skills</a></li>
                                    <li className=' my-4 pl-4'><a className='menu-item'>Work Experience</a></li>
                                    <li className=' my-4 pl-4'><a className='menu-item'>Contact Me</a></li>
                                </ul>
                                <button className=' ml-5 mr-[70px] contact-btn mt-10 px-5  py-3'>Hire Me</button>
                                <a className=' ml-5 my-4 mr-[70px] contact-btn px-5 py-3 items-center flex justify-center' href={CV} download>Download  CV</a>

                            </div>
                        </div>
                    </div>


                </div></>}

        </div>
    )
}

export default MobileNav
