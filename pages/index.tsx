import type { NextPage } from 'next'
import Head from '../components/Head'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default Home
