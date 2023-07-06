import Image from 'next/image'
import appleIcon from '~/public/apple.svg'
import shearIcon from '~/public/shear.svg'
import tractorIcon from '~/public/tractor.svg'
import woodIcon from '~/public/wood.svg'

export default function Services() {

  const servicesCards = [
    {
      icon: appleIcon,
      title: 'Frutta e Verdura',
      description: `In base alla stagione, offriamo frutta e verdura di svariate tipologie, come <span class='font-bold'>pere, mele, pesche</span> oppure <span class='font-bold'>zucchine, cipolle, peperoni, melanzane, patate, fiori di zucca, pomodori</span> e molto altro.`,
      isSpplitted: true
    },
    {
      icon: woodIcon,
      title: 'Legna da ardere',
      description: `Il nostro servizio di vendita di legna offre una varietà di legna di alta qualità, tra cui <span class='font-bold'>acacia, quercia, ciliegio e frassino.</span> Siamo specializzati nel fornire legna da ardere per scopi domestici, come camino o stufa, così come per utilizzi commerciali o industriali.`,
      isSpplitted: true
    },
    {
      icon: shearIcon,
      title: 'Pulizia campi',
      description: `Offriamo servizi professionali come <span class='font-bold'>trinciatura, aratura e fresatura</span> per i vostri campi, con l'obiettivo di migliorare la qualità del terreno e prepararlo per una coltivazione ottimale.`,
      isSpplitted: true
    },
    {
      icon: tractorIcon,
      title: 'Manutenzione del verde',
      description: `Siamo specializzati nella <span class='font-bold'>potatura di alberi, siepi</span> e forniamo un servizio sicuro ed efficiente di <span class='font-bold'>abbattimento degli alberi.</span>`,
      isSpplitted: false
    },
  ]

  return (
    <section id='services'>
      <h1 className='max-w-[350px] mx-auto font-volkhov font-bold my-20 text-2xl text-center'>Cosa offre La Passione della Terra ai suoi clienti</h1>

      {servicesCards.map((item, index) => (
        <div className='mx-3' key={index}>
          <div className='flex items-start max-w-sm gap-4 mx-auto'>
            <Image
              src={item.icon}
              alt={item.title}
            />
            <div>
              <h2 className='mb-2 text-lg font-bold'>{item.title}</h2>
              <p className='italic' dangerouslySetInnerHTML={{ __html: item.description }}></p>
            </div>
          </div>
          {item.isSpplitted && <div className='max-w-sm mx-auto my-10 border-t border-default-light-green'></div>}
        </div>

      ))}
    </section >
  )
}