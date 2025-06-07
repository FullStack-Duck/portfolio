export default function Footer() {
  return (
    <footer className="bg-[#034694] text-white py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8 text-sm">
        <div>
          <h2 className="text-lg font-bold mb-2">Nicolas Sandrin</h2>
          <p>Full Stack Developer</p>
          <p>Based in Córdoba, Argentina</p>
        </div>
        <div>
          <h3 className="font-semibold mb-1">Contact</h3>
          <p>Email: nicosheker@gmail.com</p>
          <p>LinkedIn: linkedin.com/in/nicosheker</p>
        </div>
        <div>
          <h3 className="font-semibold mb-1">Portfolio</h3>
          <p>Technologies: React, Node.js, Java, Solidity</p>
          <p>Website: nicosheker.dev</p>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-blue-100">
        &copy; {new Date().getFullYear()} Nicolas Sandrin. All rights reserved.
      </div>
    </footer>
  );
}
