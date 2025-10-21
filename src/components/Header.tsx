import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleServicesClick = () => {
    if (location.pathname === '/') {
      scrollToSection('services');
    } else {
      navigate('/services');
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="/header-logo.jpg"
              alt="AimTech Solution Logo"
              className="h-8 w-8 object-contain"
            />
            <h1 className="text-[24px] font-[600] text-black">
              <span className="text-[#007BFF]"> Web </span>& Cloud Solution
            </h1>
          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              onClick={() => scrollToSection('home')}
              className="text-[15px] text-gray-700 relative after:block after:h-[2px] after:w-0 after:bg-[#007BFF] after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </Link>
            <button
              onClick={handleServicesClick}
              className="text-[15px] text-gray-700 relative after:block after:h-[2px] after:w-0 after:bg-[#007BFF] after:transition-all after:duration-300 hover:after:w-full"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-[15px] text-gray-700 relative after:block after:h-[2px] after:w-0 after:bg-[#007BFF] after:transition-all after:duration-300 hover:after:w-full"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-[15px] text-gray-700 relative after:block after:h-[2px] after:w-0 after:bg-[#007BFF] after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[15px] text-gray-700 relative after:block after:h-[2px] after:w-0 after:bg-[#007BFF] after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </button>
          </nav>


          {/* CTA Button */}
          <div className="hidden md:block">
            {/* <Button
              onClick={() => scrollToSection('contact')}
              className="bg-[#007BFF] hover:bg-[#0056b3] text-white px-6 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Get a Quote
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#007BFF] transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => {
                  scrollToSection('home');
                }}
                className="text-[15px] text-gray-700 hover:text-[#007BFF] transition-colors text-left"
              >
                Home
              </Link>
              <button
                onClick={handleServicesClick}
                className="text-[15px] text-gray-700 hover:text-[#007BFF] transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-[15px] text-gray-700 hover:text-[#007BFF] transition-colors text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-[15px] text-gray-700 hover:text-[#007BFF] transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-[15px] text-gray-700 hover:text-[#007BFF] transition-colors text-left"
              >
                Contact
              </button>
              {/* <Button
                onClick={() => scrollToSection('contact')}
                className="bg-[#007BFF] hover:bg-[#0056b3] text-white px-6 py-2 rounded-lg w-full"
              >
                Get a Quote
              </Button> */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}