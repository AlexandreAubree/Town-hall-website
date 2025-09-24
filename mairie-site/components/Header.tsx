import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">🌾 Terre de caux</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#4b5563]">
          ☰
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <nav className="header-nav">
          <ul className="flex flex-col">
            <li><Link href="/services" className="header-link">Services</Link></li>
            <li><Link href="/faq" className="header-link">FAQ</Link></li>
            <li><Link href="/sivos" className="header-link">SIVOS</Link></li>
            <li><Link href="/agenda" className="header-link">Agenda</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
