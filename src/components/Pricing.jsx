import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "29.99",
    description: "Perfect for individuals and small teams",
    features: [
      "Up to 5 team members",
      "10GB storage",
      "Basic analytics",
      "Email support",
      "API access",
      "Mobile app",
    ],
    mostPopular: false,
  },
  {
    name: "Professional",
    price: "79.99",
    description: "Best for growing businesses",
    features: [
      "Up to 25 team members",
      "100GB storage",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Mobile app",
      "Custom integrations",
      "Advanced security",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    price: "199.99",
    description: "For large organizations",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Enterprise analytics",
      "24/7 phone support",
      "API access",
      "Mobile app",
      "Custom integrations",
      "Advanced security",
      "Dedicated account manager",
      "Custom SLA",
    ],
    mostPopular: false,
  },
];
const Pricing = () => {
  return (
    <section
      id="section"
      className="relative px-10 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center sm:mb-16 lg:mb-20">
          <h2 className="mb-4 text-5xl font-bold sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="bg-linear-to-b from-white to-gray-300 bg-clip-text text-transparent capitalize">
              simple,transparent
            </span>
            <br />
            <span className="bg-linear-to-b from-blue-400 to-cyan-300 bg-clip-text text-transparent capitalize">
              pricing plans
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-300 sm:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            laudantium qui. Quasi adipisci nobis esse ut. Vero expedita dolore
            quaerat?
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {plans.map((plan, key) => (
            <div
              key={key}
              className={`transform-all group relative flex h-full flex-col overflow-visible rounded-xl bg-slate-900/50 p-6 backdrop-blur-sm duration-300 sm:rounded-2xl sm:p-8 ${plan.mostPopular ? "border border-blue-500 shadow-2xl shadow-blue-500/20 lg:scale-105" : "border border-slate-800 hover:border-slate-700"}`}
            >
              {plan.mostPopular && (
                <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 transform">
                  <div className="roundfb flex items-center space-x-1 rounded-full bg-linear-to-b from-blue-500 to-cyan-500 px-3 py-1 text-xs font-semibold shadow-lg sm:px-4 sm:py-1.5 sm:text-sm">
                    <Star className="h-3 w-3 fill-white sm:h-3 sm:w-3" />
                    <span>most popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text 
                  text-transparent"
                  >
                    ${plan.price}
                  </span>
                  <span className="text-gray-400 ml-1 sm:ml-2 text-sm sm:text-base">
                    /month
                  </span>
                </div>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-row">
                {plan.features.map((feature, featureKey) => (
                  <li
                    key={featureKey}
                    className="flex items-start space-x-2 sm:space-x-3"
                  >
                    <div className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400" />
                    </div>
                    <span className="text-gray-300 text-sm sm:text-base">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-300 mt-auto hover:scale-102 cursor-pointer text-sm sm:text-base ${
                  plan.mostPopular
                    ? "bg-gradient-to-b from-blue-500 to-cyan-500"
                    : "bg-white/5 border border-white/10 hover:bg-white/10"
                }`}
              >
                Get Started
              </button>
              </div>
              
            </div>
          ))}
        </div>
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-gray-400 text-base text-xl">
            Need a custom plan?{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Pricing;
