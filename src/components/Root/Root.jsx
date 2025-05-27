import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <div>
      <Header></Header>
      <main className='min-h-[60vh]'>
        This is main
      </main>
      <Footer></Footer>
    </div>
  )
}


export default Home