const features = [
  {
    title: "Our Features",
    description:
      "Discover the amazing features that make our product stand out.",
    image: "code-completion",
    imagePosition: "right",
  },
  {
    title: "Smart Suggestions",
    description: "Get real-time AI suggestions while you type your code.",
    image: "ai-suggestions",
    imagePosition: "left", // Maine position change ki hai diversity ke liye
  },
  {
    title: "Cloud Sync",
    description: "Sync your projects across all your devices instantly.",
    image: "cloud-sync",
    imagePosition: "right",
  },
  {
    title: "Fast Deployment",
    description: "Deploy your applications with just a single click.",
    image: "deployment",
    imagePosition: "left",
  },
];
const Features = () => {
  return (
    <section
      id="features"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className=" text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-linear-to-b from-white to-gray-300 bg-clip-text text-transparent">
              your complete development toolkit
            </span>
            <br />
            <span className="bg-linear-to-b from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              features that boost your productivity
            </span>
          </h2>
        </div>
      </div>

      <div className="space-y-16 sm:space-y-20 lg:space-y-32">
        {features.map((feature, key) => {
          return <div key={key} className="">
            {/* code section */}
            <div>
              <div>
                {/* id inter face */}
                <div>
                  <div>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 "></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500 "></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 "></div>
                    </div>
                    <span>
                      {feature.title}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>;
        })}
      </div>
    </section>
  );
};
export default Features;
