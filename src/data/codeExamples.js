const codeExamples = {
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
        onAI={handleAIC ompletion} 
      />
    </div>
  ); `,

  "Hero.jsx": `import { useState } from "react";
import { CodeFlow } from "@codeflow/ai";

function Hero() {
  const [code, setCode] = useState("");

  const handleAICompletion = async () => {
    const suggestion = await CodeFlow.complete(code);
    setCode(suggestion);
  };

  return (
    <div className="app">
      <CodeEditor 
        onChange={setCode} 
        onAI={handleAIC ompletion} 
      />
    </div>
  ); `,

  "Navbar.jsx": `import { useState } from "react";
import { CodeFlow } from "@codeflow/ai";

function Navbar() {
  const [code, setCode] = useState("");

  const handleAICompletion = async () => {
    const suggestion = await CodeFlow.complete(code);
    setCode(suggestion);
  };

  return (
    <div className="app">
      <CodeEditor 
        onChange={setCode} 
        onAI={handleAIC ompletion} 
      />
    </div>
  ); `,
};
export default codeExamples;
