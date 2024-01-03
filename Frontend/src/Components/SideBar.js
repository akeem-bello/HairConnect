import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
    const navigate = useNavigate();

    const signOut = () => {
        localStorage.removeItem('hairConnectToken2');
        navigate('/service-provider/signin');
      };
  return (
    <div>
        <div>
            <Link to=''>Services</Link>
        </div>
        <div>
            <Link to=''>Appointments</Link>
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

export default SideBar