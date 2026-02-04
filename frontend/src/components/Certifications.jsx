import { motion } from "framer-motion";

const Certifications = () => {
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
        }
    ];

    const achievements = [
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
                        {certifications.map((cert, index) => (
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
        </section>
    );
};

export default Certifications;
