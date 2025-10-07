import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`${className} md:w-[1152px] md:mx-auto mx-10 md:mx-0`}>{children}</div>
  )
}

export default Container