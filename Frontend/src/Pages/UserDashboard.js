import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
    const navigate = useNavigate();
    // const url = 'http://localhost:2023/users/dashboard';
    // const hairConnectToken = localStorage.hairConnectToken;
    const [userDetails, setuserDetails] = useState('');

    // axios.get(url, {
    //     headers:{
    //     "Authorization": `Bearer ${hairConnectToken}`,
    //     "Accept": "application/json",
    //     "Content-Type": "application/json"
    //   }}).then((res)=>{
    //     if(!res.data.status){
    //         localStorage.removeItem('hairConnectToken');
    //         navigate('/users/signin');
    //     }else{
    //         console.log(res);
    //         setuserDetails(res.data.result);
    //     }
    //   })

    const signOut = ()=>{
        // localStorage.removeItem('hairConnectToken');
        navigate('/users/signin');
    }
  return (
    <div>
        <div>
            <div className="row">
                <div className="col-3">
                <   div><a href="">Appointments</a></div>
                    <div><a href="">Wallet</a></div>
                    <div><a onClick={signOut} href=''><i class="fa-solid fa-arrow-right-from-bracket"></i>  Sign Out</a></div>
                </div>

                <div className="col-9">
                    <h4>Welcome, </h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserDashboard