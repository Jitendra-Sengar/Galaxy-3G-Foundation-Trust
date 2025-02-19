import React from 'react';
import AdmissionSteps from '../components/admissions/AdmissionSteps';
import AdmissionForm from '../components/admissions/AdmissionForm';

const Admissions = () => {
  return (
    <div>
      <section className="relative pt-32 pb-20">
        {/* Background with Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-[#470A68] bg-opacity-80"></div>
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Admissions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join our community of learners and begin your journey towards excellence.
          </p>
        </div>
      </section>
      
      <AdmissionSteps />
      <AdmissionForm />
    </div>
  );
};

export default Admissions;