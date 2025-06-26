import React, { useState } from "react";
import faq from "../assets/FAQ.png";

const faqData = [
  {
    question: "How does it work?",
    answer:
      "Wholesome serves healthy, nutritionally balanced meals designed by certified nutritionists and prepared by trained chefs. We deliver up to three meals a day (Lunch, Evening Snack and Dinner) to your home or office. We deliver from Monday to Saturday!",
  },
  {
    question: "What are the subscription tiers?",
    answer:
      "We offer flexible weekly, bi-weekly, and monthly plans with customizable meal choices.",
  },
  {
    question: "Do you deliver meals on weekends?",
    answer:
      "We currently deliver from Monday to Saturday. Sundays are non-delivery days.",
  },
  {
    question: "Where do you deliver?",
    answer:
      "We deliver across major areas in Hyderabad. You can check your location at the time of subscription.",
  },
  {
    question:
      "Can I opt for only lunch/dinner, only on certain days of the week?",
    answer:
      "Yes, you can customize your subscription to receive meals only on selected days or times.",
  },
  {
    question: "What if I have allergies or dietary restrictions?",
    answer:
      "Let us know your restrictions at the time of ordering. We will try to accommodate your needs.",
  },
  {
    question: "Can I skip/pause meals on certain days if I am travelling?",
    answer:
      "Yes, you can pause or skip deliveries from your dashboard with prior notice.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-stretch gap-10">
        <div className="w-full md:w-1/3 hidden md:flex">
          <img
            src={faq}
            alt="FAQ"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="p-10 w-full md:w-2/3 flex flex-col justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 text-center md:text-left mb-6">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-300 pb-2 transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left flex justify-between items-center font-semibold text-[17px]"
                >
                  <span
                    className={`${
                      openIndex === index ? "text-black underline" : ""
                    }`}
                  >
                    {item.question}
                  </span>
                  <span className="text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-gray-600 text-l leading-relaxed pr-4">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden md:block w-full border-t border-gray-300"></div>
    </div>
  );
};

export default FAQ;
