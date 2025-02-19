import React from 'react';
import { Trophy, Star, Award, Target } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Academic Excellence",
      description: "Consistently ranked among top 5 schools in the region",
      color: "text-[#FFC107]"
    },
    {
      icon: Star,
      title: "Sports Champions",
      description: "Winner of Inter-School Sports Championship 2023",
      color: "text-[#28A745]"
    },
    {
      icon: Award,
      title: "Cultural Awards",
      description: "National Level Cultural Competition Winners",
      color: "text-[#6F42C1]"
    },
    {
      icon: Target,
      title: "Innovation Hub",
      description: "Best School Innovation Lab Award 2023",
      color: "text-[#470A68]"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#470A68] mb-12">Our Achievements</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <achievement.icon className={`w-12 h-12 ${achievement.color} mx-auto`} />
              </div>
              <h3 className="text-xl font-bold text-[#470A68] mb-2">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;