import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
// Tailwind CSS-এর জন্য Heroicons থেকে একটি সুন্দর আইকন ব্যবহার করা হলো
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid'; 
import Navbar from '../Components/Pages/Shared/Navbar/Navbar';
import Footer from '../Components/Pages/Shared/Footer/Footer';

// কাস্টম বাটন কম্পোনেন্ট (মর্ডান ডিজাইন)
const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // স্ক্রল ইভেন্ট হ্যান্ডেল করার জন্য
    const toggleVisibility = () => {
        // 300 পিক্সেল নিচে স্ক্রল করলেই বাটনটি দৃশ্যমান হবে
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // উপরের দিকে মসৃণভাবে স্ক্রল করার ফাংশন
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // মসৃণ অ্যানিমেশনের জন্য
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        // কম্পোনেন্ট আনমাউন্ট হলে ইভেন্ট লিসেনারটি সরিয়ে ফেলা
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`
                fixed bottom-6 right-6 z-50 p-3 rounded-full 
                
                /* Modern Design Styles */
                bg-gradient-to-r from-purple-600 to-blue-600 
                text-white 
                shadow-xl shadow-blue-500/50 
                
                /* Hover & Focus Effects */
                hover:from-purple-700 hover:to-blue-700 
                hover:scale-105
                focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2
                
                /* Animation & Visibility */
                transition-all duration-500 ease-in-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
            `}
        >
            <ArrowUpCircleIcon className='w-7 h-7' />
        </button>
    );
};


const Mainlayout = () => {
    return (
        <div className='font-cinzel'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
            {/* ScrollToTopButton কম্পোনেন্টটি এখানে যোগ করা হলো */}
            <ScrollToTopButton />
        </div>
    );
};

export default Mainlayout;