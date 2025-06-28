import React from 'react';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$47",
      description: "Perfect for small businesses getting started",
      features: [
        "Generate Up To 25 Email Inboxes",
        "Get Domains Easily Inside",
        "Fast & Easy 5-Minute Setup",
        "Basic Email Sending Tools"
      ],
      benefits: [
        "Save 6+ hours",
        "Save $1,590/year compared to alternatives"
      ],
      isRecommended: false,
      targetAudience: "5-15 sales calls a month"
    },
    {
      name: "Professional",
      price: "$95",
      description: "If you're looking to book 10-30 sales calls a month with a normal target market size.",
      features: [
        "Generate Up To 50 Email Inboxes",
        "Get Domains Easily Inside",
        "Fast & Easy 5-Minute Setup",
        "Plug Them Into Any Email Sending Tool"
      ],
      benefits: [
        "Save 12+ hours",
        "Save $3,180/year compared to Google/Outlook"
      ],
      isRecommended: true,
      targetAudience: "Recommended plan to contact up to ~10,000 prospects a month"
    },
    {
      name: "Enterprise",
      price: "$195",
      description: "For large teams and high-volume campaigns",
      features: [
        "Generate Up To 100 Email Inboxes",
        "Get Domains Easily Inside",
        "Fast & Easy 5-Minute Setup",
        "Advanced Email Sending Tools",
        "Priority Support"
      ],
      benefits: [
        "Save 25+ hours",
        "Save $6,360/year compared to enterprise solutions"
      ],
      isRecommended: false,
      targetAudience: "50+ sales calls a month"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Scale your outreach with our powerful email infrastructure. 
            Save time and money while reaching more prospects than ever before.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                plan.isRecommended
                  ? 'bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 shadow-2xl shadow-indigo-500/20 border-2 border-indigo-400'
                  : 'bg-gray-900 border border-gray-800 hover:border-gray-700'
              }`}
            >
              {/* Recommended Badge */}
              {plan.isRecommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold">
                    RECOMMENDED
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">/monthly</span>
                </div>
                <p className="text-gray-300 text-sm mb-4">{plan.targetAudience}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{plan.description}</p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-lg">What&apos;s included</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-lg">Benefits</h4>
                <ul className="space-y-3">
                  {plan.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  plan.isRecommended
                    ? 'bg-white text-indigo-600 hover:bg-gray-100 shadow-lg'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700 border border-indigo-600'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Need a custom solution? We&apos;ve got you covered.
          </p>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;