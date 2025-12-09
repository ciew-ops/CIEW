import { Link } from "react-router-dom";

const Header = () => {
 

  return (
    <header className="flex items-center justify-between px-7 py-5 bg-[#200101] text-[#fff6e6]">
        <div className="logo flex items-center gap-3">
          <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#ffcf6b] flex items-center justify-center font-bold text-[#3a0a0a]">
            C
          </div>
          <div>
            <div className="font-bold text-lg text-[#d4af37]">CIEW</div>
            <div className="text-sm text-[#f0dca6]">Council for IT Engineers Welfare</div>
          </div>
        </div>
        
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link to="/" className="text-[#d4af37]">Home</Link>
          <Link to="/about" className="text-[#d4af37]">About</Link>
          <Link to="/verify" className="text-[#d4af37]">Verify</Link>
          <Link to="/institutes" className="text-[#d4af37]">Institutes</Link>
          <Link to="/membership" className="text-[#d4af37]">Memberships</Link>
          <Link to="/members" className="text-[#d4af37]">Members</Link>
          <Link to="/license" className="text-[#d4af37]">License</Link>
          <Link to="/join" className="text-[#d4af37]">Join / Login</Link>
        </nav>
        
        
        <button className="md:hidden text-[#f0dca6]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

      
    </header>
  );
};

export default Header;
