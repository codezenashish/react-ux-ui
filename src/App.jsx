import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Tastimonials from "./components/Tastimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Tastimonials />
      <Footer />
    </div>
  );
};
export default App;
