import { Card } from './ui/card';
import { Code2, Server, Cloud, TrendingUp, Database, Shield, Zap, Globe, ShoppingCart, FileText, Smartphone, Palette } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const allServices = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'React, Next.js, Vue.js, Tailwind CSS, HTML/CSS/JS - Creating stunning, responsive user interfaces with modern frameworks',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    description: 'Node.js, Express, NestJS, REST APIs, GraphQL - Building robust server-side solutions and seamless integrations',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
  },
  {
    icon: Cloud,
    title: 'Cloud & Deployment',
    description: 'AWS, Azure, Vercel, Netlify, Docker, Kubernetes - Scalable cloud infrastructure and automated CI/CD pipelines',
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-50 to-red-50',
  },
  {
    icon: TrendingUp,
    title: 'SEO & Performance',
    description: 'SEO optimization, Core Web Vitals, Google Analytics, speed tuning - Boost visibility and enhance user experience',
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-50 to-emerald-50',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'MongoDB, PostgreSQL, MySQL, Redis - Efficient database architecture and data management solutions',
    gradient: 'from-indigo-500 to-purple-500',
    bgGradient: 'from-indigo-50 to-purple-50',
  },
  {
    icon: Shield,
    title: 'Security & Authentication',
    description: 'JWT, OAuth, encryption, SSL/TLS - Implementing secure authentication systems and data protection',
    gradient: 'from-red-500 to-orange-500',
    bgGradient: 'from-red-50 to-orange-50',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Code splitting, lazy loading, caching strategies - Making your applications lightning fast',
    gradient: 'from-yellow-500 to-orange-500',
    bgGradient: 'from-yellow-50 to-orange-50',
  },
  {
    icon: Globe,
    title: 'Domain & Hosting',
    description: 'Domain setup, DNS configuration, hosting management - Complete web presence setup and maintenance',
    gradient: 'from-teal-500 to-green-500',
    bgGradient: 'from-teal-50 to-green-50',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'React Native, Progressive Web Apps - Cross-platform mobile applications with native experience',
    gradient: 'from-pink-500 to-rose-500',
    bgGradient: 'from-pink-50 to-rose-50',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Figma, Adobe XD, user research - Creating intuitive and visually appealing user experiences',
    gradient: 'from-violet-500 to-purple-500',
    bgGradient: 'from-violet-50 to-purple-50',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'Shopify, WooCommerce, Stripe, PayPal - Complete online store setup with payment integrations',
    gradient: 'from-blue-600 to-indigo-600',
    bgGradient: 'from-blue-50 to-indigo-50',
  },
  {
    icon: FileText,
    title: 'CMS Development',
    description: 'WordPress, Contentful, Strapi - Custom content management systems tailored to your needs',
    gradient: 'from-gray-600 to-gray-800',
    bgGradient: 'from-gray-50 to-gray-100',
  },
];

export function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>AimTech Solution Services | Full-Stack Web Development & SEO Optimization</title>
        <meta name="description" content="AimTech Solution offers comprehensive services: Frontend Development, Backend & APIs, Cloud & Deployment, SEO & Performance, Database Design, Security, and more. Expert web development solutions." />
        <meta name="keywords" content="AimTech Solution services, web development services, full-stack development, cloud deployment, SEO optimization, database design, security, mobile development, UI/UX design, e-commerce, CMS development" />
        <meta name="author" content="AimTech Solution" />
        <meta property="og:title" content="AimTech Solution Services | Full-Stack Web Development & SEO Optimization" />
        <meta property="og:description" content="AimTech Solution offers comprehensive services: Frontend Development, Backend & APIs, Cloud & Deployment, SEO & Performance, Database Design, Security, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aimtechsolution.vercel.app/" />
        <meta property="og:image" content="/hero-section.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AimTech Solution Services | Full-Stack Web Development & SEO Optimization" />
        <meta name="twitter:description" content="AimTech Solution offers comprehensive services: Frontend Development, Backend & APIs, Cloud & Deployment, SEO & Performance, Database Design, Security, and more." />
        <meta name="twitter:image" content="/hero-section.png" />
      </Helmet>
      <div className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-[#007BFF] to-blue-600 text-white px-4 py-2 rounded-full text-[14px]">
                Complete Solutions
              </span>
            </div>
            <h1 className="text-[40px] sm:text-[52px] font-[700] text-black mb-6">
              All Our <span className="bg-gradient-to-r from-[#007BFF] to-blue-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-[18px] text-gray-600 mb-8">
              From ideation to deployment, we provide end-to-end web development services to bring your vision to life
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#007BFF] to-blue-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <span>Get a Free Quote</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {allServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="h-full"
                >
                  <Card className="relative p-4 sm:p-6 lg:p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-0 group hover:-translate-y-3 h-full overflow-hidden">
                    {/* Gradient background that appears on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Animated icon container */}
                      <div className="relative mb-4 sm:mb-6">
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
                          className={`absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-20 blur-xl`}
                        />
                        
                        {/* Icon container */}
                        <div className={`relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                          <Icon size={24} className="text-white sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                        </div>
                      </div>
                      
                      <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-[600] text-black mb-2 sm:mb-3 group-hover:text-[#007BFF] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-[13px] sm:text-[14px] lg:text-[15px] text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-20 p-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl"
          >
            <h2 className="text-[28px] sm:text-[36px] font-[700] text-black mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-[16px] sm:text-[18px] text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you build your dream website or application
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#007BFF] to-blue-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span>Contact Us</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 border-2 border-[#007BFF] text-[#007BFF] px-8 py-3 rounded-full hover:bg-[#007BFF] hover:text-white transition-all duration-300"
              >
                <span>Back to Home</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
}
