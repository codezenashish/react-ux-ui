import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 z-50 w-full bg-slate-950/20 backdrop-blur-sm transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between sm:h-16 md:h-20">
          <div className="group flex cursor-pointer items-center space-x-1">
            <div>
              <img
                className="h-6 w-6 sm:h-8 sm:w-8"
                src="/public/logo.png"
                alt="codingIcon"
              />
            </div>
            <span className="text-lg font-medium sm:text-xl md:text-2xl">
              <span className="text-white">Code</span>
              <span className="text-sky-500">Flow</span>
            </span>
          </div>
          {/* nav links */}
          <div className="hidden items-center space-x-6 md:flex lg:space-x-8">
            <a
              className="text-sm text-gray-300 hover:text-white lg:text-base"
              href="#features"
            >
              Features
            </a>

            <a
              className="text-sm text-gray-300 hover:text-white lg:text-base"
              href="#features"
            >
              Pricing
            </a>

            <a
              className="text-sm text-gray-300 hover:text-white lg:text-base"
              href="#features"
            >
              Tastimonials
            </a>
          </div>
          <button
            className="p-2 text-gray-300 hover:text-white md:hidden"
            onClick={() => {
              setMobileMenuOpen((prev) => !prev);
            }}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="animation-in slide-in-from-top border-t border-slate-800 bg-slate-900/95 backdrop-blur-lg duration-300 md:hidden">
          <div className="space-y-3 px-4 py-4 sm:space-y-4 sm:py-6">
            <a
              className="block text-sm text-gray-300 hover:text-white lg:text-base"
              href="#features"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              Features
            </a>
            <a
              className="block text-sm text-gray-300 hover:text-white lg:text-base"
              href="#features"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              Pricing
            </a>
            <a
              className="block text-sm text-gray-300 hover:text-white lg:text-base"
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
