import { motion } from 'framer-motion';

const DsaCoreCS = () => {
  const topics = [
    "Arrays",
    "Strings",
    "Linked Lists",
    "Stacks & Queues",
    "Trees",
    "Graphs",
    "Dynamic Programming",
    "Sliding Window",
    "Greedy",
    "DSU",
    "DBMS",
    "Operating Systems",
    "Computer Networks"
  ];

  return (
    <section id="problem-solving" className="py-12 bg-dark relative overflow-hidden">
      <div className="container-custom section-padding relative z-20">
        <motion.div
          className="max-w-4xl mx-auto glass p-6 sm:p-8 rounded-2xl border border-white/5 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-3">
            Problem Solving &amp; <span className="text-gradient">Core CS</span>
          </h3>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
            Actively strengthening Data Structures &amp; Algorithms and core Computer Science fundamentals for software engineering roles.
          </p>

          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {topics.map((topic, index) => (
              <motion.span
                key={index}
                className="px-3.5 py-1.5 bg-white/5 text-gray-200 text-xs sm:text-sm font-medium rounded-lg border border-white/10 hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {topic}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DsaCoreCS;
