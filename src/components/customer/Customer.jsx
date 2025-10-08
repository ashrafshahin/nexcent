import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

import Container from '../layouts/Container'

import teslaImage from "../images/tesla.png"


import client1 from "../images/client1.png"
import client2 from "../images/client2.png"
import client3 from "../images/client3.png"
import client4 from "../images/client4.png"
import client5 from "../images/client5.png"
import client6 from "../images/client6.png"

const Customer = () => {
  return (
      <div className='py-[32px] bg-[#F5F7FA] font-primary'>
          <Container>
              <div className='md:flex justify-between items-center'>
                  <div className='mr-[78px]'>
                      <img className='w-[300px] md:w-full' src={teslaImage} alt="" />
                  </div>
                  <div className='md:w-[70%]'>
                      <p className='text-pera w-[270px] md:w-[748px] text-[14px] md:text-[16px] font-medium text-justify'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                      <h3 className='text-primary w-[748px] font-semibold mt-4 mb-2'>Tim Smith</h3>
                      <p className='text-[#89939E] w-[748px] text-[14px] md:text-[16px] font-medium' >British Dragon Boat Racing Association</p>
                      <div className='py-6 md:flex  justify-between items-center'>
                                <img src={client1} alt="" />
                                <img src={client2} alt="" />
                                <img src={client3} alt="" />
                                <img src={client4} alt="" />
                                <img src={client5} alt="" />
                                <img src={client6} alt="" />
                                <img src={client3} alt="" />
                          <div className='flex items-center'>
                              <p className=' font-semibold text-[20px] text-primary mr-2'>Meet all customers</p>
                              < FaLongArrowAltRight className='text-primary font-semibold text-[20px]' />


                          </div>
                              </div>
                  </div>
              </div>
          </Container>
          
    </div>
  )
}

export default Customer