/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import {AiOutlineHome, AiOutlineMenu} from 'react-icons/ai'
import LogoJambe from "../assets/img/logo-jambe.png"
import React, {useState} from 'react'

export default function Navbar() {

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }
  return (
    <div>
      <nav className=' justify-between items-center flex md:py-4 px-4 md:justify-around shadow-md bg-opacity-50'>
        <div className='flex items-center'>
          <a href="#home">
            <img src={LogoJambe} alt="Logo Jambe" className='w-28' />
          </a>
        <h1 className='font-bold text-4xl m-6 md:visible invisible'>
        UMKM Jambe
        </h1>
        </div>

        <button className=' bg-slate-500 rounded-md py-3 px-4 hover:bg-white hover:ring-2 group md:hidden'>
          <AiOutlineMenu className='text-white group-hover:text-slate-500 z-[99]' onClick={handleNav}/>
        {
          nav ? (
            <div className='flex flex-col gap-y-3 w-full h-screen items-center justify-center mx-auto fixed right-20 top-8 bg-white/90'>
              <a href="#home" className='flex items-center justify-center w-full rounded-lg shadow-lg bg-slate-300/90 gap-4'>
                <AiOutlineHome size={20}/>
                <span className='py-6'>Home</span>
              </a>
              <a href="#home" className='flex items-center justify-center w-full rounded-lg shadow-lg bg-slate-300/90 gap-4'>
                <AiOutlineHome size={20}/>
                <span className='py-6'>Home</span>
              </a>
              <a href="#home" className='flex items-center justify-center w-full rounded-lg shadow-lg bg-slate-300/90 gap-4'>
                <AiOutlineHome size={20}/>
                <span className='py-6'>Home</span>
              </a>
              <a href="#home" className='flex items-center justify-center w-full rounded-lg shadow-lg bg-slate-300/90 gap-4'>
                <AiOutlineHome size={20}/>
                <span className='py-6'>Home</span>
              </a>
              <a href="#home" className='flex items-center justify-center w-full rounded-lg shadow-lg bg-slate-300/90 gap-4'>
                <AiOutlineHome size={20}/>
                <span className='py-6'>Home</span>
              </a>
            </div>
            
          )
          : (
            <div>

            </div>
          )   
        }
        </button>
      </nav>
    </div>
  )
}