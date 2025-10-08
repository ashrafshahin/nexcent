import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`${className} md:w-[1152px] md:mx-auto mx-6 md:mx-auto`}>{children}</div>
  )
}

export default Container