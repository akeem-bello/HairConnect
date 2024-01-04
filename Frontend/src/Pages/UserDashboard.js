import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserSideBar from '../Components/UserSideBar';

const UserDashboard = () => {
    const navigate = useNavigate();
    const url = 'http://localhost:2023/users/dashboard';
    const hairConnectToken = localStorage.hairConnectToken;
    const [userDetails, setuserDetails] = useState('');

    axios.get(url, {
        headers:{
        "Authorization": `Bearer ${hairConnectToken}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }}).then((res)=>{
        if(!res.data.status){
            localStorage.removeItem('hairConnectToken');
            navigate('/users/signin');
        }else{
            console.log(res);
            setuserDetails(res.data.userDetails);
        }
      })

  return (
    <div>
        <div>
            <div className="row">
                <div className="col-3">
                    <UserSideBar />
                </div>

                <div className="col-9">
                    <h4>Welcome, {userDetails.firstName}</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserDashboard