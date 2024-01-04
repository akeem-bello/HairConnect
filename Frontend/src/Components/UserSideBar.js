import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserSideBar = () => {
    const navigate = useNavigate();

    const signOut = ()=>{
        localStorage.removeItem('hairConnectToken');
        navigate('/users/signin');
    }
  return (
    <div>
        <div>
            <Link to=''>Appointments</Link>
        </div>
        <div>
            <Link to=''>Find a barber/hairdresser</Link>
        </div>
        <div>
            <Link to=''>Wallet</Link>
        </div>
        <div>
            <Link onClick={signOut} to="">
            <i className="fa-solid fa-arrow-right-from-bracket"></i> Sign Out
            </Link>
        </div>
    </div>
  )
}

export default UserSideBar