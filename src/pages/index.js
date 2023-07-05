import Nav from '@/components/nav'
import Introduction from '@/components/introduction'
import Services from '@/components/services'
import Photos from '@/components/photos'
import Contacts from '@/components/contacts'

export default function Home() {

  return (
    <main>
      <Nav />
      <Introduction />
      <Services />
      <Photos />
      <Contacts />
    </main>
  )
}
