import React from 'react';
import { Calendar, Award, Users, BookOpen } from 'lucide-react';

const Journey = () => {
  const milestones = [
    {
      year: '2017',
      title: 'Foundation',
      description: 'Galaxy 3G Foundation Trust was established with a vision of excellence.',
      icon: Calendar,
    },
    {
      year: '2018',
      title: 'First Batch Graduates',
      description: 'Successfully graduated our first batch with 100% success rate.',
      icon: Award,
    },
    {
      year: '2020',
      title: 'Campus Expansion',
      description: 'Added new facilities including science labs and sports complex.',
      icon: BookOpen,
    },
    {
      year: '2023',
      title: 'Recognition',
      description: 'Recognized as one of the top educational institutions in the region.',
      icon: Users,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#470A68] mb-12">Our Journey</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-[#470A68] rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center relative z-10">
                <milestone.icon className="w-12 h-12 text-[#FFC107] mx-auto mb-4" />
                <div className="text-2xl font-bold text-[#470A68] mb-2">{milestone.year}</div>
                <h3 className="text-xl font-semibold text-[#6F42C1] mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;