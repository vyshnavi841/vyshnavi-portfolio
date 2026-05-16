import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-6"
    >

      <div className="absolute w-72 h-72 bg-cyan-500/30 rounded-full blur-3xl top-10 left-10"></div>

      <div className="absolute w-72 h-72 bg-purple-500/30 rounded-full blur-3xl bottom-10 right-10"></div>

      <motion.div
        initial={{ opacity:0, y:50 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:1 }}
        className="text-center z-10"
      >

        <p className="text-cyan-400 mb-4">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">

          <span className="gradient-text">
            Vyshnavi Kaki
          </span>

        </h1>

        <h2 className="text-2xl md:text-4xl text-gray-300 mb-6">
          Machine Learning Engineer
        </h2>

        <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-8">
          Data Science undergraduate passionate about
          Machine Learning, Deep Learning, Data Analytics,
          and building intelligent real-world applications.
        </p>

        <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">

          <a
            href="#projects"
            className="bg-purple-600 hover:bg-purple-700 transition px-8 py-3 rounded-xl"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="border border-cyan-400 hover:bg-cyan-400 hover:text-black transition px-8 py-3 rounded-xl"
          >
            Download Resume
          </a>

        </div>

      </motion.div>

    </section>
  );
}

export default Hero;