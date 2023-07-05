import Image from "next/image"
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
      title: 'Frutta e Verdura',
      description: `Il nostro servizio di vendita di legna offre una varietà di legna di alta qualità, tra cui acacia, quercia, ciliegio e frassino. Siamo specializzati nel fornire legna da ardere per scopi domestici, come camino o stufa, così come per utilizzi commerciali o industriali.`,
      isSpplitted: true
    },
    {
      icon: shearIcon,
      title: 'Frutta e Verdura',
      description: `Offriamo una vasta gamma di servizi per la cura delle aree verdi, che includono la pulizia accurata di aree incolte, con la rimozione di erbacce e detriti. Siamo specializzati nella potatura di alberi e siepi, che garantisce sia la loro salute che una forma estetica ottimale. Inoltre, forniamo un servizio sicuro ed efficiente di abbattimento degli alberi.`,
      isSpplitted: true
    },
    {
      icon: tractorIcon,
      title: 'Frutta e Verdura',
      description: `Offriamo servizi professionali come trinciatura, aratura e fresatura per i vostri campi, con l'obiettivo di migliorare la qualità del terreno e prepararlo per una coltivazione ottimale.`,
      isSpplitted: false
    },
  ]

  return (
    <section id="services">
      <h1 className="max-w-[350px] mx-auto font-volkhov font-bold my-20 text-2xl text-center">Cosa offre La Passione della Terra ai suoi clienti</h1>

      {servicesCards.map((item, index) => (
        <div className='mx-3' key={index}>
          <div className="flex items-start max-w-sm gap-4 mx-auto">
            <Image
              src={item.icon}
              alt={item.title}
            />
            <div>
              <h2 className="mb-2 text-lg font-bold">{item.title}</h2>
              <p className="italic">{item.description}</p>
            </div>
          </div>
          {item.isSpplitted && <div className="max-w-sm mx-auto my-10 border-t border-default-light-green"></div>}
        </div>

      ))}
    </section >
  )
}