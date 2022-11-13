import React from 'react'
import Image from 'next/image'
import pinterest from "../assets/pinterest.png"
import ken from "../assets/ken.jpg"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { FaSearch, FaBell } from "react-icons/fa"
import {AiFillMessage } from "react-icons/ai"

const Navbar = () => {
  return (
    <div className='sticky top-0 bg-white'>
      <div className='flex items-center justify-between p-3 pt-4 pb-4'>
          {/* left side */}
        <div className='flex items-center'>
            <div className='w-12 h-12'>
                <Image src={pinterest}/>
              </div>
              <div className='flex items-center hover:bg-neutral-200 ml-4 md:py-2.5 py-3 px-4 rounded-full md:bg-black md:text-white md:hover:bg-black'>
                  <button className='font-semibold text-[18px]'>Home</button>
                  <MdOutlineKeyboardArrowDown className='h-full text-[18px] md:hidden'/>
              </div>
              <div className='hidden md:flex items-center ml-2 py-3 px-3 rounded-full'>
                <button className='font-semibold text-[18px]'>Create</button>
                <MdOutlineKeyboardArrowDown className='h-full text-[18px]'/>
              </div>
        </div>
        {/* middle side */}
        <div className='relative hidden sm:inline-flex items-center w-full ml-4'>
          <input
            type="search"
            placeholder='Search'
            className='bg-neutral-200 p-2.5 rounded-full pl-10 w-full md:py-3 outline-[20px] focus:outline-0 focus:ring-4' />
          <FaSearch className='absolute left-3 text-gray-400'/>
        </div>
        
        {/* right side */}
        <div className='flex items-center text-[44px] text-gray-500 shrink-0'>
          <div className='flex items-center  space-x-4'>
            <FaSearch className='hidden xs:inline-flex sm:hidden hover:bg-neutral-200 p-2 rounded-full'/>
            <FaBell className='hidden xs:inline-flex hover:bg-neutral-200 p-2 rounded-full'/>
            <AiFillMessage className='hidden xs:inline-flex hover:bg-neutral-200 p-2 rounded-full'/>
          <div className='flex'>
            <Image
              src={ken}
              className="w-[3rem] h-[3rem] object-cover rounded-full" />
            </div>
            <MdOutlineKeyboardArrowDown className='hidden xs:inline-flex ml-1.5 hover:bg-neutral-200 p-2 rounded-full' /> 
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Navbar