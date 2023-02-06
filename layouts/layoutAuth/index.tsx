import React, { ReactNode } from 'react'
import NavAuth from '../../components/Navbar/NavAuth'


const layoutAuth = ({children} : {children : ReactNode}) => {
  return (
    <div>
        <NavAuth/>
        <main>{children}</main>      
    </div>
  )
}

export default layoutAuth