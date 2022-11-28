import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/blacklogo.webp'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Goodnight</title>
        <meta name="description" content="Goodnight" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='grid w-full h-screen place-content-center'>
        <div className='w-[300px] h-[90px] sm:w-[500px] sm:h-[150px] mx-auto'>
          <Image src={logo}  className='' />
        </div>
        <div className='text-center grid grid-rows-2 w-3/4 mx-auto content-center'>
          <p className='text-base sm:text-xl font-bold'>Sixdegree</p>
          <p className='text-sm sm:text-base'>Our service is now closed, we thank our friends for their support and encouragement.</p>
          <a href = "mailto:hello@sixdegree.io" className='text-blue-400 underline text-sm sm:text-base my-5'>Catch up with the team</a>
        </div>
      </main>
    </div>
  )
}
