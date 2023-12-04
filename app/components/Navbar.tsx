import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-1 mt-0 w-full fixed top-0 z-10">
            <ul className="flex justify-center space-x-4">
                <li className="text-white ml-1">
                    <Link href="/">Home</Link>
                </li>
                <li className="text-white">
                    <Link href="/about">About</Link>
                </li>
                <li className="text-white">
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;