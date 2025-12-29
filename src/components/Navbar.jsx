import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="flex items-center space-x-1 group cursor-pointer ">
            <div>
              <img
                className="w-6 h-6 sm:w-8 sm:h-8"
                src="/public/logo.png"
                alt="codingIcon"
              />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
              <span className="text-white">Code</span>
              <span className="text-sky-500">Flow</span>
            </span>
          </div>
          {/* nav links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 ">
            <a
              className="text-gray-300 hover:text-white text-sm lg:text-base"
              href="#features"
            >
              Features
            </a>

            <a
              className="text-gray-300 hover:text-white text-sm lg:text-base"
              href="#features"
            >
              Pricing
            </a>

            <a
              className="text-gray-300 hover:text-white text-sm lg:text-base"
              href="#features"
            >
              Tastimonials
            </a>
          </div>
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => {
              setMobileMenuOpen((prev) => !prev);
            }}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animation-in slide-in-from-top duration-300 ">
          <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
            <a
              className="text-gray-300 hover:text-white text-sm lg:text-base block"
              href="#features"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              Features
            </a>
            <a
              className="text-gray-300 hover:text-white text-sm lg:text-base block"
              href="#features"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              Pricing
            </a>
            <a
              className="text-gray-300 hover:text-white text-sm lg:text-base block"
              href="#features"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              Tastimonials
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
