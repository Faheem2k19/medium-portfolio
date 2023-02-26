import Head from 'next/head'
import Allcards from '@/components/allcard'
import Headerinfo from '@/components/header'
import Layout from '@/layout/layout'
import { ScrollToTop } from '@/components/scrolltotop'
import { homeSeo } from './api/hello'

export default function Home() {
  return (
    <>
      <Head>
        <title>{homeSeo.title}</title>
        <meta name="description" content={homeSeo.desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ScrollToTop />
      <div className='lg:container lg:mx-auto md:container md:mx-auto xl:container xl:mx-auto 2xl:container 2xl:mx-auto'>
        <Layout>
          <div className="px-1">
          <Headerinfo />
          <Allcards />
          </div>
        </Layout>
      </div>
    </>
  )
}
