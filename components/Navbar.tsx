import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-[rgba(255,255,255,0.3)] shadow p-4 mt-0 w-full fixed top-0 z-10 backdrop-filter backdrop-blur-lg">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-2xl font-bold text-yellow-500 glow">
                    <Link href="/">Lemons</Link>
                </div>
                <ul className="flex items-center space-x-8">
                    <li className="text-lg text-gray-800 hover:text-blue-500 transition duration-300">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="text-lg text-gray-800 hover:text-blue-500 transition duration-300">
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;