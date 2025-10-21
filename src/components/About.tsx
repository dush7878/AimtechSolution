import { Card } from './ui/card';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const skills = [
  'React & Next.js',
  'Node.js & Express',
  'TypeScript',
  'Tailwind CSS',
  'MongoDB & PostgreSQL',
  'AWS & Cloud Services',
  'RESTful APIs',
  'SEO & Performance',
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[36px] sm:text-[44px] font-[700] text-black mb-4">
            About <span className="text-[#007BFF]">AimTech</span>
          </h2>
          <p className="text-[16px] sm:text-[18px] text-gray-600 max-w-2xl mx-auto">
            Your trusted partner in web development and digital transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden rounded-2xl border-0">
              <ImageWithFallback
                src="/hero-section.png"
                alt="Professional Developer"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </Card>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 p-6"
          >
            <h3 className="text-[28px] sm:text-[32px] font-[700] text-black">
              Empowering Businesses Through Technology
            </h3>
            <p className="text-[16px] text-gray-600 leading-relaxed">
              At AimTech Solution, we specialize in creating high-performance web applications
              that drive results. With over 5 years of experience in full-stack development, we
              bring expertise in modern technologies and best practices to every project.
            </p>
            <p className="text-[16px] text-gray-600 leading-relaxed">
              Our mission is to deliver scalable, secure, and SEO-optimized solutions that help
              businesses grow in the digital landscape. We work closely with clients to understand
              their unique needs and craft custom solutions that exceed expectations.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-[#007BFF] flex-shrink-0" />
                  <span className="text-[15px] text-gray-700">{skill}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
           
          </motion.div>
        </div>
      </div>
    </section>
  );
}
