import { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, X, ArrowLeft, ArrowRight, Calendar, Users, Target } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function ImageWithFallback({ src, alt, className }) {
  const [error, setError] = useState(false);
  if (error)
    return (
      <div className={`${className} bg-gray-200 flex items-center justify-center`}>
        <span className="text-gray-500 text-sm">Image unavailable</span>
      </div>
    );
  return <img src={src} alt={alt} className={className} onError={() => setError(true)} />;
}

function InfoCard({ icon, title, value, color }) {
  const colors = {
    blue: "from-blue-50 to-cyan-50 border-blue-100 text-blue-700",
    purple: "from-purple-50 to-pink-50 border-purple-100 text-purple-700",
    orange: "from-orange-50 to-yellow-50 border-orange-100 text-orange-700",
  };
  return (
    <div className={`rounded-xl p-4 border bg-gradient-to-br ${colors[color]} flex flex-col`}>
      <div className="flex items-center gap-2 mb-1">
        {icon}
        <span className="text-sm font-semibold">{title}</span>
      </div>
      <span className="text-gray-900 font-bold text-lg">{value}</span>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth;
    scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  const projects = [
    {
      title: 'SKEdutech – Comprehensive Online Education Platform',
      image: '/projects/edutech-banner.png',
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind', 'Razorpay'],
      description: 'Full-featured online education platform with secure payment integration, role-based dashboards, and advanced student-instructor management.',
      category: 'Web Application',
      detailedInfo: {
        duration: '6 months',
        team: '5 developers',
        client: 'Sk Edutech Pvt. Ltd.',
        objectives: [
          'Design a scalable and user-friendly online education platform',
          'Integrate Razorpay for secure and seamless payment processing',
          'Develop intuitive dashboards for admins, instructors, and students',
          'Implement multiple features to enhance learning and teaching experience'
        ],
        achievements: [
          'Successfully launched a multi-role education platform supporting thousands of users',
          'Optimized platform performance for fast course loading and real-time updates',
          'Implemented secure payment workflow with Razorpay integration',
          'Enhanced user experience with responsive design using Tailwind CSS'
        ],
        technologies: [
          'React',
          'Node.js',
          'MongoDB',
          'Tailwind CSS',
          'Razorpay',
          'Render Hosting'
        ],
        liveUrl: 'https://edusphere.example.com',
        githubUrl: 'https://github.com/example/edusphere'
      }
    },
    {
      title: 'PyTutor – AI-Powered Python Learning Platform',
      image: '/projects/pytutor-banner.png',
      tags: ['MERN', 'Tailwind', 'LLM', 'Gemini'],
      description: 'Interactive web app that helps students learn Python through real-time AI-powered chat guidance using Gemini LLM.',
      category: 'Education',
      detailedInfo: {
        duration: '5 months',
        team: '3 developers',
        client: 'EduTech Innovations',
        objectives: [
          'Develop an AI tutor for Python learning using Gemini LLM',
          'Implement secure student authentication and session management',
          'Enable interactive Q&A with real-time coding assistance',
          'Provide progress tracking and personalized learning paths'
        ],
        achievements: [
          'Achieved 98% uptime and scalable chat performance',
          'Integrated Gemini API for natural, context-aware responses',
          'Improved student engagement by 65%',
          'Implemented secure JWT-based authentication and role-based access'
        ],
        technologies: [
          'MongoDB',
          'Express.js',
          'React',
          'Node.js',
          'Tailwind CSS',
          'Gemini API',
          'JWT Authentication'
        ],
        liveUrl: 'https://pytutor.example.com',
        githubUrl: 'https://github.com/example/pytutor'
      }
    },
    {
      title: 'ChatSphere – Real-Time Chat Application',
      image: '/projects/chatsphere-banner.png',
      tags: ['MERN', 'Socket.io', 'Tailwind', 'Render'],
      description: 'Full-stack real-time chat platform built with the MERN stack and Socket.io, featuring instant messaging, notifications, and secure user authentication.',
      category: 'Communication',
      detailedInfo: {
        duration: '3 months',
        team: '3 developers',
        client: 'Internal Project',
        objectives: [
          'Develop a responsive real-time chat application',
          'Implement user authentication and secure sessions',
          'Enable instant messaging with live notifications',
          'Deploy and host application using Render for scalability'
        ],
        achievements: [
          'Implemented seamless real-time updates using Socket.io',
          'Achieved under 100ms message latency',
          'Integrated push notifications and online status tracking',
          'Deployed full-stack app on Render with CI/CD pipeline'
        ],
        technologies: [
          'MongoDB',
          'Express.js',
          'React',
          'Node.js',
          'Socket.io',
          'Tailwind CSS',
          'Render Hosting',
          'JWT Authentication'
        ],
        liveUrl: 'https://chatsphere.example.com',
        githubUrl: 'https://github.com/example/chatsphere'
      }
    },
    {
      title: 'Finance Bus – Financial Transaction Tracker with AI Insights',
      image: '/projects/financebus-banner.png',
      tags: ['MERN', 'Tailwind', 'LLM', 'AI', 'Cloudinary', 'JWT Authentication'],
      description: 'Full-stack web app for tracking financial transactions with secure login, AI-powered advice using LLM API, and transaction export capabilities.',
      category: 'Web Application',
      detailedInfo: {
        duration: '6 months',
        team: '4 developers',
        client: 'FinTech Solutions',
        objectives: [
          'Develop a secure transaction tracking platform for users and businesses',
          'Integrate LLM API for AI-powered financial insights and feedback',
          'Enable users to download transaction history and reports',
          'Implement authentication and role-based access for secure usage'
        ],
        achievements: [
          'Successfully tracked and stored thousands of financial transactions securely',
          'Integrated LLM API to provide actionable AI insights for users',
          'Implemented download functionality for CSV/PDF transaction reports',
          'Built responsive UI with Tailwind CSS for seamless experience across devices'
        ],
        technologies: [
          'MongoDB',
          'Express.js',
          'React',
          'Node.js',
          'Tailwind CSS',
          'Cloudinary',
          'JWT Authentication',
          'LLM API'
        ],
        liveUrl: 'https://fincave.example.com',
        githubUrl: 'https://github.com/example/fincave'
      }
    },
    {
      title: 'KanhaSeva – Donation & Volunteer Management Platform',
      image: '/projects/kanhaseva-banner.png',
      tags: ['MERN', 'Tailwind', 'Cloudinary', 'JWT Authentication'],
      description: 'Comprehensive donation platform for donors and NGOs with secure login, admin dashboard, volunteer registration, and gallery management.',
      category: 'Web Application',
      detailedInfo: {
        duration: '5 months',
        team: '4 developers',
        client: 'Charity & NGO Collaboration',
        objectives: [
          'Develop a secure, full-stack donation platform for NGOs',
          'Implement admin dashboards to manage donors, donations, and volunteers',
          'Enable volunteer registration and event tracking',
          'Create gallery management system with Cloudinary for image uploads'
        ],
        achievements: [
          'Successfully launched platform supporting multiple NGOs and donors',
          'Implemented JWT-based authentication for secure user access',
          'Integrated Cloudinary for efficient image storage and management',
          'Enhanced engagement with volunteer registration and donation tracking'
        ],
        technologies: [
          'MongoDB',
          'Express.js',
          'React',
          'Node.js',
          'Tailwind CSS',
          'Cloudinary',
          'JWT Authentication'
        ],
        liveUrl: 'https://donatehub.example.com',
        githubUrl: 'https://github.com/example/donatehub'
      }
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-50 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm mb-3 inline-block">
            Our Work
          </span>
          <h2 className="text-4xl font-bold text-black mb-3">
            Featured <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Showcasing our latest technical work and client collaborations.</p>
        </motion.div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory md:p-6 md:border-1 md:bg-blue-50 rounded-lg md:shadow-lg"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="min-w-[85%] sm:min-w-[45%] md:min-w-[32%] lg:min-w-[31%] snap-start cursor-pointer "
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedProject(project)}
              >
                <Card className="bg-white ml-9 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 group flex flex-col h-[450px] ">
                  <div className="relative h-48 overflow-hidden rounded-t-2xl">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-white/90 text-blue-600 px-3 py-1 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex flex-col flex-1 p-5">
                    <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 line-clamp-2 min-h-[56px]">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 min-h-[60px]">{project.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <Badge
                          key={i}
                          className="bg-blue-50 text-blue-600 border border-blue-100 text-xs px-3 py-0.5 rounded-full"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge className="bg-gray-100 text-gray-600 text-xs px-3 py-0.5 rounded-full">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    <button className="mt-auto flex items-center gap-2 text-blue-600 font-medium text-sm hover:gap-3 transition-all group/btn">
                      View Details
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() => scroll("left")}
              className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal - Redesigned with 50-50 Split */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl  h-[90vh] md:w-[40%] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Left Side - Image (50%) */}
                <div className=" bg-gray-100 relative h-64 md:h-full">
                  <ImageWithFallback
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 p-3 bg-white rounded-full hover:bg-blue-100 shadow-lg transition-transform hover:scale-110 z-10"
                  >
                    <X size={22} className="text-gray-700" />
                  </button>

                  {/* Info Cards Overlay on Image Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {/* Duration */}
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center">
                        <Calendar size={16} className="mx-auto mb-1 text-blue-600" />
                        <p className="text-[10px] sm:text-xs text-gray-600 mb-0.5">Duration</p>
                        <p className="text-[12px] sm:text-sm font-semibold text-gray-900">{selectedProject.detailedInfo.duration}</p>
                      </div>

                      {/* Team */}
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center">
                        <Users size={16} className="mx-auto mb-1 text-purple-600" />
                        <p className="text-[10px] sm:text-xs text-gray-600 mb-0.5">Team</p>
                        <p className="text-[12px] sm:text-sm font-semibold text-gray-900">{selectedProject.detailedInfo.team}</p>
                      </div>

                      {/* Client */}
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center">
                        <Target size={16} className="mx-auto mb-1 text-orange-600" />
                        <p className="text-[10px] sm:text-xs text-gray-600 mb-0.5">Client</p>
                        <p className="text-[12px] sm:text-sm font-semibold text-gray-900">{selectedProject.detailedInfo.client}</p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Right Side - Scrollable Info (50%) */}
                <div className=" overflow-y-auto p-8 space-y-6">
                  {/* Header */}
                  <div className="space-y-3">
                    <span className="inline-block bg-blue-50 px-4 py-1.5 rounded-full text-blue-600 text-sm font-semibold">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Objectives */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
                      Project Objectives
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.detailedInfo.objectives.map((obj, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      <div className="w-1 h-6 bg-green-600 rounded-full"></div>
                      Key Achievements
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.detailedInfo.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-600 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.detailedInfo.technologies.map((tech, i) => (
                        <Badge key={i} className="bg-blue-50 text-blue-700 border border-blue-200 text-sm px-3 py-1.5 rounded-lg font-medium">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}