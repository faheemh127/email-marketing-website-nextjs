import React from 'react';

const BrandsSection = () => {
  const brands = [
    { name: 'Instantly', logo: 'instantly' },
    { name: 'Smartlead.ai', logo: 'smartlead' },
    { name: 'Apollo.io', logo: 'apollo' },
    { name: 'Quickmail', logo: 'quickmail' },
    { name: 'Reply', logo: 'reply' },
    { name: 'Lemlist', logo: 'lemlist' },
    { name: 'Success', logo: 'success' },
  ];

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join thousands of companies already using our platform to scale their outreach
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-12">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="group flex items-center justify-center p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:bg-gray-900/80 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-gray-700 to-gray-600 rounded-lg flex items-center justify-center group-hover:from-gray-600 group-hover:to-gray-500 transition-all duration-300">
                  <span className="text-white font-bold text-sm">
                    {brand.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-sm group-hover:text-gray-200 transition-colors duration-300">
                  {brand.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* +99 Others Badge */}
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 px-8 py-4 rounded-full border border-gray-600">
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-500 rounded-full border-2 border-gray-800 flex items-center justify-center"
                  >
                    <span className="text-white text-xs font-semibold">
                      {String.fromCharCode(65 + i)}
                    </span>
                  </div>
                ))}
              </div>
              <span className="text-white font-semibold text-lg">+99 Others</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">10K+</div>
            <div className="text-gray-400">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">50M+</div>
            <div className="text-gray-400">Emails Sent</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;