"use client"

import React, { useState, useEffect } from 'react';
import useTypewriter from 'react-typewriter-hook';
import Lemon from './lemon.png';

let id = 0;
interface Lemon {
  id: number;
  top: string;
  left: string;
}

export default function Home() {
  const [text, setText] = useState('Lemons');
  const [lemons, setLemons] = useState<Lemon[]>([]);
  const magicWriter = useTypewriter(text);

  useEffect(() => {
    if (magicWriter === 'Lemons') {
      setTimeout(() => {
        setText('');
      }, 2000);
    } else if (magicWriter === '') {
      setTimeout(() => {
        setText('Lemons');
      }, 2000);
    }
  }, [magicWriter]);

  const handleClick = () => {
    const top = Math.random() * 100 + '%';
    const left = Math.random() * 100 + '%';
    const newLemon = { id: id++, top, left };
    setLemons([...lemons, newLemon]);
    setTimeout(() => {
      setLemons(lemons => lemons.filter(lemon => lemon.id !== newLemon.id));
    }, 5000);
  }

  return (
    <main className="flex flex-col items-center justify-center p-2">
      <div className="flex flex-col min-h-screen items-center justify-center relative ">
        <p className="text-4xl md:text-8xl font-bold text-center text-yellow-400 absolute z-10">
          {magicWriter}
          <span className="text-yellow-400 animate-blink">|</span>
        </p>
        <p className="text-4xl md:text-8xl font-bold text-center text-yellow-600 absolute z-[-1] mt-1.5 mr-1.5">
          {magicWriter}
          <span className="text-yellow-600 animate-blink">|</span>
        </p>
        <p className="text-4xl md:text-8xl font-bold text-center text-yellow-800 absolute z-[-2] mt-3 mr-3">
          {magicWriter}
          <span className="text-yellow-800 animate-blink">|</span>
        </p>

        <div className="h-60"></div>
        <button onClick={handleClick} className="text-2xl md:text-4xl font-bold text-white text-center">Click me</button>
        {lemons.map(lemon => (
          <img key={lemon.id} src="https://i.ibb.co/6yQnjhZ/lemon.png" alt="Lemon" style={{ position: 'absolute', top: lemon.top, left: lemon.left, animation: 'spin 4s linear infinite' }} />
        ))}
      </div>
    </main>
  )
}