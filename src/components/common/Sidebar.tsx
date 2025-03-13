"use client";
import React, { useState } from 'react';
import { Home, Briefcase, Phone, Instagram, Twitter, Menu, X } from 'lucide-react';
import Image from 'next/image';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const SidebarItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Projects', href: 'projects', icon: Briefcase },
    // { name: 'Certification', href: 'certification', icon: StickyNote },
    { name: 'Contact', href: 'contact', icon: Phone },
  ]

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-[#1E1E1E] text-white"
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`
  fixed top-0 left-0 
  h-screen w-64 
  bg-[#1F1F1F] text-gray-300 
  transition-all duration-300 ease-in-out
  p-3 flex flex-col
  z- border-r-2 border-[#42424259]
  ${isOpen ? 'translate-x-0' : '-translate-x-64'}
  md:translate-x-0
`}>

        {/* Profile Section */}
        <div className="flex items-center p-3 md:mt-0">
          <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden mr-3">
            <Image src="/vector.png" alt="Profile" className="object-cover h-[48px] w-full" width={48} height={48} />
          </div>
          <div>
            <h3 className="text-white text-base font-medium">Axel Azhar Putra</h3>
            <p className="text-gray-400 text-sm">Web Developer</p>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1">
          <ul className="space-y-1">
            {SidebarItems.map((item, index) => (
              <li key={index} className="rounded-md">
                <a href={`${item.href}`} className="text-[#A7A7A7] hover:text-white flex items-center py-2 px-4 rounded-lg hover:bg-[#2B2B2B] text-sm">
                  <item.icon size={18} className='mr-3 text-sm' />
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Connect Section */}
        <div className="p-4">
          <p className="text-gray-400 text-xs pb-2">Let's Connect!</p>
          <ul className="space-y-1">
            <li className="rounded-md">
            <a href={`https://www.instagram.com/axellfumioo/`} className="text-[#A7A7A7] hover:text-white flex items-center py-2 rounded-lg text-sm">
                <Instagram size={18} className="mr-3" />
                <span>Instagram</span>
              </a>
            </li>
            <li className="rounded-md">
            <a href={`https://x.com/axellfumioo`} className="text-[#A7A7A7] hover:text-white flex items-center py-2 rounded-lg text-sm">
                <Twitter size={18} className="mr-3" />
                <span>Twitter</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      <div
        onClick={toggleSidebar}
        className={`fixed inset-0 bg-[#191919] opacity-0 z-30 md:hidden ${isOpen ? 'block' : 'hidden'}`}
      />
    </>
  );
};

export default Sidebar;