import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './assignment/About/About';
import Footer from './assignment/Footer/Footer';
import Header from './assignment/Header/Header';
import Home from './assignment/Home/Home';


const App = () => {
  return (
    <div>
     <h2>assignment</h2>
     <Header></Header>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/about" element={<About></About>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
};

export default App;
