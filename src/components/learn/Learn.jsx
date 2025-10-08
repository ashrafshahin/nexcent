import React from 'react'
import Container from '../layouts/Container'

import learn from "../images/learn.png"
import Button from '../layouts/Button'

const Learn = () => {
  return (
      <Container>
          <div className='py-10 md:flex justify-between items-center'>
              <div>
                  <img className='w-[250px] md:w-full' src={learn} alt="" />
              </div>
              <div className='md:w-[50%]'>
                  <div>
                      <h2 className='w-[200px] md:w-full font-semibold text-[20px] md:text-[36px] text-header justify-start'>The unseen of spending three years at Pixelgrade</h2>
                      <p className='w-[270px] md:w-full mt-4 mb-8 text-[14px] text-pera'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                      <Button className='inline-block rounded-sm'>
                          <p>Learn More</p>
                      </Button>
                  </div>
              </div>
              
          </div>
      </Container>
  )
}

export default Learn