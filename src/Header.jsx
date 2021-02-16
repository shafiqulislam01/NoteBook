import React from 'react'
import logo from './Image/logo.jpg'

const Header = () =>{
   return(
     <>
     <div className='header'>
        <img src={logo} alt='logo' width='70' height='50' 
        style={{borderRadius: '30px'  
        }}/>
        <h1>Note Book</h1>
     </div>
     </>
   )
}

export default Header;