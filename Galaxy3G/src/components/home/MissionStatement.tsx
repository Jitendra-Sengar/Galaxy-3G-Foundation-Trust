import React from 'react';
import { Target, Book, Users } from 'lucide-react';

const MissionStatement = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#470A68]">
              Our Mission & Values
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Galaxy 3G Foundation Trust, we believe in nurturing young minds through a perfect blend of academic excellence and character development. Our mission is to create future leaders who are not just academically proficient but also socially responsible global citizens.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Target className="w-6 h-6 text-[#28A745] flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#470A68]">Excellence in Education</h3>
                  <p className="text-gray-600">Providing world-class education with modern teaching methodologies</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Book className="w-6 h-6 text-[#28A745] flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#470A68]">Holistic Development</h3>
                  <p className="text-gray-600">Focus on academic, physical, and emotional growth</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="w-6 h-6 text-[#28A745] flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#470A68]">Community Building</h3>
                  <p className="text-gray-600">Creating a supportive environment for learning and growth</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Students learning"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#FFC107] p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-[#470A68] font-bold text-xl">15+ Years</p>
              <p className="text-[#470A68]">of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;