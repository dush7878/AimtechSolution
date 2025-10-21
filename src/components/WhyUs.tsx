import { motion } from 'motion/react';
import { Zap, Award, Clock, Headphones } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Quick turnaround without compromising quality',
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Clean code and modern best practices',
    gradient: 'from-purple-400 to-pink-500',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Always here when you need us',
    gradient: 'from-green-400 to-emerald-500',
  },
  {
    icon: Headphones,
    title: 'Client Focused',
    description: 'Your success is our priority',
    gradient: 'from-blue-400 to-cyan-500',
  },
];

export function WhyUs() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, #007BFF 1px, transparent 1px),
              radial-gradient(circle at 80% 80%, #007BFF 1px, transparent 1px),
              radial-gradient(circle at 40% 20%, #007BFF 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Floating Circles */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-20 left-[10%] w-96 h-96 bg-[#007BFF] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 1,
          }}
          className="absolute bottom-20 right-[10%] w-80 h-80 bg-blue-400 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-[#007BFF]/10 text-[#007BFF] rounded-full text-[14px] font-[600] uppercase tracking-wide">
              Why Choose Us
            </span>
          </motion.div>
          <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-[700] text-gray-900 mb-4">
            What Makes{' '}
            <span className="bg-gradient-to-r from-[#007BFF] to-blue-600 bg-clip-text text-transparent">
              AimTech
            </span>{' '}
            Different?
          </h2>
          <p className="text-[16px] sm:text-[18px] text-gray-600 max-w-2xl mx-auto">
            We combine expertise with dedication to deliver exceptional results that drive your success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100 
                }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                  
                  {/* Icon with gradient background */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="text-white" size={28} strokeWidth={2} />
                  </motion.div>
                  
                  <h3 className="text-[20px] sm:text-[22px] font-[700] text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-br ${feature.gradient} rounded-full`} />
                    <div className={`absolute top-4 right-8 w-1.5 h-1.5 bg-gradient-to-br ${feature.gradient} rounded-full`} />
                    <div className={`absolute top-8 right-4 w-1.5 h-1.5 bg-gradient-to-br ${feature.gradient} rounded-full`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        
      </div>
    </section>
  );
}