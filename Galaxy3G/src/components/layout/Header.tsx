import React, { useState, useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";
import { AuthContext } from "../../context/AuthContext"; // Import AuthContext

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const authContext = useContext(AuthContext);

  // Ensure AuthContext is available
  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { auth, logout } = authContext;

  console.log("Auth State in Header:", auth); // Debugging

  const closeNavbar = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Gallery", href: "/gallery" },
    { title: "Academics", href: "/academics" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Galaxy 3G Logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold text-[#470A68]">Galaxy 3G Foundation Trust</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className={`text-[#470A68] transition-colors duration-300 ${
                  location.pathname === link.href ? "font-semibold" : ""
                }`}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Login/Logout Button */}
          <div className="hidden md:flex">
            {auth.token ? ( // ✅ Only render Logout button when token exists
              <button 
                onClick={() => {
                  logout();
                  closeNavbar();
                }}
                className="text-[#470A68] transition-colors duration-300"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className='text-[#470A68] transition-colors duration-300'
                onClick={closeNavbar}
              >
                Admin-Login
              </NavLink>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#470A68]"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className={`block py-2 text-[#470A68] hover:text-[#6F42C1] transition-colors duration-300 ${
                  location.pathname === link.href ? "font-semibold" : ""
                }`}
                onClick={closeNavbar}
              >
                {link.title}
              </Link>
            ))}

            {/* Mobile Login/Logout */}
            <div className="py-2">
              {auth.token ? (
                <button
                  onClick={() => {
                    logout();
                    closeNavbar();
                  }}
                  className="text-[#470A68] transition-colors duration-300"
                >
                  Logout
                </button>
              ) : (
                <NavLink
                  to="/login"
                  className="text-[#470A68] transition-colors duration-300"
                  onClick={closeNavbar}
                >
                  Admin-Login
                </NavLink>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
