import React, { useState } from 'react'
import Logo from '../assets/Lionstone.png'
import { Link } from 'react-router-dom'
import ReorderRoundedIcon from '@mui/icons-material/ReorderRounded';
import '../styles/Navbar.css'


function Navbar() {
    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }

  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? 'open' : 'close'}>
            <img src={Logo} alt='LOGO'/>
            <div className='hiddenLinks'>
                <Link to='/'> Home </Link>
                <Link to='/menu'> Menu </Link>
                <Link to='/about'> About </Link>
                <Link to='/contact'> Contact Us </Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link to='/'> Home </Link>
            <Link to='/menu'> Menu </Link>
            <Link to='/about'> About </Link>
            <Link to='/contact'> Contact Us </Link>
            <button onClick={toggleNavbar}>
                <ReorderRoundedIcon />  
            </button>
            
               
            
        </div>
    </div>
  )
}

export default Navbar