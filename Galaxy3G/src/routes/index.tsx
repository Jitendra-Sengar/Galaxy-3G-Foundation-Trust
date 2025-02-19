import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Academics from '../pages/Academics';
// import Admissions from '../pages/Admissions';
import Gallerypage from '../pages/Gallerypage';
// import Events from '../pages/Events';
import Contact from '../pages/Contact';
import Login from '../components/auth/Login';


import UploadImage from '../components/auth/UploadImage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="academics" element={<Academics />} />
          {/* <Route path="admissions" element={<Admissions />} /> */}
          <Route path="gallery" element={<Gallerypage />} />
          {/* <Route path="events" element={<Events />} /> */}
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          
          <Route path="uploadimage" element={<UploadImage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;