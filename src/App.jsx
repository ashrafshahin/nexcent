import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import Client from './components/client/Client'
import Manage from './components/manage/Manage'
import Learn from './components/learn/Learn'
import Design from './components/design/Design'
import Help from './components/help/Help'
import Customer from './components/customer/Customer'

import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Header/>
     <Banner/>
     <Client/>
      <Manage />
      <Learn />
      <Help />
      <Design />
      
      <Customer />
      <Blog />
      <Contact />
      <Footer />
      

    </div>
  )
}

export default App
