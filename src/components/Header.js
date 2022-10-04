import React from 'react'
import logo from '../img/logo.png'
import Axios from 'axios'

const Header = () => {
    return (
        <header className='center'>
            <img src={logo} alt='breaking bad logo'/>
        </header>
    )
}

export default Header;
