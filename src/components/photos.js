import Image from 'next/image'
import cavoli from '~/public/img/cavoli.webp'
import cavolini from '~/public/img/cavolini.webp'
import fagioli from '~/public/img/fagioli.webp'
import fioridiz from '~/public/img/fioridiz.webp'
import insalata from '~/public/img/insalata.webp'
import melanzana from '~/public/img/melanzana.webp'
import mele from '~/public/img/mele.webp'
import peperoni from '~/public/img/peperoni.webp'
import pomodori from '~/public/img/pomodori.webp'
import pomodorini from '~/public/img/pomodorini.webp'
import uva from '~/public/img/uva.webp'
import verdurine from '~/public/img/verdurine.webp'
import zucchine from '~/public/img/zucchine.webp'
import photoIcon from '~/public/photo.svg'

export default function Photos() {

  const images = [
    fagioli, cavolini, pomodori, zucchine, cavoli, fioridiz, insalata, melanzana, mele, peperoni, pomodorini, uva, verdurine
  ]


  return (
    <section id='photos'>
      <div className='my-40'>
        <div className='flex items-center max-w-sm gap-4 px-3 mx-auto'>
          <div className='w-full border-2 border-default-light-green'></div>
          <Image
            src={photoIcon}
            alt='photoIcon'
          />
          <div className='w-full border-2 border-default-light-green'></div>
        </div>

        <div className='flex gap-3 my-20 overflow-x-auto scroll-wrapper no-scrollbar'>
          {
            images.map((item, index) => (
              <Image
                className='object-contain h-52'
                key={index}
                src={item}
                alt={item}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}