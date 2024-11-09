'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative bg-white shadow-md p-4 sticky top-0 z-10">
      {/* Left Decorative Image */}
      <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
        <Image src="/images/left.png" alt="Decorative Left" width={100} height={100} />
      </div>

      {/* Right Decorative Image */}
      <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
        <Image src="/images/right.png" alt="Decorative Right" width={100} height={100} />
      </div>

      <div className="container mx-auto flex items-center justify-between relative">
        {/* Logo - Aligns to the left */}
        <div className="text-lg font-bold">
          <Link href="/">Crestview</Link>
        </div>

        {/* Centered Menu Links - Hidden on mobile, flex on large screens */}
        <div className="hidden md:flex flex-grow justify-center space-x-6">
          <Link href="/" className="text-gray-500 text-center font-montserrat text-sm font-bold leading-6 tracking-[0.2px]">Home</Link>
          <Link href="#about" className="text-gray-500 text-center font-montserrat text-sm font-bold leading-6 tracking-[0.2px]">About</Link>
          <Link href="/" className="text-gray-500 text-center font-montserrat text-sm font-bold leading-6 tracking-[0.2px]">Contact</Link>
        </div>

        {/* School Portal Button - Aligns to the right */}
        <div className="hidden md:flex">
          <Link href="https://www.kralis.app/" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">School Portal</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2 text-center">
          <Link href="/" className="block text-gray-500 text-center font-montserrat text-sm font-bold leading-6 tracking-[0.2px]">Home</Link>
          <Link href="#about" className="block text-gray-500 text-center font-montserrat text-sm font-bold leading-6 tracking-[0.2px]">About</Link>
          <Link href="/" className="block text-gray-500 text-center font-montserrat text-sm font-bold leading-6 tracking-[0.2px]">Contact</Link>
          <Link href="/" className="block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">School Portal</Link>
        </div>
      )}
    </nav>
  );
}
