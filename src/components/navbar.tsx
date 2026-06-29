import { PhoneCall, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <header className="w-full font-sans sticky top-0 z-50 bg-white shadow-[0_1px_0_var(--color-border)]">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 outline-none focus-visible:ring-2 focus-visible:ring-brand rounded">
          <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white font-bold text-xl relative overflow-hidden">
            <div className="absolute w-6 h-6 border-[3px] border-transparent border-t-white border-l-white rounded-full -top-1 -left-1 opacity-80"></div>
            <div className="absolute w-8 h-8 border-[3px] border-transparent border-b-white border-r-white rounded-full -bottom-1 -right-1 opacity-40"></div>
            <span className="italic relative z-10 drop-shadow-md">F</span>
          </div>
          <span className="text-3xl font-extrabold text-brand tracking-tight">Finwave</span>
        </Link>

        {/* Links */}
        <nav className="hidden xl:flex items-center space-x-8 font-semibold text-[15px]">
          <Link to="/" className="text-text-primary flex items-center hover:text-brand transition-colors outline-none focus-visible:ring-2 focus-visible:ring-brand rounded px-1">
            Home <ChevronDown size={16} className="ml-1 opacity-70" />
          </Link>
          <Link to="/services" className="text-text-primary flex items-center hover:text-brand transition-colors outline-none focus-visible:ring-2 focus-visible:ring-brand rounded px-1">
            Service <ChevronDown size={16} className="ml-1 opacity-70" />
          </Link>
          <div className="text-text-primary flex items-center hover:text-brand transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-brand rounded px-1">
            Pages <ChevronDown size={16} className="ml-1 opacity-70" />
          </div>
          <div className="text-text-primary flex items-center hover:text-brand transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-brand rounded px-1">
            Elements <ChevronDown size={16} className="ml-1 opacity-70" />
          </div>
          <div className="text-text-primary flex items-center hover:text-brand transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-brand rounded px-1">
            Blog <ChevronDown size={16} className="ml-1 opacity-70" />
          </div>
          <div className="text-text-primary flex items-center hover:text-brand transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-brand rounded px-1">
            Contact
          </div>
        </nav>

        {/* Right Section */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex items-center space-x-3">
            <div className="text-brand bg-surface p-2 rounded-full">
              <PhoneCall size={24} />
            </div>
            <div>
              <p className="text-sm text-text-secondary font-medium">Call:</p>
              <p className="text-[17px] font-bold text-text-primary leading-none tracking-tight">+123-7787-8989</p>
            </div>
          </div>
          <Link to="#" className="bg-brand text-white px-7 py-3.5 rounded font-bold flex items-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-brand hover:bg-[#b8662f] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand">
            Free Consultation <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </header>

  );
};

export default Navbar;
