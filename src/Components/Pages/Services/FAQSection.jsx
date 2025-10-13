import React, { useState } from 'react';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [hoverIndex, setHoverIndex] = useState(null);

    const faqs = [
        {
            question: "How far in advance should we book?",
            answer: "We recommend booking 3-6 months in advance for weddings to ensure availability, and 2-4 weeks for other photography sessions. For peak season weddings, we suggest booking 8-12 months ahead."
        },
        {
            question: "Do you provide raw photos?",
            answer: "We deliver professionally edited high-resolution JPEGs with our signature style. Raw files are available upon request for an additional fee, as we believe in delivering only the best curated and edited images."
        },
        {
            question: "What's your cancellation policy?",
            answer: "We offer flexible rescheduling options. Cancellations made 30+ days before the scheduled date receive a full refund. Between 15-30 days, we offer 50% refund. Less than 15 days, we provide credit for future services."
        },
        {
            question: "Do you travel for shoots?",
            answer: "Absolutely! We love destination photography and have traveled to over our  countries. Travel costs are calculated based on location and include accommodation, transportation, and per diem expenses."
        },
        {
            question: "How long until we receive our photos?",
            answer: "Typically, wedding photos are delivered within 4-6 weeks, while portrait sessions take 2-3 weeks. We provide sneak peeks within 48 hours to share on social media!"
        },
        {
            question: "What equipment do you use?",
            answer: "We use professional-grade Canon R5 and Sony A7IV cameras with premium L-series lenses. We always carry backup equipment and use professional lighting for consistent quality in any condition."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="py-20 bg-gradient-to-br from-slate-50 to-purple-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-pulse">
                        <span>❓</span>
                        Common Questions
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Everything you need to know about our photography services
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full"></div>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-white/50 transition-all duration-500 overflow-hidden ${hoverIndex === index ? 'transform hover:-translate-y-1' : ''
                                } ${openIndex === index ? 'ring-2 ring-purple-200 bg-purple-50/50' : ''
                                }`}
                            onMouseEnter={() => setHoverIndex(index)}
                            onMouseLeave={() => setHoverIndex(null)}
                        >
                            {/* Question Button */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-6 text-left flex items-center justify-between group transition-all duration-300"
                            >
                                <div className="flex items-start space-x-4">
                                    {/* Question Number */}
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${openIndex === index
                                        ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white'
                                        : 'bg-gray-100 text-gray-600 group-hover:bg-purple-100 group-hover:text-purple-600'
                                        }`}>
                                        {index + 1}
                                    </div>

                                    {/* Question Text */}
                                    <h3 className={`text-sm md:text-lg font-semibold transition-all duration-300 ${openIndex === index
                                        ? 'text-purple-700'
                                        : 'text-gray-800 group-hover:text-purple-600'
                                        }`}>
                                        {faq.question}
                                    </h3>
                                </div>

                                {/* Animated Icon */}
                                <div className={`flex-shrink-0 w-6 h-6 transform transition-all duration-500 ${openIndex === index ? 'rotate-180 text-purple-600' : 'text-gray-400 group-hover:text-purple-500'
                                    }`}>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>

                            {/* Answer Container with Smooth Animation */}
                            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <div className="px-6 pb-6">
                                    <div className="flex space-x-4">
                                        {/* Vertical Line */}
                                        <div className="flex-shrink-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full ml-4"></div>

                                        {/* Answer Text */}
                                        <div className="flex-1">
                                            <p className="text-gray-600 leading-relaxed text-xs md:text-lg">{faq.answer}</p>

                                            {/* Additional Info Based on Question */}
                                            {index === 0 && (
                                                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                                                    <div className="flex items-center text-sm text-blue-700">
                                                        <span className="mr-2">💡</span>
                                                        <span><strong>Pro Tip:</strong> Saturday dates book fastest!</span>
                                                    </div>
                                                </div>
                                            )}

                                            {index === 3 && (
                                                <div className="mt-4 flex items-center text-sm text-green-600">
                                                    <span className="mr-2">✈️</span>
                                                    <span><strong>Popular destinations:</strong>Bangladeshi All district</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Border Animation */}
                            <div className={`h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left transition-transform duration-700 ${openIndex === index ? 'scale-x-100' : 'scale-x-0'
                                }`}></div>
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="text-center mt-12">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Still have questions?
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            We're here to help! Get in touch with our team for personalized answers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                                <span className="mr-2">💬</span>
                                Contact Us
                            </button>
                            <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:border-purple-400 hover:text-purple-700 transition-all duration-300">
                                Schedule a Call
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Animation Styles */}
            <style jsx>{`
        .transition-max-height {
          transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Smooth scrolling for the entire section */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
        </div>
    );
};

export default FAQSection;