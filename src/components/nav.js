import { Fragment, useState } from 'react'
import { Dialog } from '@headlessui/react'
import Image from 'next/image'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import locationIcon from '~/public/location.svg'
import cellularIcon from '~/public/cellular.svg'
import messangerIcon from '~/public/messanger.svg'

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleMessengerClick = () => {
    // Open Messanger
    const messengerURL = `https://m.me/100057198080323`;
    window.open(messengerURL, '_blank');
  };

  const navElements = [
    {
      icon: locationIcon,
      title: 'Dove siamo',
      paragraph: 'Via Arturo Toscanini 49-59, Rivalta di Torino 10040',
      href: `https://www.google.com/maps/place/45%C2%B001'43.0%22N+7%C2%B030'47.6%22E/@45.028596,7.5125753,273m/data=!3m2!1e3!4b1!4m13!1m8!3m7!1s0x4788156415020687:0x36695651a7c05482!2sVia+Toscanini,+15,+10040+Rivalta+di+Torino+TO!3b1!8m2!3d45.0276924!4d7.5155984!16s%2Fg%2F11c22wvyc3!3m3!8m2!3d45.028596!4d7.513219?entry=ttu`,
      alt: 'location'
    },
    {
      icon: cellularIcon,
      title: 'Telefono',
      paragraph: '+39 334 1631 418',
      href: 'tel:334 1631 418',
      alt: 'cellular'
    },
    {
      icon: messangerIcon,
      title: 'Facebook',
      paragraph: 'La Passione della Terra',
      href: '#',
      alt: 'messanger',
      onClick: handleMessengerClick
    },
  ]

  return (
    <>
      <header className='items-center justify-between hidden px-10 py-8 lg:flex bg-default-dark-green text-default-yellow'>
        <h1 className='text-2xl font-volkhov'>La Passione della Terra</h1>
        <div className='flex gap-8'>

          {navElements.map((item, index) => (
            <div key={index} className='flex items-start gap-4 w-60'>
              <Image
                className='w-12'
                priority
                src={item.icon}
                alt={item.alt}
              />
              <div>
                <h3 className='text-lg font-semibold'>{item.title}</h3>
                <a className='italic text-white underline' target='_blank' href={item.href} onClick={item.onClick}>{item.paragraph}</a>
              </div>
            </div>
          ))}

        </div>
      </header >
      <header className='shadow-md lg:bg-default-yellow bg-default-dark-green'>
        <nav className='flex items-center justify-end p-6 mx-auto max-w-7xl lg:px-8 lg:justify-center' aria-label='Global'>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 '
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Apri menu principale</span>
              <Bars3Icon className='w-6 h-6 text-default-yellow lg:text-neutral-800' aria-hidden='true' />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-20 text-neutral-800'>
            <a href='#' className='font-semibold leading-6 text-md'>
              Home Page
            </a>
            <a href='#' className='font-semibold leading-6 text-md'>
              Servizi
            </a>
            <a href='#' className='font-semibold leading-6 text-md'>
              Galleria
            </a>
            <a href='#' className='font-semibold leading-6 text-md'>
              Contattaci
            </a>
          </div>
        </nav>
        <Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className='fixed inset-0 z-10' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-default-yellow sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-end'>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Chiudi menu</span>
                <XMarkIcon className='w-6 h-6 text-neutral-800' aria-hidden='true' />
              </button>
            </div>
            <div className='flow-root mt-6'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='py-6 space-y-2'>
                  <a
                    href='#'
                    className='block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg hover:bg-default-dark-green/40'
                  >
                    Home Page
                  </a>
                  <a
                    href='#'
                    className='block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg hover:bg-default-dark-green/40'
                  >
                    Servizi
                  </a>
                  <a
                    href='#'
                    className='block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg hover:bg-default-dark-green/40'
                  >
                    Galleria
                  </a>
                </div>
                <div className='py-6'>
                  <a
                    href='#'
                    className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7  hover:bg-default-dark-green/40'
                  >
                    Contattaci<span class='ml-2' aria-hidden='true'>&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  )
}
