import React from 'react'
import Container from '../layouts/Container'

import help1 from "../images/help1.png"
import help2 from "../images/help2.png"
import help3 from "../images/help3.png"
import help4 from "../images/help4.png"

const Help = () => {
  return (
    <div className='py-[64px] bg-[#F5F7FA] font-primary'>
      <Container>
        <div className='md:flex justify-between items-center'>
          <div>
            <h2 className='w-[408px] font-semibold text-[36px] text-header'>Helping a local <br /> <span className='text-primary '>business reinvent itself</span></h2>
            <p className='mt-2 text-[#18191F]'>We reached here with our hard work and dedication</p>
          </div>
          <div className='w-[50%]'>
            <div className='flex justify-start items-center mb-10'>
              <div className='flex justify-start items-center'>
                <img src={help1} alt="" />
                <div className='ml-2'>
                  <h5 className='w-[191px] font-bold text-[28px] text-header'>2,245,341</h5>
                  <p className='w-[191px]  text-[16px] text-pera'>Members</p>
                </div>

              </div>
              <div className='flex justify-start items-center'>
                <img src={help2} alt="" />
                <div className='ml-2'>
                  <h5 className='w-[191px] font-bold text-[28px] text-header'>46,328</h5>
                  <p className='w-[191px]  text-[16px] text-pera'>Clubs</p>
                </div>

              </div>
            </div>
            <div className='flex justify-start items-center'>
              <div className='flex justify-start items-center'>
                <img src={help3} alt="" />
                <div className='ml-2'>
                  <h5 className='w-[191px] font-bold text-[28px] text-header'>828,867</h5>
                  <p className='w-[191px]  text-[16px] text-pera'>Event Bookings</p>
                </div>

              </div>
              <div className='flex justify-start items-center'>
                <img src={help4} alt="" />
                <div className='ml-2'>
                  <h5 className='w-[191px] font-bold text-[28px] text-header'>1,926,436</h5>
                  <p className='w-[191px]  text-[16px] text-pera'>Payments</p>
                </div>

              </div>
            </div>


          </div>
        </div>
      </Container>
              
    </div>
    
  )
}

export default Help