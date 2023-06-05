import Head from 'next/head'
import { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portafolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="Portfolio de proyectos de desarrollo web"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Joseph, Francisco, De La Cruz, Rivas"
        />
        <meta name="author" content="Joseph De La Cruz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx global>
        {`
          html {
            font-family: ${inter.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  )
}
