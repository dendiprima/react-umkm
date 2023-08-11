import {RxHamburgerMenu} from 'react-icons/rx'
import LogoJambe from "../assets/img/logo-jambe.png"

export default function Header() {
  return (
    <>
    <nav className="py-5 px-4 shadow-md">
      <div className="flex justify-between max-h-full">
          <img src={LogoJambe} alt="logo-jambe" className='w-12'/>
          {/* <div className='py-3 px-4 bg-slate-500 rounded-lg hover:bg-white hover:ring-2 cursor-pointer group'>
            <button className="text-white text-base group-hover:text-slate-600"><RxHamburgerMenu/></button>
          </div> */}
          <div>
            <button className='grow bg-slate-500 px-6 py-4 font-bold text-white rounded-full text-sm hover:bg-white hover:text-slate-500 hover:ring-2'>Sign Up</button>
          </div>
      </div>
    </nav>
    </>
  )
}