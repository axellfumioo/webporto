"use client";
import { motion } from 'framer-motion';
import Card from '@/components/common/Card';

export default function Hero() {
    const cards = [
        {
            image: '/project/sabar.JPG', // Ganti dengan path gambar yang sesuai
            title: 'Sabar School LMS - Website',
            category: 'Side Project'
        },
        {
            image: '/project/solvana.JPG', // Ganti dengan path gambar yang sesuai
            title: 'Solvana - Website',
            category: 'Hackathon Project'
        },
        {
            image: '/project/marivora.JPG', // Ganti dengan path gambar yang sesuai
            title: 'Marivora - Website',
            category: 'Competition Project'
        },
        {
            image: '/project/greencycle.JPG', // Ganti dengan path gambar yang sesuai
            title: 'GreenCycle - Mobile First Website',
            category: 'Competition Project'
        },
        {
            image: '/project/minecraft.JPG', // Ganti dengan path gambar yang sesuai
            title: 'Minecraft Server -  Website',
            category: 'Side Project'
        },
        {
            image: '/project/teater.JPG', // Ganti dengan path gambar yang sesuai
            title: 'Pemesanan Teater -  Website',
            category: 'Side Project'
        },
    ];
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
                        Featured Projects
                    </h2>
                    <p className='text-gray-400 text-lg'>
                        Explore my recent work and creative solutions
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='flex flex-wrap gap-2'
                >
                    <button className='px-4 py-2 text-sm font-semibold text-gray-100 bg-[#363636] hover:bg-[#2B2B2B] rounded-full transition-all duration-200 shadow-md active:scale-95'>
                        All Projects
                    </button>
                    <button className='cursor-not-allowed px-4 py-2 text-sm font-semibold text-gray-300 bg-[#252525] rounded-full hover:bg-[#3A3A3A] hover:text-white transition-all duration-200 active:scale-95'>
                        Web Development
                    </button>
                    <button className='cursor-not-allowed px-4 py-2 text-sm font-semibold text-gray-300 bg-[#252525] rounded-full hover:bg-[#3A3A3A] hover:text-white transition-all duration-200 active:scale-95'>
                        Mobile Apps
                    </button>

                </motion.div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center mt-6">
                {cards.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </div>
    );
}