// components/Header.tsx
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">Mairie</h1>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        ☰
      </button>

      <nav className={`absolute top-16 left-0 w-full bg-blue-700 p-4 ${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <ul className="space-y-2">
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/faq">FAQ</Link></li>
          <li><Link href="/sivos">SIVOS</Link></li>
          <li><Link href="/agenda">Agenda</Link></li>
        </ul>
      </nav>

      <nav className="hidden md:flex space-x-4">
        <Link href="/services">Services</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/sivos">SIVOS</Link>
        <Link href="/agenda">Agenda</Link>
      </nav>
    </header>
  );
}
