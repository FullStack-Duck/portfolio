'use client';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#034694] text-white shadow-md">
  <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
    <a href="#home" className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors">
      Nicolas Sandrin
    </a>
    <nav className="flex gap-8">
      <a href="#home" className="text-lg font-semibold hover:text-yellow-400 transition-colors">
        Home
      </a>
      <a href="#tech" className="text-lg font-semibold hover:text-yellow-400 transition-colors">
        Technologies
      </a>
      <a href="#projects" className="text-lg font-semibold hover:text-yellow-400 transition-colors">
        Projects
      </a>
    </nav>
  </div>
</header>
  );
}
