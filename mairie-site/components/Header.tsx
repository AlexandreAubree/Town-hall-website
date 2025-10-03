import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link href="/" className="header-title">Communauté des 5 villages</Link>

          {/* Navigation visible uniquement à partir du format tablette */}
          <nav className="nav-desktop">
            <Link href="/agenda" className="nav-link">Agenda</Link>
            <Link href="/sivos" className="nav-link">SIVOS</Link>
            <Link href="/services" className="nav-link">Services</Link>
          </nav>

          {/* Bouton burger visible uniquement sur mobile */}
          <button onClick={() => setIsOpen(true)} className="burger-button">☰</button>
        </div>
      </header>

      {/* Menu burger en pop-up */}
      {isOpen && (
        <div className="burger-overlay" onClick={() => setIsOpen(false)}>
          <nav className="burger-menu" onClick={(e) => e.stopPropagation()}>
            <button className="burger-close" onClick={() => setIsOpen(false)}>✕</button>
            <ul className="burger-list">
              <li><Link href="/services" className="burger-link">Services</Link></li>
              <li><Link href="/sivos" className="burger-link">SIVOS</Link></li>
              <li><Link href="/agenda" className="burger-link">Agenda</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
