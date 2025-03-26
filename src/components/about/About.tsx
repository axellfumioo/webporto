/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import { motion } from "framer-motion";
import { Twitter, Instagram, Linkedin, Github, Twitch, Mail } from "lucide-react";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import Stack from '@/components/home/Stack';

export default function Hero() {
    return (
        <div className="z-40 mb-4 mt-20 md:mt-0">
            <div className="flex flex-col space-y-1">
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                >
                    <h2 className="text-white text-4xl font-bold tracking-tight">About</h2>
                    <p className="">
                        Dive into the story behind the code - exploring experiences, passions, and the journey of a developer
                        blending creativity with technology.
                    </p>
                </motion.div> */}
                <div className="flex flex-col items-center w-full rounded-xl pb-12">
                    <Image
                        src="/img/vector.webp"
                        alt="Axel Azhar Putra Ananca Picture"
                        width={200}
                        height={200}
                        className="rounded-full border-4 border-[#2D2D2D]"
                        loading="eager"
                        unoptimized
                    />
                    <div className="mt-4 text-center text-gray-200">
                        <h1 className="text-2xl font-semibold">Axel Azhar Putra Ananca</h1>
                        <h2 className="text-lg text-gray-400">(axellFumioo)</h2>
                    </div>

                    <div className="grid mt-6 gap-y-4 text-gray-400 text-lg text-start max-w-2xl">
                        <p>
                            Hi, I'm Axel Azhar Putra Ananca (a.k.a. axellFumioo), a passionate and curious software developer with expertise in Laravel, Next.js, and AI integrations.
                            I'm always pushing boundaries to create seamless and innovative digital solutions.
                        </p>
                        <p>
                            Currently working on <span className="text-gray-200 font-semibold">Solvana</span>, a mental health app leveraging gamification, AI,
                            and smartwatch integrations to enhance well-being. Also developing a <span className="text-gray-200 font-semibold">restaurant reservation SaaS</span> to modernize dining experiences.
                        </p>
                        <p>
                            Enthusiast of emerging tech - Bluetooth GATT services, real-time web apps, and elegant user experiences.
                            Whether it's backend logic or frontend aesthetics, I love crafting powerful and intuitive systems.
                        </p>
                        <p>
                            Beyond coding, I enjoy mellow, sentimental music, brainstorming creative content, and refining my next big project.
                            Open to collaboration - let's build something amazing together! 🚀
                        </p>
                    </div>
                    <Stack />
                </div>
            </div>
        </div>
    );
}