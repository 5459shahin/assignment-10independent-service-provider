
import './App.css';

import Services from './assignmment/Services/Services';
import Footer from './assignmment/Footer/Footer';
import Header from './assignmment/Home/Header/Header';
import About from './assignmment/About/About'
import { Route, Routes } from 'react-router-dom';
import Home from './assignmment/Home/Home/Home';

function App() {
  return (
    <div className="">

       <Header></Header>
       <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/services' element={<Services></Services>}>
         <Route path='/about' element={<About></About>}></Route> 
         </Route>
       </Routes>
      
      <Footer></Footer>

    </div>
  );
}

export default App;
