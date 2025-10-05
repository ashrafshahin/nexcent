import React from 'react'

const Button = ({children,className}) => {
  return (
    <div className={`${className} bg-primary text-white px-[20px] py-[10px] rounded-lg`}>{children}</div>
  )
}
// inline-block to keep it into appropriate space not taking full width
export default Button