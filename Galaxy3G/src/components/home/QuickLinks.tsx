import React from 'react';
import { GraduationCap, BookOpen, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuickLinks = () => {
  const links = [
    {
      title: 'Academics',
      description: 'Explore our comprehensive curriculum from Nursery to Grade 12',
      icon: BookOpen,
      to: '/academics',
      color: 'bg-[#470A68]',
    },
    {
      title: 'About',
      description: 'Learn about our admission process and requirements',
      icon: GraduationCap,
      to: '/about',
      color: 'bg-[#6F42C1]',
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with us for any queries',
      icon: PhoneCall,
      to: '/contact',
      color: 'bg-[#28A745]',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="group bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className={`${link.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                <link.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#470A68] mb-3">{link.title}</h3>
              <p className="text-gray-600 mb-4">{link.description}</p>
              <span className="text-[#6F42C1] font-semibold group-hover:text-[#470A68] transition-colors duration-300">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
