import React from 'react';
import Hero from '../components/home/Hero';
import MissionStatement from '../components/home/MissionStatement';
import Counter from '../components/home/Counter';
import QuickLinks from '../components/home/QuickLinks';
import Testimonials from '../components/home/Testimonials';
import Achievements from '../components/home/Achievements';
import AdmissionSteps from '../components/admissions/AdmissionSteps';
import Events from '../pages/Events';
import Gallery from '../components/gallery/gallery';



const Home = () => {
  return (
    <>
      <Hero />
      <MissionStatement />
      <Achievements />
      <Counter />
      <QuickLinks />
      <Gallery />
      <Events/>
      <Testimonials />
      <AdmissionSteps />
    </>
  );
};

export default Home;
