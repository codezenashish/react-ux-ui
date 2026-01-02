import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const features = [
  {
    title: "Our Features",
    description:
      "Discover the amazing features that make our product stand out.",
    codeSnippet: `function handleSubmit(){
    //ai suggests next line
    const data = await fetch("api/submit")
    // Auto-completed by AI
}`,
    imagePosition: "right",
  },
  {
    title: "Smart Suggestions",
    description: "Get real-time AI suggestions while you type your code.",
    codeSnippet: `function handleSubmit(){
    //ai suggests next line
    const data = await fetch("api/submit")
    // Auto-completed by AI
}`,
    imagePosition: "left", // Maine position change ki hai diversity ke liye
  },
  {
    title: "Cloud Sync",
    description: "Sync your projects across all your devices instantly.",
    codeSnippet: `function handleSubmit(){
    //ai suggests next line
    const data = await fetch("api/submit")
    // Auto-completed by AI
}`,
    imagePosition: "right",
  },
  {
    title: "Fast Deployment",
    description: "Deploy your applications with just a single click.",
    codeSnippet: `function handleSubmit(){
    //ai suggests next line
    const data = await fetch("api/submit")
    // Auto-completed by AI
}`,
    imagePosition: "left",
  },
];
const Features = () => {
  return (
    <section
      id="features"
      className="relative px-10 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center sm:mb-16 lg:mb-20">
          <h2 className="mb-4 text-5xl font-bold sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="bg-linear-to-b from-white to-gray-300 bg-clip-text text-transparent capitalize">
              development toolkit
            </span>
            <br />
            <span className="bg-linear-to-b from-blue-400 to-cyan-300 bg-clip-text text-transparent capitalize">
              features your productivity
            </span>
          </h2>
        </div>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="space-y-16 sm:space-y-20 lg:space-y-32">
          {features.map((feature, key) => {
            return (
              <div
                key={key}
                className={`flex flex-col items-center gap-8 sm:gap-12 lg:flex-row ${feature.imagePosition === "right" ? "lg:flex-row-reverse" : ""} `}
              >
                {/* code section */}
                <div className="w-full flex-1">
                  <div className="group relative">
                    <div className="relative rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl sm:rounded-2xl sm:p-4">
                      {/* id inter face */}
                      <div className="rounded-lg bg-gray-950 p-3 font-mono text-xs sm:p-4 sm:text-sm">
                        <div className="sm: mb-3 flex items-center space-x-1 sm:space-x-2">
                          <div className="flex items-center space-x-1 sm:space-x-2">
                            <div className="h-2 w-2 rounded-full bg-red-500 sm:h-3 sm:w-3"></div>
                            <div className="h-2 w-2 rounded-full bg-yellow-500 sm:h-3 sm:w-3"></div>
                            <div className="h-2 w-2 rounded-full bg-green-500 sm:h-3 sm:w-3"></div>
                          </div>
                          <span className="ml-2 text-xs text-gray-400 sm:ml-4 sm:text-sm">
                            {feature.title}
                          </span>
                        </div>
                        <div className="">
                          <SyntaxHighlighter
                            language="javascript"
                            style={nightOwl}
                            customStyle={{
                              margin: 0,
                              background: "transparent",
                              borderRadius: "8px",
                              fontSize: "0.75rem",
                              lineHeight: "1.4",
                              height: "100%",
                            }}
                            wrapLines={true}
                          >
                            {feature.codeSnippet}
                          </SyntaxHighlighter>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* text section */}
                <div className="w-full flex-1">
                  <div className="mx-auto max-w-lg text-center lg:mx-auto lg:text-left">
                    <h3 className="mb-4 text-4xl font-bold text-white sm:mb-6 sm:text-3xl lg:text-4xl">
                      {feature.title}
                    </h3>
                    <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Features;
