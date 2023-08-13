/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import {AiOutlineHome, AiOutlineMenu} from 'react-icons/ai'
import {BsCart4} from 'react-icons/bs'
import {RiContactsLine} from 'react-icons/ri'
import {FcAbout} from 'react-icons/fc'

import LogoJambe from "../assets/img/logo-jambe.png"
import React, {useState} from 'react'

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }
  return (
    <div>
      <nav className='py-5 bg-white top-0 border-b border-slate-100'>
        <div className='container md:flex md:items-center md:justify-center'>
          <div className='flex items-center md:flex-1 justify-between'>
            <a href="#root" className='flex items-center mx-10 gap-x-4 md:mx-24 md:gap-x-6'>
              <img src={LogoJambe} alt="Logo Jambe" className=' w-[12%]'/>
              <span className='text-xl text-slate-800 font-sans font-bold'>UMKM Jambe</span>
            </a>
            <div className='flex flex-grow gap-x-6 right-24 absolute invisible md:visible'>
              <a href="" className='font-sans font-semibold text-lg'>Home</a>
              <a href="" className='font-sans text-lg hover:border-b-2 hover:border-slate-700'>Nama UMKM</a>
              <a href="" className='font-sans text-lg hover:border-b-2 hover:border-slate-700'>Kontak Kami</a>
              <a href="" className='font-sans text-lg hover:border-b-2 hover:border-slate-700'>Tentang Kami</a>
            </div>
            <span className='mx-4 text-xl bg-slate-100 p-2 rounded-lg md:hidden cursor-pointer' onClick={handleNav}>
              <AiOutlineMenu className=''/>
              {
                nav? (
                  <div className='fixed w-full h-screen bg-white/50 flex flex-col justify-center items-center z-20 left-0 top-0 gap-y-2'>
                    <a href="#home" className='flex items-center justify-center w-[75%] rounded-full shadow-md bg-gray-100 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
                      <AiOutlineHome size={20}/>
                      <span className='pl-4 text-base'>Home</span>
                    </a>
                    <a href="#home" className='flex items-center justify-center w-[75%] rounded-full shadow-md bg-gray-100 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
                      <BsCart4 size={20}/>
                      <span className='pl-4 text-base'>Nama UMKM</span>
                    </a><a href="#home" className='flex items-center justify-center w-[75%] rounded-full shadow-md bg-gray-100 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
                      <RiContactsLine size={20}/>
                      <span className='pl-4 text-base'>Kontak Kami</span>
                    </a><a href="#home" className='flex items-center justify-center w-[75%] rounded-full shadow-md bg-gray-100 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
                      <FcAbout size={20}/>
                      <span className='pl-4 text-base'>Tentang Kami</span>
                    </a>
                  </div>
                )
                : (
                  ''
                )}
            </span>
          </div>
        </div>
      </nav>

    </div>
  )
}