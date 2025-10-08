import React from 'react'
import Container from '../layouts/Container'

import manage1 from "../images/manage1.png"
import manage2 from "../images/manage2.png"
import manage3 from "../images/manage3.png"

const Manage = () => {
  return (
    <div>
      <Container>
        <div className='md:text-center mt-10 mb-6'>
          <h2 className='w-[280px] md:w-[542px] md:m-auto font-semibold text-[18px] md:text-[36px] text-header mb-4 '>Manage your entire community in a single system</h2>
          <p className='text-4 text-pera'>Who is Nextcent suitable for?
          </p>
        </div>
        <div className='md:flex justify-between items-center inline-block'>
          
          <div className='box-sizing border-box mt-10 mb-6 shadow-sm md:p-7  '>
            <div className='flex justify-center items-center'>
              <img className='' src={manage1} alt="" />
            </div>
            <h2 className='w-[267px] mx-auto font-bold text-[28px] text-header text-center'>Membership Organisations</h2>
            <p className='w-[251px] mx-auto text-[14px] text-pera text-center py-2'>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
          <div className=' box-sizing border-box  mt-10 mb-6 shadow-md md:p-7 '>
            <div className=' flex justify-center items-center'>
              <img className='' src={manage2} alt="" />
            </div>
            <h2 className='w-[267px] mx-auto font-bold text-[28px] text-header text-center'>National Associations</h2>
            <p className='w-[240px] mx-auto text-[14px] text-pera text-center py-2'>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
          <div className='box-sizing border-box mt-10 mb-6 shadow-md md:p-7 '>
            <div className=' flex justify-center items-center'>
              <img className='' src={manage3} alt="" />
            </div>
            <h2 className='w-[231px] mx-auto font-bold text-[28px] text-header text-center'>Clubs And Groups</h2>
            <p className='w-[251px] mx-auto text-[14px] text-pera text-center py-2'>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Manage