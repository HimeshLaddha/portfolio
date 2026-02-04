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
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            Himesh <br />
            <span className="text-gradient">Laddha</span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl text-gray-400 mb-8 font-light tracking-wide"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            Full Stack Developer & <span className="text-white font-medium">IT Undergraduate</span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            I build scalable, functional web applications using the MERN stack and TypeScript, exploring the intersection of software engineering and AI. Focused on writing clean, maintainable code that solves real-world problems.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-primary text-white font-semibold rounded-lg shadow-lg shadow-primary/25 hover:bg-blue-600 transition-all duration-300 transform hover:translate-y-[-2px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.a>

            <motion.a
              href="/Himesh_Laddha_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Hero Image / Visual */}
        <motion.div
          className="flex-1 relative max-w-[300px] md:max-w-[450px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          {/* Abstract background behind image */}
          <div className="absolute hidden sm:block w-[450px] h-[450px] inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full opacity-20 blur-3xl animate-pulse-glow"></div>

          <motion.div
            className="relative hidden sm:block z-10 glass p-4 rounded-2xl border border-white/10 transform rotate-3 hover:rotate-0 transition-transform duration-500 will-change-transform"
            whileHover={{ scale: 1.02 }}
          >
            {/* Inner Ring */}
            <div className="absolute hidden sm:block -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-30 blur-sm group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

            <img
              src="/himesh.jpg"
              alt="Himesh Laddha"
              className="relative sm:block hidden w-[425px] h-[425px] rounded-xl shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-500 mx-auto"
            />
          </motion.div>

          {/* Decorative Elements */}
          {/* <motion.div
            className="absolute -bottom-8 -left-8 glass p-4 rounded-xl hidden md:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: [0, -10, 0]
            }}
            transition={{
              delay: 1,
              y: {
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut"
              }
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-white/80">Open to work</span>
            </div>
          </motion.div> */}
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
