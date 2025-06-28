import { MessageCircle } from "lucide-react";
import FAQItem from "./website-faq-item";

const FAQ = () => {
  const faqData = [
    {
      question: "What is Mailforge, and how does it compare to other tools?",
      answer: "Mailforge is a comprehensive email management platform that stands out from other tools with its advanced automation capabilities, intuitive interface, and robust deliverability features. Unlike traditional email tools, Mailforge offers seamless domain management, intelligent routing, and enterprise-grade security in one unified platform."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to get started. You can explore all of Mailforge's capabilities and see how it fits your needs before making any commitment."
    },
    {
      question: "Does Mailforge have an automatic DNS set up for my domains?",
      answer: "Absolutely! Mailforge includes automatic DNS configuration for your domains. Our system handles all the technical setup including SPF, DKIM, and DMARC records, ensuring optimal deliverability and security without any manual configuration required."
    },
    {
      question: "What's included in my subscription?",
      answer: "Your Mailforge subscription includes unlimited email sending, advanced analytics, automatic DNS setup, 24/7 customer support, team collaboration tools, custom domain management, and access to all premium features. Higher tier plans include additional storage, priority support, and advanced integrations."
    },
    {
      question: "How many domains & mailboxes do I need?",
      answer: "The number of domains and mailboxes you need depends on your business size and email strategy. Most small businesses start with 1-2 domains and 5-10 mailboxes. We recommend starting with your immediate needs and scaling up as your business grows. Our flexible plans make it easy to add more domains and mailboxes anytime."
    }
  ];

  return (
    <div className="w-full container mx-auto my-20 max-w-7xl">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h1>
        <div className="flex items-center justify-center gap-2 text-gray-600 text-lg">
          <MessageCircle className="w-5 h-5" />
          <p>If we don&apos;t answer your question below, please contact us via chat</p>
        </div>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-16 text-center">
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you get the most out of Mailforge.
          </p>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;