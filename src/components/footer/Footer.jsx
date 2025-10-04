import React from 'react'
import Container from '../layouts/Container'

import logo2 from "../images/logo2.png"

const Footer = () => {
  return (
      <div className='py-[64px] bg-[#263238] font-primary text-[#F5F7FA]'>
          <Container>
              <div className='md:flex justify-between items-center'>
                  <div className='text-white'>
                      <img src={logo2} alt="" />
                      <p>Copyright © 2025 Nexcent ltd.</p>
                      <p>All rights reserved</p>
                  </div>
                  <div>
                      <h3>Company</h3>
                      <ul>
                          <li><a href="">About us</a></li>
                          <li><a href="">About us</a></li>
                          <li><a href="">About us</a></li>
                          <li><a href="">About us</a></li>
                          <li><a href="">About us</a></li>
                      </ul>
                  </div>
                  <div>
                      <h3>Company</h3>
                      <ul>
                          <li><a href="">About us</a></li>
                          <li><a href="">About us</a></li>
                          <li><a href="">About us</a></li>
                          <li><a href="">About us</a></li>
                          <li><a href="">About us</a></li>
                      </ul>
                  </div>
                  <div>
                      <h4>Stay up to date</h4>
                  </div>
              </div>
              
          </Container>
    </div>
  )
}

export default Footer