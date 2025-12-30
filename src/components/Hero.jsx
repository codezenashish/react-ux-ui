import { ChevronDown, Sparkle } from "lucide-react";
import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { codeExamples, floatingCard } from "../data/codeExamples";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("App.jsx");

  useEffect(() => {
    function handleMouseMove(event) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  const currentFloatingCard = floatingCard[activeTab];
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15), transparent 40%`,
        }}
      ></div>

      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto text-center relative w-full">
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 items-center relative">
          <div className="">
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6 sm:mb-6 animate-fade-in-down animation-delay-200">
              <Sparkle />
              <span className="capitalize">introducing code flow ai</span>
            </div>
          </div>
          <div className=" relative order-2 w-full ">
            <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10">
              <div className="bg-linear-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[250px] w-[350px] lg:h-[450px] ">
                {/* ide header */}
                <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:3 bg-white/5 backdrop-blur-sm border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 "></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500 "></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 "></div>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300 capitalize">
                      code flow Ai
                    </span>
                  </div>
                  <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                </div>
                <div className="p-3 sm:p-4  relative h-full">
                  {/* files tab */}
                  <div className=" flex space-x-1 mb-3 sm:mb-4 overflow-hidden">
                    <button
                      onClick={() => setActiveTab("App.jsx")}
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                        activeTab === "App.jsx"
                          ? "bg-blue-500/30 text-white border-blue-40"
                          : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                      } text-gray-300 transition-all duration-200 whitespace-nowrap`}
                    >
                      App.jsx
                    </button>
                    <button
                      onClick={() => setActiveTab("Hero.jsx")}
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                        activeTab === "Hero.jsx"
                          ? "bg-blue-500/30 text-white border-blue-40"
                          : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                      } text-gray-300 transition-all duration-200 whitespace-nowrap`}
                    >
                      Hero.jsx
                    </button>
                    <button
                      onClick={() => setActiveTab("Navbar.jsx")}
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                        activeTab === "Navbar.jsx"
                          ? "bg-blue-500/30 text-white border-blue-40"
                          : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                      } text-gray-300 transition-all duration-200 whitespace-nowrap`}
                    >
                      Navbar.jsx
                    </button>
                  </div>
                  {/* code content */}
                  <div className="relative overflow-hidden grow">
                    <SyntaxHighlighter
                      language="javascript"
                      style={nightOwl}
                      customStyle={{
                        margin: 0,
                        borderRadius: "8px",
                        fontSize: "11px",
                        lineHeight: "1.4",
                        height: "100%",
                      }}
                    >
                      {codeExamples[activeTab]}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              {/* floating card */}
              <div
                className={`hidden lg:block absolute bottom-4 right-4 transform-x-8 translate-y-8 w-72 ${currentFloatingCard.bgColor} backdrop-blur-xl rounded-lg p-4 border border-white/20 shadow-2xl  `}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div
                    className={`w-6 h-6 ${currentFloatingCard.iconColor} flex items-center justify-center text-sm font-bold`}
                  >
                    {currentFloatingCard.icon}
                  </div>
                  <span
                    className={`text-sm font-medium ${currentFloatingCard.textColor}`}
                  >
                    {currentFloatingCard.title}
                  </span>
                </div>
                <div
                  className={`text-sm font-medium ${currentFloatingCard.contentColor}`}
                >
                  {currentFloatingCard.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
