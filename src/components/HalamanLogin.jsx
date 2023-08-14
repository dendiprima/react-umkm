import {LogoJambe} from '../assets/img/logo-jambe.png';
export default function HalamanLogin() {
  return (
    <>
     <nav id="login" className="flex justify-between items-center">
      <img src={LogoJambe} alt="Logo Jambe" className=' w-[55px] md:w-[96px]'/>

     </nav>
    </>
  )
}