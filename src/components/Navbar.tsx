
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="font-bold text-lg">suraya.dev</h1>
        <ul className="flex gap-6">
          <li><a href="#projects" className="hover:text-accent">Projects</a></li>
          <li><a href="#skills" className="hover:text-accent">Skills</a></li>
          <li><a href="#hobbies" className="hover:text-accent">Hobbies</a></li>
          <li><a href="#contact" className="hover:text-accent">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}