import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy on all our products. Please ensure the product is unused and in its original packaging.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship worldwide! International shipping costs will vary depending on your location.",
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you will receive a tracking number via email to track your package.",
    },
    {
      question: "Can I cancel or modify my order?",
      answer: "Orders can be modified or canceled within 24 hours of placing the order. Please contact us as soon as possible.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 px-6 sm:px-12 lg:px-24 bg-gray-50">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg transition-all duration-300"
          >
            <div
              className="flex justify-between items-center p-6 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {faq.question}
              </h3>
              <span className="text-2xl text-gray-500">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <div className="p-6 border-t border-gray-200">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
