"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, User, LogIn } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Pricing", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Affiliates", href: "#" },
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
          <div className="hidden md:flex items-center justify-center space-x-8">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Login Button */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <Button
              variant="ghost"
              className="text-gray-700 hover:text-primary"
            >
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button> */}
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <LogIn className="w-4 h-4" />
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
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

                  {/* Mobile Navigation Items */}
                  <div className="space-y-4">
                    {navItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 text-gray-700 hover:text-primary transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>

                  {/* Mobile Login Buttons */}
                  <div className="space-y-3 pt-6 border-t border-gray-200">
                    <Button variant="outline" className="w-full justify-start">
                      <User className="w-4 h-4 mr-2" />
                      Sign In
                    </Button>
                    <Button className="w-full justify-start bg-primary hover:bg-primary/90 text-white">
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
