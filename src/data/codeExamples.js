export const codeExamples = {
  "App.jsx": `import { useState } from "react";
import { CodeFlow } from "@codeflow/ai";

function App() {
  const [code, setCode] = useState("");

  const handleAICompletion = async () => {
    const suggestion = await CodeFlow.complete(code);
    setCode(suggestion);
  };

  return (
    <div className="app">
      <CodeEditor 
        onChange={setCode} 
        onAI={handleAICompletion} 
      />
    </div>
  );
}
export default App;`,

  "Hero.jsx": `import { useState } from "react";
import { CodeFlow } from "@codeflow/ai";

function Hero() {
  const [code, setCode] = useState("");

  const handleAICompletion = async () => {
    const suggestion = await CodeFlow.complete(code);
    setCode(suggestion);
  };

  return (
    <div className="hero">
      <CodeEditor 
        onChange={setCode} 
        onAI={handleAICompletion} 
      />
    </div>
  );
}
export default Hero;`,

  "Navbar.jsx": `import { useState } from "react";
import { CodeFlow } from "@codeflow/ai";

function Navbar() {
  const [code, setCode] = useState("");

  const handleAICompletion = async () => {
    const suggestion = await CodeFlow.complete(code);
    setCode(suggestion);
  };

  return (
    <nav className="navbar">
      <CodeEditor 
        onChange={setCode} 
        onAI={handleAICompletion} 
      />
    </nav>
  );
}
export default Navbar;`,
};
export const floatingCard = {
  "App.jsx": {
    bgColor: "bg-indigo-500/20 backdrop-blur-md",
    iconColor: "text-indigo-400",
    textColor: "text-indigo-300",
    contentColor: "text-indigo-200",
    icon: "Ai",
    title: "AI Code Assist",
    content: "Smart code suggestions in real time.",
  },

  "Hero.jsx": {
    bgColor: "bg-purple-500/20 backdrop-blur-md",
    iconColor: "text-purple-400",
    textColor: "text-purple-300",
    contentColor: "text-purple-200",
    icon: "Ai",
    title: "Dynamic Hero",
    content: "AI-generated UI with smooth animations.",
  },

  "Navbar.jsx": {
    bgColor: "bg-cyan-500/20 backdrop-blur-md",
    iconColor: "text-cyan-400",
    textColor: "text-cyan-300",
    contentColor: "text-cyan-200",
    icon: "Ai",
    title: "Smart Navigation",
    content: "AI-powered search & nav logic.",
  },
};
