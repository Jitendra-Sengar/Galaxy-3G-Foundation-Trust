import React from 'react';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  return (
    <div>
      <section className="relative pt-32 pb-20">
        {/* Background with Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-[#470A68] bg-opacity-80"></div>
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're here to help. Get in touch with us for any queries.
          </p>
        </div>
      </section>
      
      <ContactForm />
      
      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28772.046890987216!2d85.97799884274256!3d26.511725689193007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec56ae3b10131d%3A0xa1cd6e3c4b1132a3!2sBenipatti%2C%20Bihar%20847229!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Galaxy 3G Foundation Trust Location"
      ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;