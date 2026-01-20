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
        <section id="certifications" className="py-20 bg-dark-light">
            <div className="container-custom section-padding">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Certifications &<span className="text-primary"> Achievements</span>
                </motion.h2>

                {/* Certifications */}
                <div className="max-w-5xl mx-auto mb-16">
                    <h3 className="text-2xl font-semibold mb-6 flex justify-center items-center text-primary">Certifications</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                className="bg-dark border border-gray-800 rounded-xl p-6 hover:border-primary/30 transition-all"
                                whileHover={{ y: -5 }}
                            >
                                <h4 className="text-lg font-semibold">{cert.title}</h4>
                                <p className="text-gray-400 mb-2">{cert.org}</p>
                                <p className="text-gray-300 mb-4">{cert.description}</p>
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary font-medium hover:underline"
                                >
                                    View Certificate →
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Achievements */}
                <div className="max-w-5xl mx-auto">
                    <h3 className="text-2xl font-semibold mb-6 flex justify-center items-center text-primary">Achievements</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {achievements.map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-dark border border-gray-800 rounded-xl p-6 hover:border-primary/30 transition-all"
                                whileHover={{ y: -5 }}
                            >
                                <h4 className="text-lg font-semibold">{item.title}</h4>
                                <p className="text-gray-300 mb-4">{item.description}</p>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary font-medium hover:underline"
                                >
                                    View Proof →
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
