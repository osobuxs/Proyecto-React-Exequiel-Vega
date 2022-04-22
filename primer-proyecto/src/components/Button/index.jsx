import React from 'react'

const Button = ({color, texto, children}) => {
  return (
    <>
    <input type="text"/>
    <button style={{color: color}}>{texto ? texto : 'Default'}</button>
    {children}
    </>
  )
}

export default Button;
