import React, { useState } from 'react'

import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import logo from "../images/logo.png"
import Container from '../layouts/Container'
import Button from '../layouts/Button'



const Header = () => {
  const [show, setShow] = useState(false)

  return (
    <div className='overflow-x-hidden'>
      <Container >
        <div className="hidden md:flex justify-between items-center py-[30px] font-primary overflow-x-hidden">

          <div>
            <img src={logo} alt="" />
          </div>

          <div className='md:flex justify-between items-center '>
            <ul className='md:flex'>
              <li className='mr-10'><a href="">Home</a></li>
              <li className='mr-10'><a href="">Service</a></li>
              <li className='mr-10'><a href="">Feature</a></li>
              <li className='mr-10'><a href="">Product</a></li>
              <li className='mr-10'><a href="">Testimonial</a></li>
              <li className='mr-10'><a href="">FAQ</a></li>
            </ul>

            <p className='text-primary mr-6'>Login</p>

            <Button className='inline-block'>
              <p>Sign up</p>
            </Button>

          </div>


        </div>

        {/* mobile responsive menu starts here */}

        <div className="flex md:hidden justify-between items-center py-[30px] font-primary">
          <div>
            <div className=' w-[150px] md:w-auto'>
              <img src={logo} alt="" />
            </div>

          </div>

          <div>
            {
              show ?
                <div className='absolute top-[100px] left-[0px] z-[99999] bg-white w-full py-[30px] px-10 font-primary '>
                  <ul className='my-3'>
                    <li className='mr-10 mb-4'><a href="">Home</a></li>
                    <li className='mr-10 mb-4'><a href="">Service</a></li>
                    <li className='mr-10 mb-4'><a href="">Feature</a></li>
                    <li className='mr-10 mb-4'><a href="">Product</a></li>
                    <li className='mr-10 mb-4'><a href="">Testimonial</a></li>
                    <li className='mr-10 mb-4'><a href="">FAQ</a></li>
                  </ul>

                  <div className='flex flex-grid items-center'>
                    <p className='text-primary mr-6'>Login</p>

                    <Button className='inline-block'>
                      <p>Sign up</p>
                    </Button>
                  </div>

                </div>

                : ""
            }

            {
              show ?
                <ImCross onClick={() => { setShow(!show) }} className='border-3 border text-red-500 p-1 text-4xl' />
                :
                <FaBars onClick={() => { setShow(!show) }} className='border-3 border text-primary p-1 text-4xl' />
            }


          </div>

        </div>
      </Container>
    </div>
  )
}

export default Header