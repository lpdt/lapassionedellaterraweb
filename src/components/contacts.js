import locationIcon from '~/public/location.svg'
import cellularIcon from '~/public/cellular.svg'
import messangerIcon from '~/public/messanger.svg'
import maps from '~/public/img/maps.png'
import Image from 'next/image'

export default function Photos() {

  const mapHref = `https://www.google.com/maps/place/45%C2%B001'43.0%22N+7%C2%B030'47.6%22E/@45.028596,7.5125753,273m/data=!3m2!1e3!4b1!4m13!1m8!3m7!1s0x4788156415020687:0x36695651a7c05482!2sVia+Toscanini,+15,+10040+Rivalta+di+Torino+TO!3b1!8m2!3d45.0276924!4d7.5155984!16s%2Fg%2F11c22wvyc3!3m3!8m2!3d45.028596!4d7.513219?entry=ttu`

  const handleMessengerClick = () => {
    // Open Messanger
    const messengerURL = `https://m.me/100057198080323`;
    window.open(messengerURL, '_blank');
  };

  const contacts = [
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
    {
      icon: locationIcon,
      title: 'Dove siamo',
      paragraph: 'Via Arturo Toscanini 49-59, Rivalta di Torino 10040',
      href: mapHref,
      alt: 'location'
    },
  ]

  return (
    <section id='contacts'>
      <div className='mx-3'>
        <div className='max-w-md pb-3 mx-auto text-center rounded-2xl font-volkhov bg-default-dark-green text-default-yellow'>

          <h1 className='px-8 py-10 text-2xl hover:text-3xl font-bold text-center'>Per qualsiasi domanda non esitare a contattarci</h1>
          <div className='py-10'>
            <h3 className='text-xl'>Lunedì - Sabato</h3>
            <div className='w-20 mx-auto my-4 border border-default-light-green'></div>
            <h2 className='text-xl'>8.00 - 20.00</h2>
          </div>
          <div>
          </div>

          <div className='pb-10'>
            {contacts.map((item, index) => (
              <div key={index} className='mx-auto text-center mt-14 w-60'>
                <Image
                  className='w-16 mx-auto my-5'
                  priority
                  src={item.icon}
                  alt={item.alt}
                />
                <div>
                  <h3 className='text-lg'>{item.title}</h3>
                  <a className='text-white underline font-inter' target='_blank' href={item.href} onClick={item.onClick}>{item.paragraph}</a>
                </div>
              </div>
            ))}
          </div>

          <div className='mx-3'>
            <a
              href={mapHref}
              className=''
              target='_blank'
            >
              <Image
                alt='map'
                className='transition rounded-2xl hover:scale-95 '
                src={maps}
              />
            </a>
          </div>
        </div>
      </div>

    </section >
  )
}
