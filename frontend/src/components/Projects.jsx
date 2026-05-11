import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import jobPortal from '../assets/job-portal.png';
import herbiverse from "../assets/herbiverse.png";
import quickStay from "../assets/quickStay.png";
import quickChat from "../assets/quickChat.png";
import cropDetection from "../assets/crop_detection.jpg"

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      title: "TruthLens - AI Hallucination Detection",
      description: "Real-time system to detect and score LLM hallucinations. 1st Place Winner at Josh Software Hackathon 2026.",
      detailedDescription:
        "1st Place Winner at the Josh Software 24-hour Hackathon (2026). TruthLens is a real-time system designed to detect and score LLM hallucinations. It features a robust 5-layer architecture pipeline including Intercept, Decomposition, Verification, Inference, and Risk Attribution, achieving 93%+ verification accuracy across 50+ real-time claims.",
      tech: [
        "GenAI",
        "LLMs",
        "Python",
        "React"
      ],
      domain: "AI / Full-Stack",
      features: [
        "Real-time LLM hallucination detection",
        "5-layer pipeline (Intercept, Decomposition, Verification, Inference, Risk)",
        "93%+ verification accuracy across real-time claims",
        "Award-winning system built in 24 hours"
      ],
      badge: "🥇 1st Place Winner",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500",
      imageFit: "object-cover object-center",
      live: false,
      github: "https://github.com/HimeshLaddha/TruthLens"
    },
    {
      title: "TradeGuard AI - Contract Analysis",
      description: "Automates summarization of legal contracts and identifies hidden charges using LLM-as-a-judge logic.",
      detailedDescription: "TradeGuard AI is a GenAI-powered contract analysis tool. It automates the summarization of complex legal contracts and intelligently identifies hidden charges or unfavorable clauses using advanced LLM-as-a-judge logic, empowering users to make informed legal decisions safely.",
      tech: ["React", "Node.js", "Gemini API", "MongoDB"],
      domain: "AI / Full-Stack",
      features: [
        "Automated contract summarization",
        "LLM-as-a-judge logic for evaluating clauses",
        "Identification of hidden charges",
        "Secure document processing"
      ],
      image: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=500",
      imageFit: "object-cover object-center",
      live: false,
      github: "https://github.com/HimeshLaddha/TradeGuard-AI"
    },
    {
      title: "Code Cure - Healthcare Management",
      description: "Comprehensive digital consultation platform with real-time messaging and encrypted storage.",
      detailedDescription: "Code Cure is a comprehensive digital consultation platform tailored for healthcare management. It enables secure, real-time messaging between patients and doctors and ensures data privacy with HIPAA-compliant encrypted storage.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "Cloudinary"],
      domain: "Full-Stack",
      features: [
        "Real-time messaging for digital consultations",
        "HIPAA-compliant encrypted storage",
        "Secure patient-doctor portal",
        "Media uploads via Cloudinary"
      ],
      image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=500",
      imageFit: "object-cover object-center",
      live: false,
      github: "https://github.com/HimeshLaddha/Code-Cure"
    },
    {
      title: "InsiderJobs - Job Portal Application",
      description: "Full-stack job portal with authentication, job management, and resume uploads.",
      detailedDescription:
        "A production-ready job portal application built using the MERN stack. The platform supports recruiters and candidates with secure authentication, job posting and application workflows, resume uploads, and real-time error monitoring. It is designed with scalability and clean architecture in mind, following modern full-stack development practices.",
      tech: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Clerk",
        "Cloudinary",
        "Sentry"
      ],
      domain: "Full-Stack",
      features: [
        "Secure authentication using Clerk for users and JWT-based auth for companies",
        "Recruiter dashboard to post, update, and manage job listings",
        "Candidate job search, filtering, and application system",
        "Resume and company logo uploads via Cloudinary",
        "Rich job descriptions using Quill editor",
        "Real-time error monitoring and logging with Sentry"
      ],
      image: jobPortal,
      imageFit: "object-contain object-center",
      live: "https://job-portal-frontend-tau-dusky.vercel.app/",
      github: "https://github.com/HimeshLaddha/job-portal"
    },
    {
      title: "QuickStay - Hotel Booking System",
      description: "Hotel booking system with role-based authentication (Currently under development).",
      detailedDescription: "QuickStay is a comprehensive hotel booking platform designed to streamline the reservation process for both guests and hotel administrators. The system features role-based authentication, allowing different access levels for customers, hotel staff, and administrators. Currently in development, it aims to provide a complete solution for hotel management and booking.",
      tech: ["React", "Tailwind", "Node", "Express", "MongoDB"],
      domain: "Full-Stack",
      features: [
        "Role-based login system for guests and admins",
        "Room listings with availability tracking",
        "Admin dashboard to manage hotels, bookings, and users",
        "Search and filter functionality for users",
        "Planned Stripe integration for secure payments"
      ],
      image: quickStay,
      imageFit: "object-contain object-center",
      live: "https://hotel-booking-frontend-pink-delta.vercel.app/",
      github: "https://github.com/HimeshLaddha/Hotel_Booking"
    },
    {
      title: "HerbiVerse - Interactive Herbal Learning Hub",
      description: "Interactive Herbal Learning Hub with 2D/3D models for educational purposes.",
      detailedDescription: "HerbiVerse is a comprehensive educational platform that combines traditional herbal knowledge with modern web technologies. The application features interactive 2D and 3D models of various herbs.",
      tech: ["React", "Tailwind", "Node", "Express", "Three.js", "MongoDB"],
      domain: "3D/Educational",
      features: [
        "Interactive 3D herb models with detailed animations",
        "Educational insights with plant care tips, benefits, and usage",
        "Comprehensive herb database with search functionality",
        "Educational modules, care tips, and medicinal uses"
      ],
      image: herbiverse,
      imageFit: "object-contain object-center",
      live: "https://herbiverse.vercel.app/",
      github: "https://github.com/HimeshLaddha/Herbiverse"
    },
    {
      title: "Crop Disease Detection - Machine Learning System",
      description: "Machine learning system to detect crop diseases using image analysis.",
      detailedDescription:
        "Crop Disease Detection is a machine learning-based application designed to identify plant diseases from leaf images. The project focuses on improving agricultural productivity by enabling early disease detection. It uses image preprocessing and trained ML models to classify crops as healthy or diseased.",
      tech: ["Python", "Machine Learning", "OpenCV", "NumPy", "Matplotlib"],
      domain: "Machine Learning",
      features: [
        "Image-based crop disease classification",
        "Preprocessing of plant leaf images",
        "Prediction of healthy vs diseased crops",
        "Improves early detection and prevention in agriculture"
      ],
      image: cropDetection,
      imageFit: "object-contain object-center",
      live: false,
      github: "https://github.com/HimeshLaddha/crop_disease_detection"
    },
    {
      title: "ReadOut - Cloud-Native Accessibility",
      description: "Processes PDF text and converts it into refined, natural speech using cloud-native infrastructure.",
      detailedDescription:
        "ReadOut is an accessibility-focused SaaS application that processes PDF text and converts it into refined, natural speech. It leverages cloud-native infrastructure to deliver fast, scalable text-to-speech capabilities, ensuring digital content is accessible to everyone.",
      tech: ["React", "Cloud-Native", "TTS API"],
      domain: "Cloud",
      features: [
        "PDF text extraction and processing",
        "High-quality natural text-to-speech conversion",
        "Cloud-native scalable architecture",
        "Focus on digital accessibility"
      ],
      image: "https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&w=500",
      imageFit: "object-cover object-center",
      live: false,
      github: "https://github.com/HimeshLaddha/ReadOut"
    },
    {
      title: "QuickChat - Real time Chat Application",
      description: "Real-time chat application with image sharing capabilities and modern UI.",
      detailedDescription: "QuickChat is a modern real-time messaging application built with the MERN stack and Socket.io. It enables users to communicate instantly with features like image sharing, typing indicators, and message status updates. The application focuses on providing a seamless chat experience with a clean, intuitive interface.",
      tech: ["React", "Tailwind", "Node", "Express", "MongoDB", "Socket.io"],
      domain: "Full-Stack",
      features: [
        "Instant real-time communication using WebSockets",
        "Image sharing with inline previews",
        "Secure user authentication and session management",
        "Minimal, modern UI",
        "Responsive chat interface"
      ],
      image: quickChat,
      imageFit: "object-contain object-center",
      live: "https://chat-app-weld-five-80.vercel.app/",
      github: "https://github.com/HimeshLaddha/Chat_App"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive data visualization project for meaningful insights.",
      detailedDescription:
        "A data visualization project focused on transforming raw datasets into interactive and insightful visual representations. The application demonstrates how data can be analyzed and communicated effectively using charts and graphs, making it easier to identify patterns and trends.",
      tech: ["JavaScript", "Chart.js", "HTML", "CSS", "Python"],
      domain: "Data Visualization",
      features: [
        "Interactive charts and graphs",
        "Visualization of real-world datasets",
        "Clear representation of trends and patterns",
        "Improved decision-making through visual insights"
      ],
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=500",
      live: false,
      github: "https://github.com/HimeshLaddha/data_visualization"
    },
    {
      title: "PassOp - Password Manager",
      description: "Basic password manager built with encryption and a clean UI.",
      detailedDescription: "PassOp is a simple password management application that allows users to securely store and manage their login credentials. Built using the MERN stack, it focuses on basic functionality like saving passwords, organizing them by category, and ensuring data is encrypted using built-in Node.js crypto modules. It's an ideal starter project to demonstrate secure data handling and user authentication.",
      tech: ["MERN stack"],
      domain: "MERN-Stack",
      features: [
        "Secure password storage with basic encryption",
        "Simple UI to add, view, and delete passwords",
        "Category-wise password organization",
        "Copy-to-clipboard functionality for convenience"
      ],
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=500",
      live: false,
      github: "https://github.com/HimeshLaddha/Password_Manager"
    },
    {
      title: "To Do List - Productivity App",
      description: "A productivity app for managing daily tasks and projects.",
      detailedDescription: "A comprehensive task management application that helps users organize their daily activities and projects. Features include task categorization, priority levels, due dates, and progress tracking.",
      tech: ["React", "Node.js", "MongoDB"],
      domain: "MERN-Stack",
      features: [
        "Task categorization",
        "Every task is created with a unique identifier, ensuring clean operations like edit/delete.",
        "Users can toggle completion status for better task tracking.",
        "Show/Hide Completed Task"
      ],
      image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=500",
      live: false,
      github: "https://github.com/HimeshLaddha/Todo_List"
    },
    {
      title: "Bitlinks - URL Shortener Service",
      description: "URL shortener service for generating and managing short links.",
      detailedDescription:
        "Bitlinks is a simple URL shortening service that converts long URLs into short, shareable links. The project demonstrates backend logic, database handling, and REST API design while focusing on real-world utility use cases.",
      tech: ["Node.js", "Express.js", "MongoDB", "JavaScript"],
      domain: "MERN-Stack",
      features: [
        "Generate short URLs from long links",
        "Redirect users to original URLs",
        "Backend API for link management",
        "Database storage for persistent links"
      ],
      image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=500",
      live: false,
      github: "https://github.com/HimeshLaddha/Bitlinks"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website with modern design and animations.",
      detailedDescription: "A modern, responsive portfolio website built with React and Framer Motion. Features smooth animations, dark theme, and comprehensive sections showcasing skills, projects, and experience.",
      tech: ["React", "Tailwind", "Framer Motion"],
      domain: "MERN-Stack",
      features: [
        "Responsive design with mobile-first approach",
        "Smooth animations and micro-interactions",
        "Dark theme with blue accents",
        "Contact form integration"
      ],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500",
      live: "https://himesh-portfolio-delta.vercel.app/",
      github: "https://github.com/HimeshLaddha/portfolio"
    }
  ];

  const domains = ['All', ...new Set(projects.map(project => project.domain))];
  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(project => project.domain === selectedFilter);
  const featuredProjects = projects.slice(0, 4);

  return (
    <section id="projects" className="py-20 relative bg-dark overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl z-0 pointer-events-none"></div>

      <div className="container-custom section-padding relative z-20">
        <motion.h2
          className="text-4xl md:text-5xl font-bold font-heading text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={() => setSelectedProject(project)}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => setShowAllProjects(true)}
            className="px-8 py-3 glass rounded-full text-white font-medium hover:bg-white/10 transition-colors border border-white/10 flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Modal onClose={() => setSelectedProject(null)}>
            <div className="overflow-y-auto max-h-[85vh] custom-scrollbar">
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h2 className="text-3xl font-bold text-white mb-1">{selectedProject.title}</h2>
                  <span className="text-primary text-sm font-medium px-3 py-1 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-md">
                    {selectedProject.domain}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {selectedProject.detailedDescription}
                </p>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                        <span className="text-primary mt-1">▹</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-dark-lighter text-gray-300 text-sm rounded-md border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {selectedProject.live && (
                    <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-6 py-3 bg-primary hover:bg-blue-600 text-white rounded-lg font-medium transition-colors">
                      Live Demo
                    </a>
                  )}
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-6 py-3 glass hover:bg-white/10 text-white rounded-lg font-medium transition-colors border border-white/10">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>

      {/* All Projects Modal */}
      <AnimatePresence>
        {showAllProjects && (
          <Modal onClose={() => setShowAllProjects(false)} maxWidth="max-w-7xl">
            <div className="p-6 md:p-10 h-[80vh] flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-white">All Projects</h2>
                <div className="flex gap-2 bg-dark-lighter p-1 rounded-lg border border-white/5">
                  {domains.map(domain => (
                    <button
                      key={domain}
                      onClick={() => setSelectedFilter(domain)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${selectedFilter === domain ? 'bg-primary text-white shadow-lg' : 'text-gray-400 hover:text-white'
                        }`}
                    >
                      {domain}
                    </button>
                  ))}
                </div>
              </div>

              <div className="overflow-y-auto pr-2 custom-scrollbar flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((project, idx) => (
                    <ProjectCard
                      key={idx}
                      project={project}
                      onClick={() => {
                        setShowAllProjects(false);
                        setSelectedProject(project);
                      }}
                      index={idx}
                    />
                  ))}
                </div>
                {filteredProjects.length === 0 && (
                  <div className="text-center py-20 text-gray-500">No projects found in this category.</div>
                )}
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
};

const ProjectCard = ({ project, onClick, index }) => (
  <motion.div
    className={`glass rounded-xl overflow-hidden border ${project.badge ? 'border-yellow-500/50 hover:border-yellow-400' : 'border-white/5 hover:border-primary/50'} group cursor-pointer relative shadow-lg ${project.badge ? 'shadow-yellow-500/10' : ''}`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    onClick={onClick}
  >
    <div className="relative h-56 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className={`w-full h-full ${project.imageFit || 'object-cover'} transition-transform duration-500 group-hover:scale-110`}
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>

      {/* Badge container logic */}
      {project.badge ? (
        <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-500 to-yellow-600 shadow-lg px-4 py-1.5 rounded-full border border-yellow-300/50 z-10 flex items-center gap-1">
          <span className="text-white text-xs font-extrabold tracking-wider uppercase drop-shadow-md">{project.badge}</span>
        </div>
      ) : null}

      <div className={`absolute top-3 right-3 bg-dark/80 backdrop-blur-md px-3 py-1 rounded-full border ${project.badge ? 'border-yellow-500/30' : 'border-white/10'}`}>
        <span className={`${project.badge ? 'text-yellow-400' : 'text-primary'} text-xs font-bold tracking-wide uppercase`}>{project.domain}</span>
      </div>
    </div>

    <div className="p-6 relative">
      <div className={`absolute top-0 right-6 -mt-8 w-12 h-12 ${project.badge ? 'bg-yellow-500 shadow-yellow-500/40' : 'bg-primary shadow-primary/30'} rounded-full flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300`}>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>

      <h3 className={`text-2xl font-bold text-white mb-2 transition-colors ${project.badge ? 'group-hover:text-yellow-400' : 'group-hover:text-primary'}`}>{project.title}</h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.slice(0, 4).map((t, i) => (
          <span key={i} className={`text-xs font-medium text-gray-300 bg-white/5 px-2 py-1 rounded border ${project.badge ? 'border-yellow-500/20' : 'border-white/5'}`}>
            {t}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="text-xs font-medium text-gray-400 px-2 py-1">+{project.tech.length - 4}</span>
        )}
      </div>
    </div>
  </motion.div>
);

const Modal = ({ children, onClose, maxWidth = "max-w-4xl" }) => (
  <motion.div
    className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  >
    <motion.div
      className={`relative w-full ${maxWidth} bg-dark rounded-2xl border border-white/10 shadow-2xl max-h-[90vh] flex flex-col overflow-hidden`}
      initial={{ scale: 0.9, y: 20, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      exit={{ scale: 0.9, y: 20, opacity: 0 }}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors backdrop-blur-md border border-white/10"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      {children}
    </motion.div>
  </motion.div>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    domain: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string,
    github: PropTypes.string,
    imageFit: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  maxWidth: PropTypes.string,
};

export default Projects;