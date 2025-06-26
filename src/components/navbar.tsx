"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, User, LogIn } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const megaMenuItems = [
    {
      title: "Products",
      items: [
        {
          name: "Web Development",
          description: "Build modern web applications",
        },
        { name: "Mobile Apps", description: "iOS and Android development" },
        { name: "E-commerce", description: "Online store solutions" },
        { name: "Analytics", description: "Data insights and reporting" },
      ],
    },
    {
      title: "Solutions",
      items: [
        { name: "For Startups", description: "Scale your business quickly" },
        { name: "For Enterprise", description: "Enterprise-grade solutions" },
        { name: "For Agencies", description: "White-label offerings" },
        { name: "For Developers", description: "Developer tools and APIs" },
      ],
    },
    {
      title: "Resources",
      items: [
        { name: "Documentation", description: "Complete guides and tutorials" },
        { name: "Blog", description: "Latest insights and updates" },
        { name: "Case Studies", description: "Success stories from clients" },
        { name: "Support", description: "Get help when you need it" },
      ],
    },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="text-2xl font-bold text-primary">Logo</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[800px] p-6">
                      <div className="grid grid-cols-3 gap-8">
                        {megaMenuItems.map((category, idx) => (
                          <div key={idx} className="space-y-4">
                            <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                              {category.title}
                            </h3>
                            <ul className="space-y-3">
                              {category.items.map((item, itemIdx) => (
                                <li key={itemIdx}>
                                  <a
                                    href="#"
                                    className="block group hover:bg-gray-50 rounded-lg p-3 transition-colors duration-200"
                                  >
                                    <div className="font-medium text-gray-900 group-hover:text-primary transition-colors duration-200">
                                      {item.name}
                                    </div>
                                    <div className="text-sm text-gray-500 mt-1">
                                      {item.description}
                                    </div>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    Contact
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop Login Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-primary"
            >
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <LogIn className="w-4 h-4 mr-2" />
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTitle className="hidden">Navbar</SheetTitle>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="py-6 space-y-6">
                  <div className="text-2xl font-bold text-primary">Logo</div>

                  {/* Mobile Menu Items */}
                  <div className="space-y-4">
                    {megaMenuItems.map((category, idx) => (
                      <div key={idx} className="space-y-3">
                        <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide border-b border-gray-200 pb-2">
                          {category.title}
                        </h3>
                        <ul className="space-y-2 pl-4">
                          {category.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <a
                                href="#"
                                className="block py-2 text-gray-700 hover:text-primary transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Mobile Login Buttons */}
                  <div className="space-y-3 pt-6 border-t border-gray-200">
                    <Button variant="outline" className="w-full justify-start">
                      <User className="w-4 h-4 mr-2" />
                      Sign In
                    </Button>
                    <Button className="w-full justify-start bg-primary hover:bg-primary/90">
                      <LogIn className="w-4 h-4 mr-2" />
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
