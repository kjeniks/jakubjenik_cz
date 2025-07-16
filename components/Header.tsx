export default function Header() {
  return (
    <header className="bg-white shadow py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-[#8B5E3C]">QA Expert Jakub Jenik</h1>
        <nav className="space-x-4">
          <a href="#about" className="text-slate-700 hover:text-[#E63946]">About</a>
          <a href="#services" className="text-slate-700 hover:text-[#E63946]">Services</a>
          <a href="#topics" className="text-slate-700 hover:text-[#E63946]">Topics</a>
          <a href="#courses" className="text-slate-700 hover:text-[#E63946]">Courses</a>
          <a href="#contact" className="text-slate-700 hover:text-[#E63946]">Contact</a>
        </nav>
      </div>
    </header>
  );
}