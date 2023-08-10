import {RxHamburgerMenu} from 'react-icons/rx'

export default function Header() {
  return (
    <>
    <nav className="py-9 px-4 shadow-md">
      <div className="flex justify-between">
        <img src="/vite.svg" alt="" />
        <button className="py-2 px-3 bg-slate-600 text-white rounded-md hover:bg-white hover:text-slate-600 hover:ring-2"><RxHamburgerMenu/></button>

      </div>
    </nav>
    </>
  )
}