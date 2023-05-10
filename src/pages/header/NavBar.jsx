import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { GrFormClose } from 'react-icons/gr';
import { AiOutlineShopping, AiOutlineSearch } from 'react-icons/ai';
import logo from '../../assets/logo.svg'

const NavBar = () => {

    const [toggle, setToggle] = useState(false)
    
    return (
        <nav className=''>
            <div className='max-w-[1240px] mx-auto flex justify-between p-3 items-center'>

                <Link to='/' > <img className='w-20 h-20' src={logo} alt="" /></Link>
                <span className='md:hidden'>
                    {
                        toggle ? <GrFormClose onClick={() => setToggle(!toggle)}></GrFormClose> : <HiMenu onClick={() => setToggle(!toggle)}></HiMenu>
                    }
                </span>
                <ul className={`transition-all items-center duration-300  gap-4 flex bg-black p-3 opacity-75 md:bg-transparent md:flex-row flex-col absolute md:static w-full top-[8.3%] text-white md:text-black  ${toggle ? "left-0" : "-left-full"}`}>
                    <li className='md:w-[30%] mx-auto flex flex-col md:flex-row gap-8 text-[#444444] font-medium'>
                        <NavLink to="/" className={({ isActive }) =>
                            isActive ? "active" : ""} onClick={() => setToggle(false)}>Home</NavLink>
                        <NavLink to="/statistics" className={({ isActive }) =>
                            isActive ? "active" : ""} onClick={() => setToggle(false)}>About</NavLink>
                        <NavLink to="/applied-jobs" className={({ isActive }) =>
                            isActive ? "active" : ""} onClick={() => setToggle(false)}>Services</NavLink>
                        <NavLink to="/blog" className={({ isActive }) =>
                            isActive ? "active" : ""} onClick={() => setToggle(false)}>Blog</NavLink>
                        <NavLink to="/blog" className={({ isActive }) =>
                            isActive ? "active" : ""} onClick={() => setToggle(false)}>Contact</NavLink>
                    </li>
                    <li className='flex items-center gap-5'>
                        <span> <AiOutlineShopping className='w-6 h-6' /> </span>
                        <span> <AiOutlineSearch className='w-6 h-6' /> </span>
                        <Link ><button className='appointment-btn'>Start Applying</button></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;