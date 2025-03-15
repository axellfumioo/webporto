"use client";
import { motion } from 'framer-motion';
import { FileUser, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className='z-40 mt-20 md:mt-0'>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className='space-y-1'
      >
        <h1 className='text-white text-4xl font-bold tracking-tight'>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Hey there! I&apos;m Axel&nbsp;
          </motion.span>
          <motion.span
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            👋
          </motion.span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        className='space-y-1'
      >
        <h2 className='text-white text-2xl md:text-4xl font-semibold'>
          Building cool stuff with Laravel & Next.js.
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, type: "spring" }}
          >
            🚀
          </motion.span>
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className='mt-4 text-[#b0b0b0] text-clip max-w-md font-[400]'
      >
        I&apos;m Axel Azhar Putra Ananca, a passionate coder and student at SMK Telkom Purwokerto.
      </motion.p>
      <div className='flex gap-3 my-5'>
        <Link 
          href="/cv" 
          className='flex items-center bg-[#333333] gap-2 text-sm text-white px-3 py-2 rounded-lg hover:bg-[#2B2B2B] transition-all font-xs'
        >
          <FileUser size={16} /> 
          View my CV
        </Link>
        <Link 
          href="/contact" 
          className='flex items-center border-[#2B2B2B] gap-2 text-sm border px-3 py-2 rounded-lg hover:bg-[#2B2B2B] transition-all font-xs text-white'
        >
          <Phone size={16} />
          Contact
        </Link>
      </div>
      <Image
        src='/IMG1_1736.jpg'
        alt='Profile'
        className='z-0 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl mt-4 rounded-lg'
        width={500}
        height={500}
        loading="lazy"
        unoptimized
      />
    </div>
  );
}