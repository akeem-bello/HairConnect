import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceProviderDashboard = () => {
  const navigate = useNavigate();
  const url = 'http://localhost:2023/users/service-provider/dashboard';
  const {serviceProviderId} = useParams()
  const url2 = `http://localhost:2023/users/service-provider/add-services/${serviceProviderId}`;
  const hairConnectToken2 = localStorage.hairConnectToken2;
  const [companyDetails, setCompanyDetails] = useState(null);
  const [service, setservice] = useState('');
  const [duration, setduration] = useState('');
  const [price, setprice] = useState('');
  console.log(serviceProviderId)

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

  const signOut = () => {
    localStorage.removeItem('hairConnectToken2');
    navigate('/service-provider/signin');
  };

  const addServices = ()=>{
    const serviceDetails = {
      service,
      duration,
      price
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
          <div className="col-3">
            <div>
              <a href="">Services</a>
            </div>
            <div>
              <a href="">Appointments</a>
            </div>
            <div>
              <a href="">Wallet</a>
            </div>
            <div>
              <a onClick={signOut} href="">
                <i className="fa-solid fa-arrow-right-from-bracket"></i> Sign Out
              </a>
            </div>
          </div>

          <div className="col-9">
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
