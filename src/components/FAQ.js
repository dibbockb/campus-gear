"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";

const faqs = [
    {
        question: "How long does delivery take?",
        answer: "We offer same-day delivery for Chittagong & Dhaka! For other areas within Bangladesh, it typically takes 1-3 business days. We prioritize campus deliveries to ensure you get your gear before your next class."
    },
    {
        question: "Can I pay with cash on delivery?",
        answer: "Absolutely! We understand student life. You can inspect your gear upon arrival and pay cash. No advance payment needed for most campus locations."
    },
    {
        question: "What if I get a defective product?",
        answer: "No worries! We have a 7-day replacemnt policy. If your gear has any manufacturing issues, just let us know within 7 days and we'll swap it out instantly, no questions asked."
    },
    {
        question: "Is there a warranty on products?",
        answer: "Yes, most of our electronics (like earbuds and power banks) come with a minimum 6-month official warranty. Check the specific product page for exact warranty details."
    },
    {
        question: "Do you offer further student discounts?",
        answer: "Our prices are already student-optimized to be the lowest in the market! However, we do run monthly flash sales and offer 'Roommate Bundles'—extra discounts if you order 3+ items together."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 px-4 bg-background relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 -right-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-surface rounded-2xl overflow-hidden transition-all duration-300 border ${openIndex === index ? 'border-primary shadow-lg ring-1 ring-primary/20' : 'border-primary/5 shadow-sm hover:shadow-md'}`}
                        >
                            <button
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="flex items-center gap-4">
                                    <span className={`text-2xl ${openIndex === index ? 'text-primary' : 'text-gray-400'}`}>
                                        <FaQuestionCircle />
                                    </span>
                                    <span className={`text-lg font-bold text-foreground ${openIndex === index ? 'text-primary' : ''}`}>
                                        {faq.question}
                                    </span>
                                </div>
                                <div className={`p-2 rounded-full transition-colors duration-300 ${openIndex === index ? 'bg-primary/10 text-primary' : 'bg-transparent text-gray-400'}`}>
                                    {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                </div>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-6 pt-0 text-black dark:text-gray-300 leading-relaxed border-t border-primary/5 mx-6 mt-2">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
