function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold gradient-text">
          Vyshnavi
        </h1>

        <div className="hidden md:flex gap-8 text-sm">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;