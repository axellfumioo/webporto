"use client";
import React, { useState } from 'react';
import { Home, Briefcase, Phone, Menu, X } from 'lucide-react';
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
        aria-label="Navbar"
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
  z-40 border-r-2 border-[#42424259]
  ${isOpen ? 'translate-x-0' : '-translate-x-64'}
  md:translate-x-0
`}>

        {/* Profile Section */}
        <div className="flex items-center p-3 md:mt-0">
          <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden mr-3">
            <Image src="/img/vector.png" alt="Profile" className="object-cover h-[48px] w-full" width={48} height={48}
              loading="lazy"
              unoptimized />
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
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                <span>Instagram</span>
              </a>
            </li>
            <li className="rounded-md">
              <a href={`https://x.com/axellfumioo`} className="text-[#A7A7A7] hover:text-white flex items-center py-2 rounded-lg text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
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