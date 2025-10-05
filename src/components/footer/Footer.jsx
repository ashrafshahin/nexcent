import React from 'react'
import Container from '../layouts/Container'
import Button from '../layouts/Button';

import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";
import { SiMinutemailer } from "react-icons/si";

import logo2 from "../images/logo2.png"

const Footer = () => {
  return (
      <div className='py-[64px] bg-[#263238] font-primary text-[#F5F7FA] '>
          <Container>
              <div className='md:flex justify-between'>
                  <div className='w-[35%]'>
                      <img className='mb-10' src={logo2} alt="" />
                      <p>Copyright © 2025 Nexcent ltd.</p>
                      <p className='py-2'>All rights reserved | Powered by Shahin</p>
                      <div className='flex items-center mt-10'>
                          <FaInstagram className='bg-white/20 p-1 rounded-2xl mr-4 text-[30px]'/>
                          <TbWorldCode className='bg-white/20 p-1 rounded-2xl mr-4 text-[30px]'/>
                          <FaTwitter className='bg-white/20 p-1 rounded-2xl mr-4 text-[30px]'/>
                          <FaYoutube className='bg-white/20 p-1 rounded-2xl mr-4 text-[30px]'/>

                      </div>
                  </div>
                  <div className=''>
                      <h3 className='w-[160px] font-semibold text-[20px] mb-6'>Company</h3>
                      <ul>
                          <li className='w-[160px] text-[14px] mb-3'><a href="">About us</a></li>
                          <li className='w-[160px] text-[14px] mb-3'><a href="">Blog</a></li>
                          <li className='w-[160px] text-[14px] mb-3'><a href="">Contact us</a></li>
                          <li className='w-[160px] text-[14px] mb-3'><a href="">Pricing</a></li>
                          <li className='w-[160px] text-[14px] mb-3'><a href="">Testimonials</a></li>
                      </ul>
                  </div>
                  <div className=''>
                      <h3 className='w-[160px] font-semibold text-[20px] mb-6'>Support</h3>
                      <ul>
                          <li className='w-[160px] text-[14px] mb-3'><a href="">Help center</a></li>
                          <li className='w-[160px] text-[14px] mb-3'><a href="">Terms of service</a></li>
                          <li className='w-[160px] text-[14px] mb-3'><a href="">Legal</a></li>
                          <li className='w-[160px] text-[14px] mb-3'><a href="">Privacy policy</a></li>
                          <li className='w-[160px] text-[14px] mb-3'><a href="">Status</a></li>
                      </ul>
                  </div>
                  <div className='w-[25%]'>
                      <h4 className='w-[160px] font-semibold text-[20px] mb-6'>Stay up to date</h4>
                      <Button className='bg-white/20'>
                          <div className='flex justify-between items-center '>
                              <p className=' font-semibold text-[20px] text-white mr-2 '>Your email address</p>
                              <SiMinutemailer className='text-white font-semibold text-[20px]' />
                          </div>
                      </Button>
                      
                  </div>
              </div>
              
          </Container>
    </div>
  )
}

export default Footer