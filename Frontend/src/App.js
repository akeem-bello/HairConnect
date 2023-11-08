import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import UserSignUp from './Pages/UserSignUp';

const App = ()=>{
  
  return (
    <>
        <NavBar />
        
        <Routes>
          <Route path='/users/signup' element={<UserSignUp />} />
        </Routes>
        <Footer />
    </>
  )
}

export default App