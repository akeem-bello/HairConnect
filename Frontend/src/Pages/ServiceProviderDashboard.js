import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ServiceProviderDashboard = () => {
  const navigate = useNavigate();
  const url = 'http://localhost:2023/users/service-provider/dashboard';
  const hairConnectToken2 = localStorage.hairConnectToken2;
  const [companyDetails, setCompanyDetails] = useState(null);

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
                Welcome, {companyDetails.companyName} {companyDetails._id}
              </h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderDashboard;
