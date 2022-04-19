import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './assignment/About/About';
import CheckOut from './assignment/CheckOut/CheckOut';
import Footer from './assignment/Footer/Footer';
import Header from './assignment/Header/Header';
import ServiceDetail from './assignment/Header/ServiceDetail/ServiceDetail';
import Home from './assignment/Home/Home';
import Login from './assignment/Login/Login';
import NotFound from './assignment/NotFound/NotFound';
import Register from './assignment/Register/Register';
import RequireAuth from './assignment/RequireAuth/RequireAuth';
import Services from './assignment/Services/Services';



const App = () => {
  return (
    <div className='main-section'>
     <Header></Header>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/home" element={<Home></Home>}></Route>
       <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
       <Route path="/about" element={<About></About>}></Route>
       
       <Route path="/checkout" element={
         <RequireAuth>
           <CheckOut></CheckOut>
         </RequireAuth>
       }></Route>

       <Route path="/login" element={<Login></Login>}></Route>
       <Route path="/register" element={<Register></Register>}></Route>
       <Route path="/services" element={<Services></Services>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
};

export default App;
