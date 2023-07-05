import photo from '~/public/photo.svg'
import Image from 'next/image'
import cavolini from '~/public/img/cavolini.webp'
import fagioli from '~/public/img/fagioli.webp'
import pomodori from '~/public/img/pomodori.webp'
import zucchine from '~/public/img/zucchine.webp'

export default function Photos() {

  const images = [fagioli, cavolini, pomodori, zucchine]


  return (
    <section id="photos">
      <div className='mt-40'>
        <div className='flex items-center max-w-sm gap-4 px-3 mx-auto'>
          <div className='w-full border-2 border-default-light-green'></div>
          <Image
            src={photo}
            alt="photo"
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