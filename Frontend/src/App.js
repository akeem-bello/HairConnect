import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import UserSignUp from './Pages/UserSignUp';
import ServiceProviderSignUp from './Pages/ServiceProviderSignUp';
import UserSignIn from './Pages/UserSignIn';
import ServiceProviderSignIn from './Pages/ServiceProviderSignIn';

const App = ()=>{
  const hairConnectToken = localStorage.hairConnectToken;
  const hairConnectToken2 = localStorage.hairConnectToken2;
  return (
    <>
        <NavBar />
        
        <Routes>
          <Route path='/users/signup' element={<UserSignUp />} />
          <Route path='/service-provider/signup' element={<ServiceProviderSignUp />} />
          <Route path='/users/signin' element={<UserSignIn />} />
          <Route path='/service-provider/signin' element={<ServiceProviderSignIn />} />
        </Routes>
        <Footer />
    </>
  )
}

export default App