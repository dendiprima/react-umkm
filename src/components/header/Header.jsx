import { TypeAnimation } from 'react-type-animation';
import Navbar from '../navbar/Navbar';

export default function Header() {
  return (
    <header className="bg-[url('../../src/assets/img/umkm.jpg')] bg-no-repeat h-fit bg-cover bg-center bg-blend-screen">
      <Navbar/>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true">
          <div
            // className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            // style={{
            //   clipPath:
            //     'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            // }}
          />
        </div>
        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
          {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div> */}
          <div className="text-center">
            <div className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
              Selamat Datang di Website Resmi <br/>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'UMKM Pasar Daru',
                  1000,
                  'UMKM Go Online',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'UMKM Go Digital',
                  1000,
                ]}
                wrapper="span"
                speed={35}
                style={{ fontSize: '1em', display: 'inline-block' }}
                repeat={Infinity}
              />
            </div>
            <p className="mt-8 text-lg leading-8 text-gray-100">
              <span className='shadow-gray-900 bg-[#0078d7]'>
                Dalam rangka meningkatkan ekonomi yang stabil dan berkelanjutan, Mari tingkatkan pertumbuhan UMKM untuk Indonesia yang lebih maju.
              </span> 
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-white text-[#0078d7] hover:text-white px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-[#0078d7]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0078d7] leading-3 tracking-widest"
              >
                Join Now
              </a>
              {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a> */}
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            // className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            // style={{
            //   clipPath:
            //     'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            // }}
          />
        </div>
      </div>
    </header>
  )
}