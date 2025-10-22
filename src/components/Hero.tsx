import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect } from 'react';

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration });
    return controls.stop;
  }, [count, to, duration]);

  return <motion.span>{rounded}</motion.span>;
}

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20"
    >
      {/* Minimalistic Animated Background */}
      <div className="absolute inset-0 z-0 bg-white">
        {/* Subtle Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/30" />
        
        {/* Animated Floating Circles */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-[10%] w-64 h-64 bg-[#007BFF]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-[15%] w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-[40%] right-[20%] w-72 h-72 bg-[#007BFF]/8 rounded-full blur-3xl"
        />

        {/* Animated Grid Pattern */}
        <motion.div
          animate={{
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #007BFF 1px, transparent 1px),
              linear-gradient(to bottom, #007BFF 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[30px] sm:text-[56px] lg:text-[68px] font-[700] text-black mb-2 leading-tight">
              AimTech Solution:{' '}
              <span className="bg-gradient-to-r from-[#007BFF] to-blue-600 bg-clip-text text-transparent">
                Build Fast. Deploy Smart. Grow
              </span>{' '}
              with Us.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[10px] sm:text-[20px] text-gray-600 mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed"
          >
            Expert in full-stack web development, cloud deployment, and SEO-optimized solutions.
          </motion.p>

          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4"
          >
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-[#007BFF] hover:bg-[#0056b3] text-white px-8 py-6 rounded-lg text-[16px] shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              onClick={() => scrollToSection('projects')}
              variant="outline"
              className="border-2 border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white px-8 py-6 rounded-lg text-[16px] transition-all duration-300 group"
            >
              <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              View Projects
            </Button>
          </motion.div> */}

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-8"
          >
            <div className="text-center lg:text-left border-1 border-blue-600 rounded-lg shadow-sm">
              <div className="text-[36px]  sm:text-[42px] font-[700] bg-gradient-to-r from-[#007BFF] to-blue-600 bg-clip-text text-transparent mb-2">
                <Counter from={0} to={10} duration={2.5} />+
              </div>
              <div className="text-[14px] sm:text-[15px] text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center lg:text-left border-1 border-blue-600 rounded-lg shadow-sm">
              <div className="text-[36px] sm:text-[42px] font-[700] bg-gradient-to-r from-[#007BFF] to-blue-600 bg-clip-text text-transparent mb-2">
                <Counter from={0} to={24} duration={2.5} />/7
              </div>
              <div className="text-[14px] sm:text-[15px] text-gray-600">Support Available</div>
            </div>
            <div className="text-center lg:text-left border-1 border-blue-600 rounded-lg shadow-sm">
              <div className="text-[36px] sm:text-[42px] font-[700] bg-gradient-to-r from-[#007BFF] to-blue-600 bg-clip-text text-transparent mb-2">
                <Counter from={0} to={2} duration={2.5} />+
              </div>
              <div className="text-[14px] sm:text-[15px] text-gray-600">Years Experience</div>
            </div>
          </motion.div>
            </div>

            {/* Right Side - SVG Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="order-1 lg:order-2"
            >
              <svg viewBox="0 0 500 500" className="w-full h-auto max-w-md mx-auto lg:max-w-full">
                {/* Laptop Screen */}
                <motion.rect
                  x="100" y="150" width="300" height="180" rx="8"
                  fill="#1e293b"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                />
                
                {/* Screen Glow */}
                <motion.rect
                  x="110" y="160" width="280" height="160" rx="4"
                  fill="url(#screenGradient)"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Code Lines */}
                <motion.line
                  x1="130" y1="180" x2="220" y2="180"
                  stroke="#007BFF" strokeWidth="3" strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
                <motion.line
                  x1="130" y1="200" x2="280" y2="200"
                  stroke="#60a5fa" strokeWidth="3" strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
                <motion.line
                  x1="130" y1="220" x2="250" y2="220"
                  stroke="#93c5fd" strokeWidth="3" strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                />
                <motion.line
                  x1="130" y1="240" x2="300" y2="240"
                  stroke="#007BFF" strokeWidth="3" strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1.4 }}
                />
                <motion.line
                  x1="130" y1="260" x2="200" y2="260"
                  stroke="#60a5fa" strokeWidth="3" strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1.6 }}
                />
                
                {/* Laptop Base */}
                <motion.path
                  d="M 80 330 L 100 330 L 100 332 L 400 332 L 400 330 L 420 330 L 440 345 L 60 345 Z"
                  fill="#334155"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                />
                
                {/* Floating Elements - Cloud */}
                <motion.g
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <ellipse cx="80" cy="100" rx="25" ry="18" fill="#007BFF" opacity="0.2"/>
                  <ellipse cx="95" cy="95" rx="30" ry="22" fill="#007BFF" opacity="0.2"/>
                  <ellipse cx="115" cy="100" rx="25" ry="18" fill="#007BFF" opacity="0.2"/>
                </motion.g>
                
                {/* Floating Elements - Gear */}
                <motion.g
                  animate={{ rotate: 360, y: [0, 10, 0] }}
                  transition={{ rotate: { duration: 8, repeat: Infinity, ease: "linear" }, y: { duration: 3, repeat: Infinity } }}
                  style={{ originX: '420px', originY: '120px' }}
                >
                  <circle cx="420" cy="120" r="20" fill="none" stroke="#007BFF" strokeWidth="3" opacity="0.3"/>
                  <circle cx="420" cy="120" r="12" fill="#007BFF" opacity="0.2"/>
                  <rect x="415" y="100" width="10" height="8" fill="#007BFF" opacity="0.3"/>
                  <rect x="415" y="132" width="10" height="8" fill="#007BFF" opacity="0.3"/>
                  <rect x="402" y="115" width="8" height="10" fill="#007BFF" opacity="0.3"/>
                  <rect x="430" y="115" width="8" height="10" fill="#007BFF" opacity="0.3"/>
                </motion.g>
                
                {/* Floating Elements - Rocket */}
                <motion.g
                  animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <path d="M 70 380 L 80 350 L 90 380 Z" fill="#007BFF" opacity="0.3"/>
                  <circle cx="80" cy="365" r="8" fill="#60a5fa" opacity="0.4"/>
                  <motion.path
                    d="M 75 380 Q 70 390 75 395"
                    stroke="#f59e0b" strokeWidth="2" fill="none" opacity="0.6"
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  />
                  <motion.path
                    d="M 85 380 Q 90 390 85 395"
                    stroke="#f59e0b" strokeWidth="2" fill="none" opacity="0.6"
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
                  />
                </motion.g>
                
                {/* Gradient Definitions */}
                <defs>
                  <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#007BFF" stopOpacity="0.2"/>
                    <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.2"/>
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[#007BFF] rounded-full"
          />
        </div>
      </motion.div> */}
    </section>
  );
}