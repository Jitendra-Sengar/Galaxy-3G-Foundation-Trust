import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import logo from '../assets/logo.jpg'; // Replace with your logo's path

const Footer = () => {
  return (
    <footer className="bg-[#470A68] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Galaxy 3G Logo" className="w-10 h-10 object-contain" />
              <span className="text-xl font-bold">Galaxy 3G Foundation Trust</span>
            </div>
            <p className="text-gray-300">Shaping futures through excellence in education since 2017.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/academics" className="text-gray-300 hover:text-white transition-colors">Academics</a></li>
              <li><a href="/admissions" className="text-gray-300 hover:text-white transition-colors">Admissions</a></li>
              <li><a href="/events" className="text-gray-300 hover:text-white transition-colors">Events</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-gray-300">+91 7739778284</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-gray-300">+91 8084407273</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-gray-300">galaxy3gfoundation@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-gray-300">Vill-Champa PO-Parjuar  PS-Arer Block-Benipatti  District-Madhubani  Bihar 847229</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/groups/682866732096621/?ref=share&mibextid=NSMWBT&_rdr" className="hover:text-[#FFC107] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://x.com/galaxy_3g89657?t=DaDxdYuhRUy3zjLbPXnCvw&s=09" className="hover:text-[#FFC107] transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/s.k.thakur.77?igsh=enI4MXBtOWc5YWll" className="hover:text-[#FFC107] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} Enego Services Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
