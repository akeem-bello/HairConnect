import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SideBar from '../Components/SideBar';

const ServiceProviderDashboard = () => {
  const navigate = useNavigate();
  const url = 'http://localhost:2023/users/service-provider/dashboard';
  const url2 = 'http://localhost:2023/users/service-provider/add-services';
  const hairConnectToken2 = localStorage.hairConnectToken2;
  const [companyDetails, setCompanyDetails] = useState(null);
  const [service, setservice] = useState('');
  const [duration, setduration] = useState('');
  const [price, setprice] = useState('');

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${hairConnectToken2}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        if (!res.data.status) {
          localStorage.removeItem('hairConnectToken2');
          navigate('/service-provider/signin');
        } else {
          setCompanyDetails(res.data.serviceProviderDetails);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [navigate, hairConnectToken2]);

  const addServices = ()=>{
    const serviceDetails = {
      service,
      duration,
      price,
      serviceProviderId: companyDetails._id
    };
    axios.post(url2, serviceDetails).then((res)=>{
      if(res.data.status){
        alert('Service was added successfully.');
        setservice('');
        setduration('');
        setprice('');
      }else{
        alert('An error occured, please try again.')
      }
    })
  }

  return (
    <div>
      <div>
        <div className="row">
          <div className="col-2">
          <SideBar />
          </div>

          <div className="col-10">
            {companyDetails && (
              <h4>
                Welcome, {companyDetails.companyName}.
              </h4>
            )}

            <div>
              <form action="">
                <label>
                  Service Name:
                  <input type="text" value={service} onChange={(e)=>setservice(e.target.value)}/>
                </label>

                <label>
                  Duration:
                  <input type="text" value={duration} onChange={(e)=>setduration(e.target.value)}/>
                </label>

                <label>
                  Price:
                  <input type="text" value={price} onChange={(e)=>setprice(e.target.value)}/>
                </label>

                <button type='button' onClick={addServices}>Add Service</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderDashboard;
