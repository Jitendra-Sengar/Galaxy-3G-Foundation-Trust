import React from 'react';
import { Users, Award, BookOpen, Trophy } from 'lucide-react';

const Counter = () => {
  const stats = [
    { icon: Users, count: '500+', label: 'Students', color: 'text-[#FFC107]' },
    { icon: Award, count: '25+', label: 'Expert Teachers', color: 'text-[#28A745]' },
    { icon: BookOpen, count: '50+', label: 'Courses', color: 'text-[#6F42C1]' },
    { icon: Trophy, count: '95%', label: 'Success Rate', color: 'text-[#FFC107]' },
  ];

  return (
    <div className="relative py-20">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-[#470A68] bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((Stat, index) => (
            <div key={index} className="text-center">
              <Stat.icon className={`w-12 h-12 ${Stat.color} mx-auto mb-4`} />
              <div className="text-3xl font-bold text-white mb-2">{Stat.count}</div>
              <div className="text-gray-300">{Stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counter;