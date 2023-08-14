import Umkm from "../assets/img/umkm.jpg"
import {TypeAnimation} from 'react-type-animation'

export default function Herosection() {

  return (
    <>
    <header className="w-full h-auto" id="home">
      <img src={Umkm} alt="" className="w-full h-fit object-cover scale-x-[-1]"/>
      <div className="w-full h-fit absolute top-[115px] md:top-[585px]">
        <div className="flex flex-col ml-6 md:ml-40">
          <span className="text-white md:text-5xl text-lg font-sans font-semibold tracking-widest">Selamat Datang di Website Resmi
          <br/>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'UMKM Go',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'UMKM Go Digital',
              1000,
              'UMKM Go Online',
              1000,
              'UMKM Pasar Daru',
              1000
            ]}
            wrapper="span"
            speed={40}
            style={{ fontSize: '1.3em', display: 'inline-block', color: 'white'}}
            repeat={Infinity}
            cursor={true}
          />
          </span>
          <div className="md:text-2xl font-base font-sans text-sm text-white leading-5 text-justify mt-3 tracking-wide">
            <span className="shadow-slate-900 shadow-lg text-center">
              Dalam rangka meningkatkan ekonomi <br/> yang stabil
              dan berkelanjutan, <br/> mari tingkatkan pertumbuhan UMKM <br/> untuk Indonesia yang lebih maju
            </span>
          </div>
        </div>
        <button className="py-1 px-2 md:p-4 bg-slate-200 rounded-lg absolute md:left-[162px] left-[25px] mt-2 md:mt-3 font-semibold font-sans text-sm md:text-lg">
        Join Now
        </button>
      </div>
    </header>
    </>
  )
}