import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Login from './Login/Login';
import Register from './Register/Register';
import Footer from './Footer/Footer'
import "../index.css";
import About from './About/About';
import Service from './Service/Service';
import Trainer from './Trainer/Trainer';


const Index = () => {
  return (<>
    <Navbar />

    <div className=' '>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='' element={<About />} />
        <Route path='' element={<Service />} />
        <Route path='' element={<Trainer />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<h1 className=' w-100 vh-100 position-fixed d-flex justify-content-center align-items-center'>
          <div className='fw-bolder text-white'> 404</div>
        </h1>} >
        </Route>
        {/* <Route path='/' element={<Footer />} /> */}

      </Routes>
    </div>
    <Footer/>



  </>
  );
}

export default Index;