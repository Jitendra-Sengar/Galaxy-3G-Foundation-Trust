import React from 'react';
import { Target, Compass, Heart } from 'lucide-react';

const Vision = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <Target className="w-16 h-16 text-[#470A68] mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-[#470A68] mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be a leading educational institution that nurtures future leaders and innovators through holistic development and academic excellence.
            </p>
          </div>
          <div className="text-center">
            <Compass className="w-16 h-16 text-[#6F42C1] mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-[#470A68] mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide quality education that empowers students with knowledge, skills, and values necessary for success in the global community.
            </p>
          </div>
          <div className="text-center">
            <Heart className="w-16 h-16 text-[#FFC107] mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-[#470A68] mb-4">Our Values</h3>
            <p className="text-gray-600">
              Excellence, integrity, innovation, and compassion form the cornerstone of our educational philosophy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;