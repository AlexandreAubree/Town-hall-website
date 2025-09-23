import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">Accueil</Link>
        <Link href="/agenda">Agenda</Link>
        <Link href="/services">Services</Link>
        <Link href="/sivos">SIVOS</Link>
        <Link href="/faq">FAQ</Link>
      </nav>
    </header>
  );
}
