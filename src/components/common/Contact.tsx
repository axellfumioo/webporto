"use client";
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function Hero() {
    return (
        <div className='z-40 mt-14 mb'>
            <div className="flex flex-wrap justify-between md:flex-nowrap mt-4 bg-[#1F1F1F] rounded-lg border border-[#2E2E2E]">
                <div className="py-8 px-6 flex flex-col justify-center max-w-lg">
                    <h1 className="text-white text-2xl font-semibold mb-2">Contact me now</h1>
                    <p className="text-[#A7A7A7] leading-relaxed">
                        Let's talk about how I can help you build a high-performance, visually stunning website customized to fit your business needs.
                    </p>
                    <motion.a
                        href="contact"
                        className="text-sm bg-[#333333] hover:bg-[#2B2B2B] text-white py-2 px-4 rounded-lg mt-4 flex items-center w-fit"
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Phone className="mr-2 w-4 h-4" />
                        Contact me
                    </motion.a>
                </div>
                <div className="hidden md:flex w-full max-w-xs">
                    <img
                        className="rounded-r-lg object-cover h-auto max-h-64 md:max-h-80"
                        src="https://framerusercontent.com/images/9DgGuChlqYjMNT5bypTzBl1VY.jpg?scale-down-to=512"
                        alt="Contact Image"
                    />
                </div>
            </div>
        </div >
    );
}