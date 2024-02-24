import { BrowserRouter,Route,Routes } from 'react-router-dom';
import React from 'react';

import LoginPage from './pages/login';
import Registration from './pages/registration';

import Home from './pages/home';
function App() {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/register' element={<Registration/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/home' element={<Home/>}/>
      
      
    </Routes>
    </BrowserRouter>
  );
}
export default App;
