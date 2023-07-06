import Nav from '@/components/nav'
import Introduction from '@/components/introduction'
import Services from '@/components/services'
import Photos from '@/components/photos'
import Contacts from '@/components/contacts'
import Footer from '@/components/footer'

export default function Home() {

  return (
    <main>
      <Nav />
      <Introduction />
      <Services />
      <Photos />
      <Contacts />
      <Footer />
    </main>
  )
}
