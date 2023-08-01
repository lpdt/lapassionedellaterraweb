import Image from 'next/image'
import background from '~/public/img/background.png'
export default function Introduction() {

  return (
    <section id='introduction'>
      <div className='h-screen lg:pt-0 pt-14'>
        <Image
          priority
          className='absolute object-cover min-h-screen -z-10'
          src={background}
          alt='background'
        />
        <div className='pt-16 mx-3 text-center'>
          <h3 className='text-lg font-volkhov md:text-xl'>Azienda agricola</h3>
          <h1 className='my-5 text-3xl font-bold text-default-dark-green font-volkhov md:text-4xl'>La Passione della Terra</h1>
          <div className='w-16 mx-auto my-8 border-t-2 border-default-light-green' ></div>
          <div className='flex flex-col max-w-xs gap-4 mx-auto italic md:text-xl md:max-w-sm'>
            <p><span className='font-bold'>Frutta e Verdura</span> al dettaglio</p>
            <p className='font-bold'>Legna da ardere</p>
            <p>Servizi di <span className='font-bold'>Pulizia campi</span> e <span className='font-bold'>Manutenzione del verde</span></p>
          </div>
          <a href='#contacts'><button className='py-2.5 my-16 text-white rounded-full px-9 bg-default-dark-green hover:scale-110 transition'>Contattaci</button></a>
        </div>
      </div>

    </section>
  )
}