function Certifications() {

  const certs = [
    "Programming Essentials in C — Cisco",
    "Python Essentials — Cisco",
    "Introduction to Python — Red Hat",
    "Java Foundations — Oracle",
    "Machine Learning — LinkedIn Learning"
  ];

  return (
    <section className="section">

      <h2 className="text-4xl font-bold text-center mb-16">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {certs.map((cert, index) => (

          <div
            key={index}
            className="glass p-6 rounded-2xl"
          >
            {cert}
          </div>

        ))}

      </div>

    </section>
  );
}

export default Certifications;