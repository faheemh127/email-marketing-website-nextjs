import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, Calendar, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Small Heading */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              $3 to $2 per mailbox per month
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Get Started With{' '}
              <span className="text-blue-600">Cold Email Infrastructure</span>{' '}
              Ready In Minutes
            </h1>

            {/* Sub Heading */}
            <p className="text-xl text-gray-600 leading-relaxed">
              Create hundreds of domains and mailboxes using a distributed email infrastructure 
              with excellent deliverability and free automated setup. Cold outreach made easy!
            </p>

            {/* Email Input */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 h-12 text-base"
              />
              <Button className="h-12 px-8 bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </div>

            {/* Demo Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="h-12 px-6">
                <Play className="w-4 h-4 mr-2" />
                Watch demo video
              </Button>
              <Button variant="outline" className="h-12 px-6">
                <Calendar className="w-4 h-4 mr-2" />
                Book demo
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="ml-1 font-semibold text-gray-900">4.9</span>
                </div>
                <p className="text-sm text-gray-600">Rating</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-900">Automated</p>
                <p className="text-sm text-gray-600">DNS Set Up</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-900">Premium</p>
                <p className="text-sm text-gray-600">Deliverability</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-900">Ready In</p>
                <p className="text-sm text-gray-600">5 Mins</p>
              </div>
            </div>

            <div className="text-center sm:text-left pt-4">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">1K+</span> Community
              </p>
            </div>
          </div>

          {/* Right SVG Animation */}
          <div className="relative">
            <svg
              viewBox="0 0 600 600"
              className="w-full h-auto max-w-lg mx-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Animated Background Glow */}
              <defs>
                <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1">
                    <animate attributeName="stop-opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                </radialGradient>
                
                <filter id="shine">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Background Glow */}
              <circle cx="300" cy="300" r="200" fill="url(#glow)" />

              {/* Central Email Icon */}
              <g transform="translate(300, 300)">
                <rect
                  x="-40"
                  y="-30"
                  width="80"
                  height="60"
                  rx="8"
                  fill="#3B82F6"
                  filter="url(#shine)"
                >
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    values="1;1.1;1"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </rect>
                <path
                  d="M-40 -30 L0 0 L40 -30"
                  stroke="white"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>

              {/* Animated Lines to Stats */}
              {[
                { x: 150, y: 150, angle: -45 },
                { x: 450, y: 150, angle: 45 },
                { x: 500, y: 300, angle: 0 },
                { x: 450, y: 450, angle: 135 },
                { x: 150, y: 450, angle: -135 }
              ].map((point, index) => (
                <g key={index}>
                  <line
                    x1="300"
                    y1="300"
                    x2={point.x}
                    y2={point.y}
                    stroke="#3B82F6"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    opacity="0.6"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;-10"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </line>
                  
                  {/* Glowing dots moving along lines */}
                  <circle r="4" fill="#60A5FA" filter="url(#shine)">
                    <animateMotion dur="3s" repeatCount="indefinite">
                      <mpath href={`#path${index}`} />
                    </animateMotion>
                  </circle>
                  
                  <path id={`path${index}`} d={`M300,300 L${point.x},${point.y}`} opacity="0" />
                </g>
              ))}

              {/* Stats Boxes */}
              {[
                { x: 150, y: 150, title: "144", subtitle: "Active Domains" },
                { x: 450, y: 150, title: "16", subtitle: "SSL Domains" },
                { x: 500, y: 300, title: "2000", subtitle: "Mailbox Slots" },
                { x: 450, y: 450, title: "574", subtitle: "Active Mailboxes" },
                { x: 150, y: 450, title: "∞", subtitle: "Shared IPs" }
              ].map((stat, index) => (
                <g key={index} transform={`translate(${stat.x}, ${stat.y})`}>
                  <rect
                    x="-50"
                    y="-25"
                    width="100"
                    height="50"
                    rx="8"
                    fill="white"
                    stroke="#E5E7EB"
                    strokeWidth="1"
                    filter="url(#shine)"
                  >
                    <animate
                      attributeName="y"
                      values="-25;-28;-25"
                      dur="2s"
                      begin={`${index * 0.5}s`}
                      repeatCount="indefinite"
                    />
                  </rect>
                  <text
                    x="0"
                    y="-5"
                    textAnchor="middle"
                    className="text-lg font-bold"
                    fill="#1F2937"
                  >
                    {stat.title}
                  </text>
                  <text
                    x="0"
                    y="10"
                    textAnchor="middle"
                    className="text-xs"
                    fill="#6B7280"
                  >
                    {stat.subtitle}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;