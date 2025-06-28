"use client"
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 ">
      <button
        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 rounded-xl transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-900 leading-relaxed">
          {question}
        </h3>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </div>
      </button>
      
      {isOpen && (
        <div className="px-6 pb-5">
          <div className="pt-2 border-t border-gray-100">
            <p className="text-gray-700 leading-relaxed mt-3">
              {answer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQItem;