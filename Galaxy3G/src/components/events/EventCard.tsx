import React from 'react';
import { Calendar } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
  category: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, description, image, category }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-[#FFC107] text-[#470A68] px-3 py-1 rounded-full text-sm font-semibold">
          {category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-[#6F42C1] mb-2">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="text-sm">{date}</span>
        </div>
        <h3 className="text-xl font-bold text-[#470A68] mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;