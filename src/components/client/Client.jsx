import React from 'react'
import Container from '../layouts/Container'

import client1 from "../images/client1.png"
import client2 from "../images/client2.png"
import client3 from "../images/client3.png"
import client4 from "../images/client4.png"
import client5 from "../images/client5.png"
import client6 from "../images/client6.png"

const Client = () => {
  return (
    <Container>
      <div className='py-[40px] md:items-center md:text-center'>
        <h2 className='font-semibold text-[25px] md:text-[36px] text-header mb-4'>Our Clients</h2>
        <p className='w-[350px] md:w-full text-4 text-pera mb-4'>We have been working with some Fortune 500+ clients</p>
        <div className='py-6 flex justify-between items-center'>
          <img src={client1} alt="" />
          <img src={client2} alt="" />
          <img src={client3} alt="" />
          <img src={client4} alt="" />
          <img src={client5} alt="" />
          <img src={client6} alt="" />
          <img src={client3} alt="" />
        </div>

      </div>
    </Container>
  )
}

export default Client