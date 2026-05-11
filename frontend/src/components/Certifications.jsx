import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const Certifications = () => {
    const [showAllCerts, setShowAllCerts] = useState(false);

    const certifications = [
        {
            title: "AR/VR Bootcamp",
            org: "CDAC Pune",
            description:
                "Hands on training in AR/VR fundamentals, 3D concepts, and immersive application development.",
            link: "/certificates/ar-vr-cdac.pdf"
        },
        {
            title: "Full Stack Web Development",
            org: "IIT Bombay",
            description:
                "Comprehensive program covering frontend, backend fundamentals, and modern web development practices.",
            link: "/certificates/iit-bombay-web-dev.pdf"
        },
        {
            title: "Machine Learning Workshop",
            org: "NIT Durgapur",
            description:
                "Introductory workshop focused on machine learning concepts, algorithms, and practical applications.",
            link: "/certificates/nit-ml-workshop.pdf"
        },
        {
            title: "Summer Analytics - Data Science & ML",
            org: "IIT Guwahati",
            description:
                "Intensive program covering data analysis, machine learning techniques, and real world problem solving.",
            link: "/certificates/summer-analytics-iitg.pdf"
        },
        {
            title: "Time Series Analysis",
            org: "IIT Guwahati",
            description:
                "Focused training on time series modeling, forecasting techniques, and analytical methods.",
            link: "/certificates/time-series-iitg.pdf"
        },
        {
            title: "Generative AI Workshop",
            org: "NxtWave",
            description:
                "Participated in a hands on Generative AI workshop focused on building custom AI models and understanding core GenAI concepts for real world applications.",
            link: "/certificates/genai-nxtwave.pdf"
        },
        {
            title: "AI for Students: Build Your Own Generative AI Model",
            org: "Nextwave",
            description:
                "Successfully completed the program focusing on building custom generative AI models and understanding AI foundations.",
            link: "/certificates/ai-for-students-nextwave.pdf"
        },
        {
            title: "Eureka Hackathon",
            org: "Eureka",
            description:
                "Participation Certificate for demonstrating problem-solving and technical skills in the Eureka Hackathon.",
            link: "/certificates/eureka-hackathon.pdf"
        },
        {
            title: "Impetus and Concepts (InC)",
            org: "PICT",
            description:
                "Participation in the Project Competition at Impetus and Concepts in domain Application Development (AD) & Machine Learning (ML).",
            link: "/certificates/inc-aiml-competition.pdf"
        },
        {
            title: "Pradnya (InC)",
            org: "PICT",
            description:
                "Participation in the Pradnya Coding Competition at Impetus and Concepts.",
            link: "/certificates/pradnya-coding-competition.pdf"
        },
        {
            title: "Techfiesta",
            org: "Techfiesta",
            description:
                "Participation Certificate for engaging in various technical challenges and events at Techfiesta.",
            link: "/certificates/techfiesta.pdf"
        }
    ];

    const achievements = [
        {
            title: "Josh Hackathon Winner",
            description:
                "1st Place Winner at the Josh Software 24-hour Hackathon for building an AI Hallucination Detection System.",
            link: "/certificates/josh-hackathon.pdf"
        },
        {
            title: "Impetus & Concepts - Volunteer",
            description:
                "Contributed as a volunteer for the annual technical festival, assisting in coordination and event execution.",
            link: "/certificates/impetus-volunteer.pdf"
        },
        {
            title: "Poster Competition Winner",
            description:
                "Presented a technical poster on Driver Drowsiness Analysis, backed by in depth research and practical exploration of relevant technologies. The work focused on understanding real world safety challenges, analyzing existing approaches, and applying technical concepts to communicate an effective and data driven solution.",
            link: "/certificates/poster-competition.pdf"
        }
    ];

    return (
        <section id="certifications" className="py-20 relative bg-dark overflow-hidden">
            {/* Background Enhancements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none z-0"></div>

            <div className="container-custom section-padding relative z-20">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold font-heading text-center mb-16 text-white"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Certifications &<span className="text-gradient"> Achievements</span>
                </motion.h2>

                {/* Certifications */}
                <div className="max-w-6xl mx-auto mb-20">
                    <h3 className="text-2xl font-bold font-heading mb-8 flex items-center gap-3 text-white">
                        <span className="w-2 h-8 bg-primary rounded-full inline-block"></span>
                        Certifications
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.slice(0, 6).map((cert, index) => (
                            <motion.div
                                key={index}
                                className="glass p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300 group h-full flex flex-col"
                                whileHover={{ y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{cert.title}</h4>
                                <p className="text-primary/80 font-medium mb-3 text-sm">{cert.org}</p>
                                <p className="text-gray-400 mb-6 text-sm flex-grow leading-relaxed">{cert.description}</p>
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-white font-medium hover:text-primary transition-colors mt-auto group/link"
                                >
                                    View Certificate
                                    <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </motion.div>
                        ))}
                    </div>

                    {certifications.length > 6 && (
                        <motion.div
                            className="text-center mt-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <motion.button
                                onClick={() => setShowAllCerts(true)}
                                className="px-8 py-3 glass rounded-full text-white font-medium hover:bg-white/10 transition-colors border border-white/10 flex items-center gap-2 mx-auto"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View All Certificates
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </motion.button>
                        </motion.div>
                    )}
                </div>

                {/* Achievements */}
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-2xl font-bold font-heading mb-8 flex items-center gap-3 text-white">
                        <span className="w-2 h-8 bg-secondary rounded-full inline-block"></span>
                        Achievements
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {achievements.map((item, index) => (
                            <motion.div
                                key={index}
                                className="glass p-6 rounded-xl border border-white/5 hover:border-secondary/30 transition-all duration-300 group h-full flex flex-col"
                                whileHover={{ y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-secondary transition-colors">{item.title}</h4>
                                <p className="text-gray-300 mb-6 flex-grow leading-relaxed">{item.description}</p>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-white font-medium hover:text-secondary transition-colors mt-auto group/link"
                                >
                                    View Proof
                                    <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* All Certificates Modal */}
            <AnimatePresence>
                {showAllCerts && (
                    <Modal onClose={() => setShowAllCerts(false)} maxWidth="max-w-7xl">
                        <div className="p-6 md:p-10 h-[80vh] flex flex-col">
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-3xl font-bold text-white">All Certificates</h2>
                            </div>

                            <div className="overflow-y-auto pr-2 custom-scrollbar flex-1">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {certifications.map((cert, index) => (
                                        <motion.div
                                            key={index}
                                            className="glass p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300 group h-full flex flex-col"
                                            whileHover={{ y: -5 }}
                                        >
                                            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{cert.title}</h4>
                                            <p className="text-primary/80 font-medium mb-3 text-sm">{cert.org}</p>
                                            <p className="text-gray-400 mb-6 text-sm flex-grow leading-relaxed">{cert.description}</p>
                                            <a
                                                href={cert.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-white font-medium hover:text-primary transition-colors mt-auto group/link"
                                            >
                                                View Certificate
                                                <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </a>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Modal>
                )}
            </AnimatePresence>
        </section>
    );
};

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

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
    maxWidth: PropTypes.string,
};

export default Certifications;
