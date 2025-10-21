import { Mail, Linkedin, Github, Briefcase } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-[24px] font-[600] mb-4">
              <span className="text-[#007BFF]">Aim</span>Tech Solution
            </h3>
            <p className="text-[14px] text-gray-400 mb-4 max-w-md">
              Expert in full-stack web development, cloud deployment, and SEO-optimized solutions.
              Building the future, one project at a time.
            </p>
            {/* <div className="flex gap-4">
              <a
                href="mailto:contact@aimtech.com"
                className="w-10 h-10 bg-gray-800 hover:bg-[#007BFF] rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[#007BFF] rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[#007BFF] rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Github size={18} />
              </a>
              <a
                href="https://upwork.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[#007BFF] rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Briefcase size={18} />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[16px] font-[600] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-[14px] text-gray-400 hover:text-[#007BFF] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-[14px] text-gray-400 hover:text-[#007BFF] transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-[14px] text-gray-400 hover:text-[#007BFF] transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-[14px] text-gray-400 hover:text-[#007BFF] transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-[14px] text-gray-400 hover:text-[#007BFF] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[16px] font-[600] mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-[14px] text-gray-400">Frontend Development</li>
              <li className="text-[14px] text-gray-400">Backend & APIs</li>
              <li className="text-[14px] text-gray-400">Cloud Deployment</li>
              <li className="text-[14px] text-gray-400">SEO Optimization</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-[14px] text-gray-400">
            Copyright © 2025 AimTech Solution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
