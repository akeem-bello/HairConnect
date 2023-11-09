import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import UserSignUp from './Pages/UserSignUp';
import ServiceProviderSignUp from './Pages/ServiceProviderSignUp';

const App = ()=>{
  
  return (
    <>
        <NavBar />
        
        <Routes>
          <Route path='/users/signup' element={<UserSignUp />} />
          <Route path='/service-provider/signup' element={<ServiceProviderSignUp />} />
        </Routes>
        <Footer />
    </>
  )
}

export default App