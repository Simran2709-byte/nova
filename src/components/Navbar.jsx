const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        <h1 className="text-white font-bold text-2xl">
          NOVA
        </h1>

        <div className="flex gap-8 text-slate-300">

          <a href="#">Explore</a>
          <a href="#">Future</a>
          <a href="#">Universe</a>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;