import React from 'react'

import Container from '../layouts/Container'
import Button from '../layouts/Button'

import banner from "../images/banner.png"
import design from "../images/design.png"
import learn from "../images/learn.png"


import { Navigation, Pagination, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const BannerSlider = () => {
  return (
      <div className='bg-[#f5f7fa]'>
          <Container>
              <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={50}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{
                      delay: 3000,
                      pauseOnMouseEnter: false,
                  }}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
              >
                  <SwiperSlide>
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
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className='py-10 flex justify-between items-center'>
                          <div>
                              <img src={learn} alt="" />
                          </div>
                          <div className='w-[50%]  '>
                              <div>
                                  <h2 className=' font-semibold text-[36px] text-header justify-start'>The unseen of spending three years at Pixelgrade</h2>
                                  <p className='mt-4 mb-8 text-[14px] text-pera'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                                  <Button className='inline-block rounded-sm'>
                                      <p>Learn More</p>
                                  </Button>
                              </div>
                          </div>

                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className='py-10 flex justify-between items-center'>
                          <div>
                              <img src={design} alt="" />
                          </div>
                          <div className='w-[50%]  '>
                              <div>
                                  <h2 className=' font-semibold text-[36px] text-header justify-start'>How to design your site footer like we did</h2>
                                  <p className='mt-4 mb-8 text-[14px] text-pera'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                                  <Button className='inline-block rounded-sm'>
                                      <p>Learn More</p>
                                  </Button>
                              </div>
                          </div>

                      </div>
                      
                  </SwiperSlide>
                  
                  ...
              </Swiper>
              
          </Container>
    </div>
  )
}

export default BannerSlider