import React from 'react';
import EventCard from '../components/events/EventCard';

const Events = () => {
  const events = [
    {
      title: 'Republic Day Celebration',
      date: 'January 26, 2024',
      description: 'Celebrate the spirit of patriotism with a parade and cultural performances.',
      image: 'https://images.unsplash.com/photo-1600093112291-7b553e3fcb82?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVwdWJsaWMlMjBkYXl8ZW58MHx8MHx8fDA%3D',
      category: 'National'
    },
    {
      title: 'Saraswati Puja',
      date: 'February 14, 2024',
      description: 'Invoke the blessings of Goddess Saraswati with prayers and cultural activities.',
      image: 'https://images.unsplash.com/photo-1708618159907-e164fd1b698a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FyYXN3YXRpJTIwcHVqYXxlbnwwfHwwfHx8MA%3D%3D',
      category: 'Cultural'
    },
    {
      title: 'Annual Sports Day',
      date: 'March 15, 2024',
      description: 'Join us for a day of athletic excellence and sportsmanship.',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      category: 'Sports'
    },
    {
      title: 'Science Exhibition',
      date: 'April 5, 2024',
      description: 'Showcase of innovative projects by our young scientists.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      category: 'Academic'
    },
    {
      title: 'Cultural Festival',
      date: 'May 20, 2024',
      description: 'Celebrating diversity through music, dance, and art.',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      category: 'Cultural'
    },
    {
      title: 'Parent-Teacher Meet',
      date: 'June 10, 2024',
      description: 'Discussion about student progress and development.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      category: 'Meeting'
    },
    {
      title: 'Independence Day Celebration',
      date: 'August 15, 2024',
      description: 'Flag hoisting and cultural programs to honor our freedom fighters.',
      image: 'https://images.unsplash.com/photo-1600093112291-7b553e3fcb82?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVwdWJsaWMlMjBkYXl8ZW58MHx8MHx8fDA%3D',
      category: 'National'
    },
    {
      title: 'Children’s Day Celebration',
      date: 'November 14, 2024',
      description: 'A fun-filled day with activities and performances for our students.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnVIBxDiBNEuc-BRLyh1RHj2o_CcVqc4UYg&s',
      category: 'Cultural'
    }
  ];

  return (
    <div>
      <section className="relative pt-32 pb-20">
        {/* Background with Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-[#470A68] bg-opacity-80"></div>
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Events & Activities</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stay updated with our latest events and activities.
          </p>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
