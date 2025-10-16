import React, { useState } from 'react';
import ConsultationBanner from './ConsultationBanner';


// === ২. হোয়াটসঅ্যাপ লিঙ্ক তৈরি করার ফাংশন ===
const generateWhatsAppLink = (data) => {
    // *** গুরুত্বপূর্ণ: আপনার WhatsApp নম্বরটি এখানে আন্তর্জাতিক ফরম্যাটে বসান (যেমন: 8801712345678)। *** // '+' চিহ্ন বা '00' ব্যবহার করবেন না।
    const ownerNumber = "8801747365915";

    // WhatsApp-এ যাওয়ার জন্য মেসেজটি তৈরি করা হচ্ছে
    const message = `👋 নতুন কনসাল্টেশন বুকিং! (ওয়েবসাইট থেকে)
    
    👤 নাম: ${data.name}
    📧 ইমেল: ${data.email}
    📱 ফোন: ${data.phone || 'দেওয়া হয়নি'}
    🛠️ সার্ভিস: ${data.service}
    📅 ইভেন্টের তারিখ: ${data.eventDate || 'দেওয়া হয়নি'}
    💬 মেসেজ: ${data.message || 'নেই'}`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${ownerNumber}?text=${encodedMessage}`;
};


// === ৩. মূল বুক কনসাল্টেশন কম্পোনেন্ট ===
const BookConsultation = () => {
    // ফর্ম সাবমিট সফল হয়েছে কিনা তা ট্র্যাক করার জন্য স্টেট
    const [isSuccess, setIsSuccess] = useState(false);

    // ফর্মের ডেটা হ্যান্ডেল করার জন্য স্টেট
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        eventDate: '',
        message: '',
    });

    // ক্লায়েন্ট-সাইড ভ্যালিডেশনের জন্য স্টেট
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // ইনপুট পরিবর্তনের সময় স্টেট আপডেট করা
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        // যখনই ইউজার টাইপ করবে, তখনই সেই ফিল্ডের এরর মুছে দেওয়া
        if (errors[name]) {
            setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
        }
    };

    // ক্লায়েন্ট-সাইড ভ্যালিডেশন লজিক
    const validate = () => {
        let tempErrors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            tempErrors.name = "আপনার নাম লিখুন।";
            isValid = false;
        }
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "সঠিক ইমেল ঠিকানা প্রয়োজন।";
            isValid = false;
        }
        if (!formData.service) {
            tempErrors.service = "সার্ভিসের ধরণ নির্বাচন করুন।";
            isValid = false;
        }

        // ইভেন্টের তারিখ ঐচ্ছিক, কিন্তু যদি তারিখ দেওয়া থাকে এবং তা অতীত তারিখ হয়
        if (formData.eventDate) {
            const today = new Date().toISOString().split('T')[0];
            if (formData.eventDate < today) {
                tempErrors.eventDate = "অতীতের তারিখ নির্বাচন করা যাবে না।";
                isValid = false;
            }
        }

        setErrors(tempErrors);
        return isValid;
    };


    // ফর্ম সাবমিট হ্যান্ডেল করা: Formspree API (ইমেলের জন্য)
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        setIsSubmitting(true);
        setErrors({});

        // ফর্ম ডেটা তৈরি করা
        const form = e.target;
        const data = new FormData(form);

        try {
            // এই URL টি Formspree-এর জন্য। এটি ওয়েবসাইটের মালিককে ইমেল পাঠাবে (Gmail সহ)।
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json', // Formspree এর জন্য প্রয়োজনীয়
                },
            });

            if (response.ok) {
                // ইমেল সাবমিট সফল
                setIsSuccess(true);
            } else {
                // ইমেল সাবমিট ব্যর্থ
                const result = await response.json();
                console.error("Formspree error:", result);
                const errorDetail = result.errors && result.errors.length > 0 ? result.errors[0].message : 'দুঃখিত, ফর্ম সাবমিটে একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।';
                setErrors({ general: errorDetail });
            }
        } catch (error) {
            console.error('Fetch error:', error);
            setErrors({ general: 'নেটওয়ার্ক সংযোগে সমস্যা হয়েছে। আপনার ইন্টারনেট সংযোগ পরীক্ষা করুন।' });
        } finally {
            setIsSubmitting(false);
        }
    };

    // === ৪. সফল সাবমিটের পর আউটপুট ===
    if (isSuccess) {
        // ফর্ম ডেটা ব্যবহার করে WhatsApp লিঙ্ক তৈরি করা
        const whatsappLink = generateWhatsAppLink(formData);

        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6 font-inter">
                <div className="max-w-xl w-full bg-white p-10 rounded-2xl shadow-2xl text-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 text-teal-600 mx-auto mb-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">ধন্যবাদ! আপনার কনসাল্টেশন বুক হয়েছে।</h2>
                    <p className="text-gray-600 mb-6">আপনার অনুরোধটি ইমেলের মাধ্যমে (Gmail) মালিকের কাছে পাঠানো হয়েছে। আমরা খুব শীঘ্রই যোগাযোগ করব।</p>

                    <p className="text-gray-700 font-semibold mb-4">দ্রুত যোগাযোগের জন্য নিচে হোয়াটসঅ্যাপ মেসেজ পাঠান (ঐচ্ছিক):</p>

                    {/* হোয়াটসঅ্যাপ বাটন: এটি ব্যবহারকারীর ডিভাইস থেকে হোয়াটসঅ্যাপ চালু করবে এবং মেসেজটি প্রি-ফিল্ড করে দেবে। */}
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 mb-4 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-lg text-white bg-green-600 hover:bg-green-700 transition duration-150 ease-in-out"
                    >
                        <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.04 2.05A10 10 0 002.5 14.5c0 2.2.7 4.2 1.8 5.8l-1.5 4.7 4.9-1.3c1.5.8 3.3 1.2 5.1 1.2 5.5 0 10-4.5 10-10 0-5.5-4.5-10-10-10zM12.04 22c-1.8 0-3.5-.5-5-1.4l-3.5.9.8-3.4c-1.1-1.6-1.7-3.6-1.7-5.7 0-5 4-9 9-9s9 4 9 9c0 5-4 9-9 9zM16.5 13.4c-.1-.1-.3-.2-.6-.3-.2-.1-1.3-.6-1.6-.7-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 .9-.2 0-.3.1-.6-.2-.3-.3-1.2-.5-2.2-1.3-.8-.7-1.4-1.4-1.6-1.7-.2-.3 0-.4.1-.5.1-.1.3-.3.4-.4.1-.1.2-.3.3-.4.1-.1.1-.3 0-.4-.1-.1-.7-1.7-.9-2.2-.1-.4-.3-.4-.6-.4h-.6c-.2 0-.6.1-.9.4-.3.3-1 .9-1 2.3 0 1.4 1 2.8 1.1 3.1.2.3 2 3.1 4.7 4.4 2.7 1.3 2.7 1.1 3.2 1.1.5 0 1.5-.6 1.7-1.2.2-.5.2-.9.1-1.2 0-.2-.1-.3-.3-.4z" />
                        </svg>
                        হোয়াটসঅ্যাপে মেসেজ পাঠান
                    </a>

                    {/* পেজটি রিলোড করে আবার ফর্মটি দেখানোর জন্য */}
                    <a href="#" onClick={() => window.location.reload()} className="block mt-6 text-teal-600 hover:text-teal-700 font-medium cursor-pointer">
                        অন্য আরেকটি ফর্ম পূরণ করুন
                    </a>
                </div>
            </div>
        );
    }


    // === ৫. মূল ফর্ম আউটপুট (ফর্ম সেকশন) ===
    return (
        <>
            <ConsultationBanner></ConsultationBanner>
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-inter">
                <div className="max-w-full w-full bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2">

                    {/* বাম দিকের তথ্য সেকশন */}
                    <div className="bg-gray-800 text-white p-8 sm:p-12 flex flex-col justify-between">
                        <div>
                            <h1 className="text-4xl font-extrabold mb-4 border-b-2 border-teal-500 pb-2">
                                ফ্রি কনসাল্টেশন বুক করুন
                            </h1>
                            <p className="text-teal-300 text-lg mb-6">
                                আপনার স্বপ্নের ফটোশুট নিয়ে আলোচনা করুন। **১৫ মিনিটের** এই কলে কোনো বাধ্যবাধকতা নেই।
                            </p>

                            <ul className="space-y-4 text-gray-200">
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-teal-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>আপনার **ফটোগ্রাফির প্রয়োজন** সম্পর্কে বিস্তারিত জানুন।</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-teal-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>আপনার **বাজেট ও ইভেন্টের তারিখ** অনুযায়ী সেরা প্যাকেজ বেছে নিন।</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-teal-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>আমাদের কাজের পদ্ধতি এবং **ডেলিভারি প্রক্রিয়া** সম্পর্কে স্পষ্ট ধারণা পান।</span>
                                </li>
                            </ul>
                        </div>

                        {/* ট্রাস্ট ফ্যাক্টর বা Testimonial */}
                        <div className="mt-8 pt-6 border-t border-gray-700">
                            <p className="italic text-gray-400">
                                "তাদের কনসাল্টেশন আমার ইভেন্টের জন্য সেরা সিদ্ধান্ত নিতে সাহায্য করেছে। খুবই প্রফেশনাল এবং আন্তরিক!"
                            </p>
                            <p className="font-semibold mt-2 text-teal-500">- Sazzadul Bari (চিত্রমুল)</p>
                        </div>
                    </div>

                    {/* ডান দিকের ফর্ম সেকশন */}
                    <div className="p-8 sm:p-12">
                        {/* সাধারণ এরর মেসেজ */}
                        {errors.general && (
                            <div className="mb-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-lg" role="alert">
                                {errors.general}
                            </div>
                        )}
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                            // *** গুরুত্বপূর্ণ: এখানে YOUR_FORMSPREE_FORM_ID_HERE-এর জায়গায় আপনার আসল Formspree ID বসান। ***
                            action="https://formspree.io/f/xldpzrzk"
                            method="POST"
                        >

                            {/* নাম */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    আপনার পুরো নাম <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500`}
                                    required
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                            </div>

                            {/* ইমেল */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    ইমেল ঠিকানা <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500`}
                                    required
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>

                            {/* ফোন নম্বর */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    ফোন নম্বর (ঐচ্ছিক)
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500`}
                                />
                                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                            </div>

                            {/* সার্ভিসের ধরন */}
                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                                    কী ধরনের ফটোশুট খুঁজছেন? <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border ${errors.service ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-lg shadow-sm`}
                                    required
                                >
                                    <option value="">নির্বাচন করুন</option>
                                    <option value="Wedding">বিবাহ/বিয়ে</option>
                                    <option value="Portrait">পোর্ট্রেট (ব্যক্তিগত/পরিবার)</option>
                                    <option value="Event">অন্যান্য ইভেন্ট (জন্মদিন/অনুষ্ঠান)</option>
                                    <option value="Commercial">কর্পোরেট/কমার্শিয়াল</option>
                                    <option value="Other">অন্যান্য</option>
                                </select>
                                {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                            </div>

                            {/* ইভেন্টের তারিখ */}
                            <div>
                                <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700">
                                    আনুমানিক ইভেন্ট তারিখ (যদি জানা থাকে)
                                </label>
                                <input
                                    type="date"
                                    name="eventDate"
                                    id="eventDate"
                                    value={formData.eventDate}
                                    onChange={handleChange}
                                    min={new Date().toISOString().split('T')[0]} // আজকের বা তার পরের তারিখ
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
                                />
                                {errors.eventDate && <p className="text-red-500 text-xs mt-1">{errors.eventDate}</p>}
                            </div>

                            {/* মেসেজ/বিশেষ মন্তব্য */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    আপনার প্রশ্ন বা বিশেষ কোনো মন্তব্য
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="3"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
                                ></textarea>
                            </div>

                            {/* সাবমিট বাটন */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-lg font-medium text-white bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150 ease-in-out"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        পাঠানো হচ্ছে...
                                    </div>
                                ) : 'কনসাল্টেশন বুক করুন'}
                            </button>
                        </form>


                    </div>
                </div>
            </div>
        </>
    );
};

export default BookConsultation;
