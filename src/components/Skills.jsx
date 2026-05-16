function Skills() {

  const skills = [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "Data Analytics",
    "SQL",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "Streamlit",
    "Docker",
    "MLflow",
    "PyTorch",
    "Data Visualization",
    "Feature Engineering"
  ];

  return (
    <section id="skills" className="section">

      <h2 className="text-4xl font-bold text-center mb-16">
        Technical Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

        {skills.map((skill, index) => (

          <div
            key={index}
            className="glass p-6 rounded-2xl text-center hover:scale-105 transition duration-300"
          >
            {skill}
          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;