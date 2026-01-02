import {
  ArrowBigRight,
  ArrowRight,
  ChevronDown,
  Play,
  Sparkle,
} from "lucide-react";
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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15), transparent 40%`,
        }}
      ></div>

      <div className="absolute top-20 left-4 h-48 w-48 animate-pulse rounded-full bg-blue-500/10 blur-3xl sm:left-10 sm:h-72 sm:w-72"></div>
      <div className="absolute right-4 bottom-20 h-48 w-48 animate-pulse rounded-full bg-cyan-500/10 blur-3xl delay-1000 sm:right-10 sm:h-72 sm:w-72"></div>

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 sm:gap-12 lg:grid lg:grid-cols-2">
          <div className="order-1 text-center lg:order-1 lg:text-left">
            <div className="animate-in slide-in-from-bottom mb-6 inline-flex items-center space-x-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-2 duration-300 sm:mb-6 sm:px-4">
              <Sparkle className="h-4 w-4 text-blue-400" />
              <span className="text-xs text-blue-300 capitalize sm:text-sm">
                introducing codeflow ai
              </span>
            </div>
            <h1 className="animate-in slide-in-from-bottom mb-4 text-5xl leading-tight font-semibold capitalize delay-100 duration-300 sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
              <span className="mb-1 block bg-linear-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent sm:mb-2">
                code faster
              </span>
              <span className="mb-1 block bg-linear-to-b from-white via-blue-400 to-cyan-400 bg-clip-text text-transparent sm:mb-2">
                build better
              </span>
              <span className="mb-1 block bg-linear-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent sm:mb-2">
                with codeflow ai
              </span>
            </h1>
            <p className="text-md animate-in slide-in-from-bottom mx-auto mb-6 max-w-2xl leading-relaxed text-gray-400 delay-200 duration-500 sm:mb-8 sm:text-base lg:mx-0 lg:text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates repellat in facilis unde beatae doloribus, nobis fugiat
              quas dicta? Esse laudantium officiis aperiam quasi cupiditate at,
              autem nostrum illo rem nisi mollitia aliquid repudiandae aliquam
              blanditiis amet ipsum, ipsam deserunt iste natus odio voluptas.
              Omnis ratione adipisci harum aut recusandae?
            </p>
            <div className="animate-in slide-in-from-bottom mb-8 flex flex-col items-center justify-center gap-3 sm:mb-12 sm:flex-row sm:gap-4 lg:justify-start">
              <button className="group flex w-full items-center justify-center space-x-2 rounded-lg bg-linear-to-b from-blue-600 to-blue-400 px-6 py-3 text-sm font-semibold capitalize transition-all duration-300 hover:scale-102 sm:w-auto sm:px-8 sm:py-4 sm:text-base">
                <span>start coding free</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5" />
              </button>

              <button className="group flex w-full items-center justify-center space-x-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold capitalize backdrop-blur-sm transition-all duration-300 hover:bg-white/10 sm:w-auto sm:px-8 sm:py-4 sm:text-base">
                <div className="rounded-full bg-white/10 p-2 transition-colors duration-300 group-hover:bg-white/20">
                  <Play className="h-4 w-4 fill-white sm:h-5 sm:w-5" />
                </div>
                <span>watch demo</span>
              </button>
            </div>
          </div>
          <div className="relative order-2 w-full">
            <div className="relative rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl sm:rounded-2xl sm:p-4">
              <div className="h-62.5 w-87.5 w-full overflow-hidden rounded-lg bg-linear-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm lg:h-112.5">
                {/* ide header */}
                <div className="sm:3 flex items-center justify-between border-b border-white/10 bg-white/5 px-3 py-2 backdrop-blur-sm sm:px-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <div className="h-2 w-2 rounded-full bg-red-500 sm:h-3 sm:w-3"></div>
                      <div className="h-2 w-2 rounded-full bg-yellow-500 sm:h-3 sm:w-3"></div>
                      <div className="h-2 w-2 rounded-full bg-green-500 sm:h-3 sm:w-3"></div>
                    </div>
                    <span className="text-xs text-gray-300 capitalize sm:text-sm">
                      code flow Ai
                    </span>
                  </div>
                  <ChevronDown className="h-3 w-3 text-gray-400 sm:h-4 sm:w-4" />
                </div>
                <div className="relative h-full p-3 sm:p-4">
                  {/* files tab */}
                  <div className="mb-3 flex space-x-1 overflow-hidden sm:mb-4">
                    <button
                      onClick={() => setActiveTab("App.jsx")}
                      className={`rounded-t-lg border px-3 py-2 text-xs backdrop-blur-sm sm:text-sm ${
                        activeTab === "App.jsx"
                          ? "border-blue-40 bg-blue-500/30 text-white"
                          : "border-white/10 bg-white/5 text-gray-300 hover:bg-white/10"
                      } whitespace-nowrap text-gray-300 transition-all duration-200`}
                    >
                      App.jsx
                    </button>
                    <button
                      onClick={() => setActiveTab("Hero.jsx")}
                      className={`rounded-t-lg border px-3 py-2 text-xs backdrop-blur-sm sm:text-sm ${
                        activeTab === "Hero.jsx"
                          ? "border-blue-40 bg-blue-500/30 text-white"
                          : "border-white/10 bg-white/5 text-gray-300 hover:bg-white/10"
                      } whitespace-nowrap text-gray-300 transition-all duration-200`}
                    >
                      Hero.jsx
                    </button>
                    <button
                      onClick={() => setActiveTab("Navbar.jsx")}
                      className={`rounded-t-lg border px-3 py-2 text-xs backdrop-blur-sm sm:text-sm ${
                        activeTab === "Navbar.jsx"
                          ? "border-blue-40 bg-blue-500/30 text-white"
                          : "border-white/10 bg-white/5 text-gray-300 hover:bg-white/10"
                      } whitespace-nowrap text-gray-300 transition-all duration-200`}
                    >
                      Navbar.jsx
                    </button>
                  </div>
                  {/* code content */}
                  <div className="relative grow overflow-hidden">
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
                className={`transform-x-8 absolute right-4 bottom-4 hidden w-72 translate-y-8 lg:block ${currentFloatingCard.bgColor} rounded-lg border border-white/20 p-4 shadow-2xl backdrop-blur-xl`}
              >
                <div className="mb-2 flex items-center space-x-2">
                  <div
                    className={`h-6 w-6 ${currentFloatingCard.iconColor} flex items-center justify-center text-sm font-bold`}
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
