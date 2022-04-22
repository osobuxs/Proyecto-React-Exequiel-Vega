import React from 'react'
import "./Box.css"

const Box = ({titulo, children}) => {
  return (
    <>
    <div className="box">
       {titulo}
       {children}
       </div>
    </>
  )
}

export default Box;
