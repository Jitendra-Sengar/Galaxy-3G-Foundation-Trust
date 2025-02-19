import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-[#470A68] bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Welcome to Galaxy 3G Foundation Trust
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          Shaping the future since 2017
        </p>
        <button
          className="bg-[#FFC107] hover:bg-[#FFD54F] text-[#470A68] font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center mx-auto"
          onClick={() => navigate('/about')}
        >
          Explore More
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
