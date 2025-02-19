import React from 'react';
import Curriculum from '../components/academics/Curriculum';

const Academics = () => {
  return (
    <div>
      <section className="relative pt-32 pb-20">
        {/* Background with Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-[#470A68] bg-opacity-80"></div>
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Excellence</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive education programs designed to nurture future leaders.
          </p>
        </div>
      </section>
      
      <Curriculum />
    </div>
  );
};

export default Academics;