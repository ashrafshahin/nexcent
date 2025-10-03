import React from 'react'
import logo from "../images/logo.png"
import Container from '../layouts/Container'
import Button from '../layouts/Button'

const Header = () => {
  return (
    <Container >
      <div className="flex justify-between items-center py-[30px] font-primary">
        <div>
      <img src={logo} alt="" />
    </div>
    <div>
      <ul className='flex '>
        <li className='mr-10'><a href="">Home</a></li>
        <li className='mr-10'><a href="">Service</a></li>
        <li className='mr-10'><a href="">Feature</a></li>
        <li className='mr-10'><a href="">Product</a></li>
        <li className='mr-10'><a href="">Testimonial</a></li>
        <li className='mr-10'><a href="">FAQ</a></li>
      </ul>
    </div>
    <div className='flex justify-between items-center'>
     <p className='text-green-500 mr-6'>Login</p>
     <Button>
      <p>Sign up</p>
     </Button>
      
    </div>
      </div>
    </Container>
  )
}

export default Header