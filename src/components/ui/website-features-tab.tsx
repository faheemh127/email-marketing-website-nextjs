"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import Image from "next/image";

const tabsData = [
  {
    id: "setup",
    label: "Free Automated Set Up",
    title: "Effortless Email Setup in Minutes",
    description:
      "Get your email infrastructure running with zero configuration. Our automated system handles DNS records, authentication, and deliverability settings so you can focus on your business.",
    image: "/desktop.jpeg",
  },
  {
    id: "dns",
    label: "Bulk DNS Updates",
    title: "Manage Multiple Domains at Once",
    description:
      "Update DNS records across hundreds of domains simultaneously. Our bulk management tools save you hours of manual work while ensuring accuracy and consistency.",
    image: "/desktop.jpeg",
  },
  {
    id: "transfer",
    label: "Domain Transferring",
    title: "Seamless Domain Migration",
    description:
      "Transfer domains between registrars with confidence. Our guided process ensures zero downtime and maintains all your existing email and web configurations.",
    image: "/desktop.jpeg",
  },
  {
    id: "workspaces",
    label: "Multiple Workspaces",
    title: "Organize Teams and Projects",
    description:
      "Create separate workspaces for different teams, clients, or projects. Each workspace maintains its own settings, users, and domain configurations for perfect organization.",
    image: "/desktop.jpeg",
  },
  {
    id: "software",
    label: "Works With Any Sending Software",
    title: "Universal Email Platform Integration",
    description:
      "Connect with your favorite email tools including Mailchimp, SendGrid, ConvertKit, and more. Our platform works seamlessly with any email sending software you prefer.",
    image: "/desktop.jpeg",
  },
  {
    id: "ssl",
    label: "SSL & Domain Masking",
    title: "Enterprise-Grade Security",
    description:
      "Protect your domains with automatic SSL certificates and advanced masking features. Keep your infrastructure secure while maintaining professional email deliverability.",
    image: "/desktop.jpeg",
  },
];

export const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);
  const activeTabData =
    tabsData.find((tab) => tab.id === activeTab) || tabsData[0];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Tabs Grid */}
        <div className="grid grid-cols-3 gap-4 mb-16 max-w-4xl mx-auto">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-4 rounded-lg text-center transition-all duration-300 border-2 ${
                activeTab === tab.id
                  ? "border-primary bg-primary/5 text-primary shadow-lg scale-105"
                  : "border-border bg-card hover:border-primary/30 hover:bg-primary/5 text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="font-medium text-sm">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Section */}
        <Card className="p-8 shadow-xl border-0 bg-card/80 backdrop-blur-sm">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground leading-tight">
                {activeTabData.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {activeTabData.description}
              </p>
              <Button variant="default" size="lg" className="mt-6">
                Get Started
              </Button>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-xl blur-xl"></div>
              <Image
                src={activeTabData.image}
                alt={activeTabData.title}
                width={800} // adjust according to your layout
                height={600} // adjust according to your layout
                className="relative w-full h-auto rounded-xl shadow-2xl border border-border/50"
                priority // optional: preload for performance
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
