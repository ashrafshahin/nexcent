import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

import Container from '../layouts/Container'
import Button from '../layouts/Button'

const Contact = () => {
  return (
      <div className='py-[32px] bg-[#F5F7FA] font-primary'>
          <Container>
              <div className='md:text-center'>
          <h2 className='w-[887px] md:mx-auto font-semibold text-[24px] md:text-[64px] text-[#263238] mb-5 md:mb-0'>Pellentesque suscipit <br /> fringilla libero eu.</h2>
          <Button className='inline-block'>
                      <div className='flex justify-center items-center'>
                          <p className=' font-semibold md:text-[20px] text-white mr-2  '>Get a Demo</p>
                        < FaLongArrowAltRight className='text-white font-semibold text-[20px]' />
                    </div>
                  </Button>
              </div>
              
          </Container>
    </div>
  )
}

export default Contact