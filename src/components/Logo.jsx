import React from 'react'
import blogLogo from '../assets/logo.svg'


function Logo({width='100px'}) {
  return (
    <div width={width}>
      <img src={blogLogo} alt="Logo" />
    </div>
  )
}

export default Logo
