import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head'



export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>La Passione Della Terra</title>
      </Head>
      <Analytics />    
      <Component {...pageProps} />
    </>
  )
}
