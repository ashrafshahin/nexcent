import React from 'react'
import Container from '../layouts/Container'
import banner from "../images/banner.png"
import Button from '../layouts/Button'

const Banner = () => {
  return (
    <div className='bg-[#f5f7fa]'>
      <Container >
      <div className="  font-primary py-[96px] flex justify-between items-center">
        <div className='w-[60%]'>
          <h1 className='font-semibold text-[64px] text-[#4D4D4D] mb-4 '>Lessons and insights <span className='text-green-500'>from 8 years</span></h1>
          <p className='text-4 text-[#717171]'>Where to grow your business as a photographer: site or social media?</p>
          <Button className='px-[32px] py-[14px] inline-block mt-[32px]'>
            <p >Register</p>
          </Button>
      </div>
      <div className=''>
          <img src={banner} alt="" />
      </div>
      </div>

    </Container>
    </div>
  )
}

export default Banner