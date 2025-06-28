import { EmailSignup } from './email-signup';
import { CheckCircle, Mail, Shield, Server, Globe } from 'lucide-react';

const Hero = () => {
  const features = [
    {
      icon: <Mail className="w-5 h-5" />,
      text: "Cold Email Campaigns"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      text: "Active Domains"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: "SSL Certificates"
    },
    {
      icon: <Server className="w-5 h-5" />,
      text: "Shared IP Pools"
    }
  ];

  const services = [
    "Active Domains & SSL Certificates",
    "Mailbox Slots & Active Mailboxes",
    "Shared IP Addresses",
    "Advanced Email Analytics",
    "Compliance & Deliverability Tools"
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-medium">AI-Powered Email Marketing Platform</span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Scale Your Business with
              <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-white bg-clip-text text-transparent">
                Smart Cold Email
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Launch high-converting email campaigns with our enterprise-grade infrastructure. 
              Get active domains, SSL certificates, and premium mailbox slots to maximize your reach.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30 hover:bg-white/30 transition-all duration-300"
                >
                  <div className="text-blue-200">
                    {feature.icon}
                  </div>
                  <span className="text-white text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Two column layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Services */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Everything You Need to Succeed
              </h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column - Signup form */}
            <div className="lg:pl-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Start Your Campaign Today
                  </h3>
                  <p className="text-blue-100">
                    Join thousands of businesses scaling with our platform
                  </p>
                </div>
                <EmailSignup />
                
                {/* Trust indicators */}
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center justify-center gap-6 text-blue-200 text-sm">
                    <div className="flex items-center gap-1">
                      <Shield className="w-4 h-4" />
                      <span>Enterprise Security</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      <span>99.9% Uptime</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10M+', label: 'Emails Delivered' },
              { number: '50K+', label: 'Active Users' },
              { number: '99.9%', label: 'Deliverability Rate' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;