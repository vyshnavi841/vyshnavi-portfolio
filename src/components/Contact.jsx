function Contact() {
  return (
    <section id="contact" className="section">

      <h2 className="text-4xl font-bold text-center mb-16">
        Contact Me
      </h2>

      <div className="max-w-3xl mx-auto glass p-10 rounded-3xl text-center">

        <p className="text-gray-300 text-lg mb-8">
          Open to internships, collaborations, and Machine Learning opportunities.
        </p>

        <div className="flex flex-col gap-5 text-lg">

          <a
            href="mailto:vyshnavi.kaki2005@gmail.com"
            className="hover:text-cyan-400"
          >
            vyshnavi.kaki2005@gmail.com
          </a>

          <a
            href="https://github.com/vyshnavi841"
            target="_blank"
            className="hover:text-cyan-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/vyshnavi-kaki-604177291/"
            target="_blank"
            className="hover:text-cyan-400"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;