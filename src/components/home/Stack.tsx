"use client";
import Image from 'next/image';

export default function Hero() {
    return (
        <div className='z-40 mt-14 mb-4'>
            <div className='flex justify-between items-center'>
                <h2 className='text-white text-2xl font-medium'>What tech stack am I using</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3 mt-4">
                <div className="bg-[#1F1F1F] p-4 rounded-lg flex items-center space-x-4">
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-10 h-10" alt="JavaScript" width={40} height={40} />
                    <div>
                        <h3 className="text-lg font-semibold text-white">JavaScript</h3>
                        <p className="text-gray-400 text-sm">Frontend & Backend</p>
                    </div>
                </div>
                <div className="bg-[#1F1F1F] p-4 rounded-lg flex items-center space-x-4">
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-10 h-10" alt="React" width={40} height={40} />
                    <div>
                        <h3 className="text-lg font-semibold text-white">React</h3>
                        <p className="text-gray-400 text-sm">Frontend Framework</p>
                    </div>
                </div>
                <div className="bg-[#1F1F1F] p-4 rounded-lg flex items-center space-x-4">
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnhoVwuJmtF1Lu4t9WcsZ7fESV9KdIQ7pVHw&s" className="w-10 h-10" alt="Laravel" width={40} height={40} />
                    <div>
                        <h3 className="text-lg font-semibold text-white">Laravel</h3>
                        <p className="text-gray-400 text-sm">Backend Framework</p>
                    </div>
                </div>
                <div className="bg-[#1F1F1F] p-4 rounded-lg flex items-center space-x-4">
                    <Image src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg" className="w-10 h-10" alt="TailwindCSS" width={40} height={40} />
                    <div>
                        <h3 className="text-lg font-semibold text-white">TailwindCSS</h3>
                        <p className="text-gray-400 text-sm">Styling Framework</p>
                    </div>
                </div>
                <div className="bg-[#1F1F1F] p-4 rounded-lg flex items-center space-x-4">
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="w-10 h-10" alt="MySQL" width={40} height={40} />
                    <div>
                        <h3 className="text-lg font-semibold text-white">MySQL</h3>
                        <p className="text-gray-400 text-sm">Database</p>
                    </div>
                </div>
                <div className="bg-[#1F1F1F] p-4 rounded-lg flex items-center space-x-4">
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="w-10 h-10" alt="Docker" width={40} height={40} />
                    <div>
                        <h3 className="text-lg font-semibold text-white">Docker</h3>
                        <p className="text-gray-400 text-sm">Containerization</p>
                    </div>
                </div>
            </div>
        </div>
    );
}