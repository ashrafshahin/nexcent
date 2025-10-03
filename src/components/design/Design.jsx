import React from 'react'
import Container from '../layouts/Container'

import learn from "../images/design.png"
import Button from '../layouts/Button'

const Design = () => {
  return (
      <Container>
          <div className='py-10 flex justify-between items-center'>
              <div>
                  <img src={learn} alt="" />
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
      </Container>
  )
}

export default Design