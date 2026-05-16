function Achievements() {
  return (
    <section className="section">

      <h2 className="text-4xl font-bold text-center mb-16">
        Achievements
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="glass p-8 rounded-3xl">

          <h3 className="text-2xl font-semibold mb-4">
            24-Hour Hackathon
          </h3>

          <p className="text-gray-300">
            Secured Second Place at SRKR Engineering College Hackathon 2024.
          </p>

        </div>

        <div className="glass p-8 rounded-3xl">

          <h3 className="text-2xl font-semibold mb-4">
            National Technical Competition
          </h3>

          <p className="text-gray-300">
            Participated in a national-level technical competition showcasing innovation and problem-solving.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Achievements;