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
                      delay: 5000,
                      pauseOnMouseEnter: false,
                  }}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
              >
                  <SwiperSlide>
                      <div className="font-primary py-6 md:py-[96px] md:flex justify-between items-center">
                          <div className='w-[60%]'>
                              <h1 className='font-semibold text-[20px] md:text-[64px] text-[#4D4D4D] mb-4 '>Lessons and insights <span className='text-primary'>from 8 years</span></h1>
                              <p className='w-[350px] md:w-full text-[12px] md:text-[16px] text-[#717171]'>Where to grow your business as a photographer: site or social media?</p>
                              <Button className='px-[32px] py-[14px] inline-block mt-[32px]'>
                                  <p >Register</p>
                              </Button>
                          </div>
                          <div className=''>
                              <img className='w-[250px] md:w-full mt-8 md:mt-0' src={banner} alt="" />
                          </div>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className='py-10 md:flex justify-between items-center'>
                          <div>
                              <img className='w-[250px] md:w-full mb-4 md:mb-0' src={learn} alt="" />
                          </div>
                          <div className='w-[50%]  '>
                              <div>
                                  <h2 className=' font-semibold text-[16px] md:text-[36px] text-header justify-start'>The unseen of spending three years at Pixelgrade</h2>
                                  <p className='w-[350px] md:w-full mt-4 mb-8 text-[12px] md:text-[14px] text-pera'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam aperiam quae illum delectus laborum, numquam velit enim aut fugiat dicta temporibus nam eum nesciunt impedit, voluptatibus optio iusto voluptate vel.  </p>
                                  <Button className='inline-block rounded-sm'>
                                      <p>Learn More</p>
                                  </Button>
                              </div>
                          </div>

                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className='py-10 md:flex justify-between items-center'>
                          <div>
                              <img className='w-[250px] md:w-full mb-4 md:mb-0' src={design} alt="" />
                          </div>
                          <div className='w-[50%]  '>
                              <div>
                                  <h2 className=' font-semibold text-[16px] md:text-[36px] text-header justify-start'>How to design your site footer like we did</h2>
                                  <p className='w-[350px] md:w-full mt-4 mb-8 text-[12px] md:text-[14px] text-pera'>Donec a eros justo. Fusce egestas tristique ultrices. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam quis iusto at quo quod libero unde sit ullam, est aspernatur impedit autem asperiores dolor, error vitae consequatur accusamus deserunt modi. </p>
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