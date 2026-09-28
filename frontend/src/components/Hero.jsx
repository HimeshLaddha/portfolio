import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark">
      {/* Background Enhancements */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-40"></div>

      {/* Floating Blobs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] z-0 pointer-events-none"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] z-0 pointer-events-none"
        animate={{
          x: [0, -70, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container-custom section-padding relative z-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20">

        {/* Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
              }
            }
          }}
        >
          {/* <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
              AVAILABLE FOR HIRE
            </span>
          </motion.div> */}

          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold mb-4 sm:mb-6 leading-tight"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            Himesh <br />
            <span className="text-gradient">Laddha</span>
          </motion.h1>

          <motion.h2
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 font-medium tracking-wide"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            Software Developer | <span className="text-gradient font-semibold">Full-Stack &amp; Frontend</span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            IT undergraduate at PICT building production-focused web applications with React, Next.js, Node.js and MongoDB. Experienced in frontend development, interactive UI, animations and full-stack application development.
          </motion.p>

          <motion.div
            className="flex flex-wrap sm:flex-row gap-4 justify-center md:justify-start"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <motion.a
              href="#projects"
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-primary text-white font-semibold rounded-lg shadow-lg shadow-primary/25 hover:bg-blue-600 transition-all duration-300 transform hover:translate-y-[-2px] text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.a>

            <motion.a
              href="/Himesh_Laddha_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3.5 sm:py-4 glass text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Resume
            </motion.a>

            <motion.a
              href="https://github.com/HimeshLaddha"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3.5 sm:py-4 glass text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span>GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Hero Image / Visual */}
        <motion.div
          className="flex-1 relative max-w-[260px] sm:max-w-[340px] md:max-w-[450px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          {/* Abstract background behind image */}
          <div className="absolute w-full h-full inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full opacity-20 blur-3xl animate-pulse-glow"></div>

          <motion.div
            className="relative z-10 glass p-3 sm:p-4 rounded-2xl border border-white/10 transform hover:rotate-0 transition-transform duration-500 will-change-transform"
            whileHover={{ scale: 1.02 }}
          >
            {/* Inner Ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-30 blur-sm group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

            <img
              src="/himesh.png"
              alt="Himesh Laddha"
              className="relative w-full aspect-square object-cover rounded-xl shadow-2xl grayscale-[15%] hover:grayscale-0 transition-all duration-500 mx-auto"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
