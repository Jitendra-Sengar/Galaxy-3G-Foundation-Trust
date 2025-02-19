import React from 'react';
import Journey from '../components/about/Journey';
import Vision from '../components/about/Vision';

const About = () => {
  return (
    <div>
      <section className="relative pt-32 pb-20">
        {/* Background with Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-[#470A68] bg-opacity-80"></div>
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Galaxy 3G</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering minds and shaping futures through excellence in education since 2017.
          </p>
        </div>
      </section>
      
      <Vision />
      <Journey />
    </div>
  );
};

export default About;