"use client";
import { motion } from 'framer-motion';
import { Twitter, Instagram, Linkedin, Github, Twitch, Mail } from "lucide-react";
import React, { useEffect, useState, useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from "react-google-recaptcha";

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export default function Hero() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const token = await recaptchaRef.current?.executeAsync();
            if (!token) throw new Error("reCAPTCHA verification failed!");

            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, captchaToken: token }),
            });

            if (res.status === 429) {
                throw new Error("O-Ow... Too many requests, wait a bit!");
            }

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Something went wrong. Try again!");

            toast.success("Message sent successfully! 🚀");
            setFormData({ name: "", email: "", message: "" });
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            recaptchaRef.current?.reset();
            setIsSubmitting(false);
        }
    };
    return (
        <div className='z-40 mb-4 mt-20 md:mt-0'>
            <div className='flex flex-col space-y-4'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='space-y-1'
                >
                    <h2 className='text-white text-4xl font-bold tracking-tight'>
                        Contact me
                    </h2>
                    <p className='text-gray-400 text-base'>
                        Got questions or a project in mind? I&apos;d love to connect! Whether you need web design, brand identity, or a custom solution, feel free to reach out. Let&apos;s bring your ideas to life!
                    </p>
                </motion.div>

                <form onSubmit={handleSubmit} method='post' className="w-full rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input
                            type="text"
                            placeholder="Your Full Name (Must be full name)"
                            className="w-full p-3 bg-[#2E2E2E] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            disabled={isSubmitting}
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 bg-[#2E2E2E] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={isSubmitting}
                        />
                    </div>
                    <textarea
                        placeholder="Message"
                        className="w-full p-3 h-32 bg-[#2E2E2E] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none mb-2"
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        disabled={isSubmitting}
                    ></textarea>
                    <ReCAPTCHA ref={recaptchaRef} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} size="invisible" />
                    <div className="text-xs text-gray-400 mb-2">
                        This site is protected by reCAPTCHA and the Google{" "}
                        <a href="https://policies.google.com/privacy" className="text-gray-300 hover:text-white transition">Privacy Policy</a> and{" "}
                        <a href="https://policies.google.com/terms" className="text-gray-300 hover:text-white transition">Terms of Service</a> apply.
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`bg-[#2F2F2F] text-white px-4 py-2 rounded-md transition cursor-pointer ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#323232]'
                            }`}
                    >
                        {isSubmitting ? 'Sending...' : 'Submit'}
                    </button>

                </form>
                {/* Social Media Section */}
                <div className='flex flex-col items-center space-y-2'>
                    <h3 className='text-white text-xl mb-2 font-semibold'>Let's Connect</h3>
                    <div className='flex space-x-4'>
                        <a href="https://instagram.com/axellfumioo" className='p-3 bg-[#2E2E2E] rounded-full text-gray-400 hover:text-white hover:bg-[#E1306C] transition'><Instagram size={20} /></a>
                        <a href="https://x.com/axellFumioo" className='p-3 bg-[#2E2E2E] rounded-full text-gray-400 hover:text-white hover:bg-[#1DA1F2] transition'><Twitter size={20} /></a>
                        <a href="https://github.com/axellfumioo" className='p-3 bg-[#2E2E2E] rounded-full text-gray-400 hover:text-white hover:bg-[#0b0b0b] transition'><Github size={20} /></a>
                        <a href="https://www.twitch.tv/axellfumioo" className='p-3 bg-[#2E2E2E] rounded-full text-gray-400 hover:text-white hover:bg-[#9130e1] transition'><Twitch size={20} /></a>
                        <a href="https://linkedin.com" className='p-3 bg-[#2E2E2E] rounded-full text-gray-400 hover:text-white hover:bg-[#0077B5] transition'><Linkedin size={20} /></a>
                        <a href="mailto:axelazharputra@proton.me" className='p-3 bg-[#2E2E2E] rounded-full text-gray-400 hover:text-white hover:bg-[#E1306C] transition'><Mail size={20} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
