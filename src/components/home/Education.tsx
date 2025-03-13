"use client";
import { School } from 'lucide-react';

export default function Hero() {
    return (
        <div className='z-40 mt-14 mb'>
            <div className='flex justify-between items-center'>
                <h2 className='text-white text-2xl font-medium'>My Education</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 mt-4">
                <div className="bg-[#1F1F1F] p-4 rounded-lg flex items-center space-x-4">
                    <School className="w-6 h-6 text-white ml-2" />
                    <div>
                        <h3 className="text-lg font-semibold text-white">Telkom Junior High School Purwokerto</h3>
                        <p className="text-gray-400 text-sm">Student • 2021 - 2024</p>
                    </div>
                </div>
                <div className="bg-[#1F1F1F] p-4 rounded-lg flex items-center space-x-4">
                    <School className="w-6 h-6 text-white ml-2" />
                    <div>
                        <h3 className="text-lg font-semibold text-white">Telkom Vocational High School Purwokerto</h3>
                        <p className="text-gray-400 text-sm">Software Engineering • 2024 - Present</p>
                    </div>
                </div>
            </div>
        </div>
    );
}