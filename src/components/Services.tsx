import { Card } from './ui/card';
import { Code2, Server, Cloud, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'React, Next.js, Tailwind CSS, HTML/CSS/JS - Building modern and responsive user interfaces',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    description: 'Node.js, Express, REST APIs, GraphQL - Robust server-side solutions and integrations',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
  },
  {
    icon: Cloud,
    title: 'Cloud & Deployment',
    description: 'AWS, Vercel, Docker, CI/CD - Scalable hosting and automated deployment pipelines',
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-50 to-red-50',
  },
  {
    icon: TrendingUp,
    title: 'SEO & Performance',
    description: 'SEO optimization, speed tuning, analytics - Boost visibility and user experience',
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-50 to-emerald-50',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-[#007BFF] to-blue-600 text-white px-4 py-2 rounded-full text-[14px]">
              What We Offer
            </span>
          </div>
          <h2 className="text-[36px] sm:text-[44px] font-[700] text-black mb-4">
            Our <span className="bg-gradient-to-r from-[#007BFF] to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-[16px] sm:text-[18px] text-gray-600 max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-0 group hover:-translate-y-3 h-full overflow-hidden">
                  {/* Gradient background that appears on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Animated icon container */}
                    <div className="relative mb-6">
                      {/* Outer animated circle */}
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-20 blur-xl`}
                      />
                      
                      {/* Icon container */}
                      <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                        <Icon size={28} className="text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-[20px] font-[600] text-black mb-3 group-hover:text-[#007BFF] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[15px] text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* View All Services CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">Explore our complete range of services</p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#007BFF] to-blue-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <span>View All Services</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div> */}
      </div>
    </section>
  );
}