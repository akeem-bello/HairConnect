import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <div style={{position: 'sticky', top: 0}}>
            <Link to='/'><img src='' alt='Logo'/></Link>
            <Link to='/'>Home</Link>
            <input type="text" placeholder='Search services' />
            <button><i className="fa-solid fa-magnifying-glass"></i></button>
            <Link to='/users/signin'>Sign In</Link>
            <Link to='/users/signup'>Sign Up</Link>
            <Link to='/contact'>Contact Us</Link>
        </div>
    </div>
  )
}

export default NavBar