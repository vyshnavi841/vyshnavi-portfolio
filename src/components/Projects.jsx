const projects = [
  {
    title: "Time-Series Anomaly Detection",
    description:
      "Built a Variational Autoencoder for anomaly detection using NASA multivariate time-series datasets.",
    github: "https://github.com/vyshnavi841/time-series-vae-anomaly-detection",
  },

  {
    title: "Real-Time Churn Prediction API",
    description:
      "Developed an ML pipeline and REST API using MLflow and Docker deployment.",
    github: "https://github.com/vyshnavi841/Churn_prediction_mlflow/",
  },

  {
    title: "Knowledge Distillation Pipeline",
    description:
      "Implemented model compression using PyTorch and Streamlit visualization.",
    github: "https://github.com/vyshnavi841/kd-pipeline-pytorch-streamlit",
  },
];

function Projects() {
  return (
    <section id="projects" className="section">

      <h1 className="text-4xl font-bold text-center mb-16">
        Projects
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {projects.map((project, index) => (

          <div
            key={index}
            className="glass p-8 rounded-3xl hover:-translate-y-2 transition duration-300"
          >

            <h2 className="text-2xl font-semibold mb-4">
              {project.title}
            </h2>

            <p className="text-gray-300 leading-7 mb-6">
              {project.description}
            </p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-5 py-2 rounded-xl transition"
            >
              View GitHub Repo
            </a>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;