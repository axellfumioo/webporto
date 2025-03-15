"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

interface CardProps {
    image: string;
    title: string;
    category: string;
}

const Card: React.FC<CardProps> = ({ image, title, category }) => {
    return (
        <div className="relative rounded-lg overflow-hidden bg-[#1F1F1F] text-white w-full max-w-full border-[#2E2E2E] border-1 ">
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1 }}
            >
                <Image
                    src={image}
                    alt={title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-60"
                    loading="lazy"
                    unoptimized
                />
            </motion.div>
            <div className="absolute bottom-0 left-0 right-0 bg-[#1F1F1F] bg-opacity-50 p-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-300">{category}</p>
            </div>
        </div>
    );
};

export default Card;