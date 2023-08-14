import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logoJambe from '../../assets/img/logo-jambe.png'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Tentang Kami', href: '/about' },
  { name: 'Kontak Kami', href: '/contact' },
  // { name: 'Company', href: '#' },
]

const login = [
  {name: 'Log in', href: '/login'},
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
    <nav className="absolute inset-x-0 top-0 z-50 bg-slate-500/20">
      <div className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="/" className="-m-1.5 p-1.5 flex ">
          <img
            className="h-16 w-auto rounded-full bg-slate-50"
            src={logoJambe}
            alt="" />
          <span className="text-lg font-semibold my-auto ml-4 text-slate-100 shadow-gray-950">UMKM Pasar Daru</span>
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center border rounded-lg p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6 text-gray-100" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12 ">
        {navigation.map((item) => (
          <a key={item.name} href={item.href}>
            <span className="text-sm font-semibold leading-6 shadow-gray-900 text-gray-100 hover:text-gray-300">
              {item.name}
            </span>
          </a>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        {login.map((item) => (
          <a href={item.href} key={item.name} className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-[#0078d7] hover:text-white shadow-sm hover:bg-[#0078d7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0078d7] leading-3 tracking-widest">
          {item.name} 
          </a>
        ))}
      </div>
    </div>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-14 w-auto"
                src={logoJambe}
                alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >{item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                {login.map((item) => (
                   <a href={item.href} key={item.name} className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-[#0078d7] hover:text-white shadow-sm hover:bg-[#0078d7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0078d7] leading-3 tracking-widest">
                  {item.name} 
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </nav>
    
    </>
  )
}
