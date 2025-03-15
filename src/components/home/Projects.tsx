"use client";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Card from '@/components/common/Card';

export default function Hero() {
    const cards = [
        {
            image: '/img/project/solvana.jpg', // Ganti dengan path gambar yang sesuai
            title: 'Solvana - Website',
            category: 'Hackathon Project'
        },
        {
            image: '/img/project/sabar.jpg', // Ganti dengan path gambar yang sesuai
            title: 'Sabar School LMS - Website',
            category: 'Side Project'
        },
    ];
    return (
        <div className='z-40 mt-14 mb-4'>
            <div className='flex justify-between items-center'>
                <h2 className='text-white text-2xl font-medium'>Selected Projects</h2>
                <div className='flex items-center'>
                    <motion.a
                        href='/projects'
                        className='flex items-center cursor-pointer p-3 min-h-[44px] min-w-[44px]'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}>
                        <span className='text-[#b0b0b0] text-sm mr-2'>Show all</span>
                        <ArrowRight className='text-[#b0b0b0] text-sm' />
                    </motion.a>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-center mt-4">
                {cards.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </div>
    );
}