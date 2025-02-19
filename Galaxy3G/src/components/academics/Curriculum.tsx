import React from 'react';
import { BookOpen, Users, Award } from 'lucide-react';

const Curriculum = () => {
  const programs = [
    {
      level: 'School Education',
      grades: 'Nursery to Grade 8',
      description: 'Providing foundational education with a focus on academics, extracurricular activities, and holistic development.',
      features: ['Interactive Learning', 'Activity-Based Teaching', 'Personality Development'],
      icon: BookOpen,
    },
    {
      level: 'Coaching for High School',
      grades: 'Grade 9 to 10',
      description: 'Comprehensive coaching for high school students with emphasis on board exam preparation and practical learning.',
      features: ['Board Exam Preparation', 'Regular Assessments', 'Analytical Thinking Skills'],
      icon: Users,
    },
    {
      level: 'Coaching for Higher Secondary',
      grades: 'Grade 11 to 12',
      description: 'Focused coaching with specialized streams for competitive exam preparation and advanced knowledge.',
      features: ['Stream Specialization', 'Competitive Exam Coaching', 'Advanced Labs'],
      icon: Award,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#470A68] mb-12">Our Curriculum</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <program.icon className="w-12 h-12 text-[#6F42C1] mb-4" />
              <h3 className="text-xl font-bold text-[#470A68] mb-2">{program.level}</h3>
              <p className="text-[#FFC107] font-semibold mb-3">{program.grades}</p>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <ul className="space-y-2">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-[#28A745] rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
