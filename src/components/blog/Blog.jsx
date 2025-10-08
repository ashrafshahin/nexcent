import React from 'react'
import Container from '../layouts/Container'
import { FaLongArrowAltRight } from "react-icons/fa";

import blog1 from "../images/blog1.png"
import blog2 from "../images/blog2.png"
import blog3 from "../images/blog3.png"

const Blog = () => {
  return (
      <div>
          <Container>
              <div className='pt-[48px] pb-[150px] font-primary'>
                  <div className='md:text-center mb-4'>
                      <h2 className='w-[1110px] font-semibold text-[22px] md:text-[36px] text-header'>Caring is the new marketing</h2>
                      <p className='w-[350px] md:w-[628px] text-pera md:mx-auto mt-2'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
                  </div>
                  <div className='md:flex justify-between items-center'>
                    <div>
                          <div className='relative text-center inline-block mb-22 md:mb-0'>
                        <img src={blog1} alt="" />
                              <div className='absolute top-[140px] md:top-[170px] left-[25px] md:w-[317px] mx-auto my-[25px] text-center text-center shadow-lg inline-block bg-[#F5F7FA] rounded-sm'>
                                <p className='w-[285px] mx-auto text-[20px] text-pera p-4 '>Creating Streamlined Safeguarding Processes with OneRen</p>
                                <div className='flex justify-center items-center mb-4'>
                                    <p className=' font-semibold text-[20px] text-primary mr-2 '>Readmore</p>
                                    < FaLongArrowAltRight className='text-primary font-semibold text-[20px]' />
                                </div>
                            </div>
                        </div>
                          
                    </div>
                      <div>
                          <div className=' relative text-center inline-block mb-22 md:mb-0'>
                              <img src={blog2} alt="" />
                              <div className='absolute top-[140px] md:top-[170px] left-[25px] md:w-[317px] mx-auto my-[25px] text-center text-center shadow-lg inline-block bg-[#F5F7FA] rounded-sm'>
                                  <p className='w-[300px] mx-auto text-[20px] text-pera p-4 '>What are your safeguarding responsibilities and how can you manage them?</p>
                                  <div className='flex justify-center items-center mb-4'>
                                      <p className=' font-semibold text-[20px] text-primary mr-2 '>Readmore</p>
                                      < FaLongArrowAltRight className='text-primary font-semibold text-[20px]' />
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div>
                          <div className=' relative text-center inline-block'>
                              <img src={blog3} alt="" />
                              <div className='absolute top-[140px] md:top-[170px] left-[25px] md:w-[317px] mx-auto my-[25px] text-center text-center shadow-lg inline-block bg-[#F5F7FA] rounded-sm'>
                                  <p className='w-[285px] mx-auto text-[20px] text-pera p-4 '>Revamping the Membership Model with Triathlon Australia</p>
                                  <div className='flex justify-center items-center mb-4'>
                                      <p className=' font-semibold text-[20px] text-primary mr-2 '>Readmore</p>
                                      < FaLongArrowAltRight className='text-primary font-semibold text-[20px]' />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  </div>
          </Container>
    </div>
  )
}

export default Blog