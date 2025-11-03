import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-container">
          <Image
            src="/la-seine-maritime_blason-fr_wp.webp"
            alt="Armoirie de la Seine-Maritime"
            width={120} // adapte à ton design
            height={120}
            className="header-logo"
            priority // charge dès le début
          />
          <Link href="/" className="header-title">Les 5 Villages</Link>

          {/* Navigation visible uniquement à partir du format tablette */}
          <nav className="nav-desktop">
            <Link href="/agenda" className="nav-link">Agenda</Link>
            <Link href="/sivos" className="nav-link">SIVOS</Link>
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
              <li><Link href="/sivos" className="burger-link">SIVOS</Link></li>
              <li><Link href="/agenda" className="burger-link">Agenda</Link></li>
              <li><Link href="/mairies/auzouville-sur-saane" className="burger-link">Auzouville-sur-Saâne</Link></li>
              <li><Link href="/mairies/lestanville" className="burger-link">Lestanville</Link></li>
              <li><Link href="/mairies/royville" className="burger-link">Royville</Link></li>
              <li><Link href="/mairies/saint-ouen-le-mauger" className="burger-link">Saint-Ouen-le-Mauger</Link></li>
              <li><Link href="/mairies/saint-pierre-benouville" className="burger-link">Saint-Pierre-Bénouville</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
