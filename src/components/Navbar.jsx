import {AiOutlineHome, AiOutlineMenu} from 'react-icons/ai'
import LogoJambe from "../assets/img/logo-jambe.png"
import React, {useState} from 'react'

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }
  return (
    <>
    <nav className="py-5 px-4 shadow-md">
      <div className="flex justify-between items-center max-h-full order-1">
        <a href="#root">
          <img src={LogoJambe} alt="logo-jambe" className='w-12'/>
        </a>
        <div className='py-3 px-3 bg-slate-500 rounded-lg hover:bg-white hover:ring-2 cursor-pointer group absolute order-2'>
          < AiOutlineMenu size={20} onClick={handleNav} className="text-white text-base group-hover:text-slate-600" />
          {
            nav ? (
              <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-100'>
                <a href="#main" className='w-[75%] flex justify-center items-center rounded-full'>
                  <AiOutlineHome size={20}/>
                  <span className='pr-36'>Home</span>
                </a>
              </div>
            ): (
              <div>

              </div>
            )
          }
        </div>
          {/* <div>
            <button className='grow bg-slate-500 px-6 py-4 font-bold text-white rounded-full text-sm hover:bg-white hover:text-slate-500 hover:ring-2'>Sign Up</button>
          </div> */}
      </div>
    </nav>
    </>
  )
}