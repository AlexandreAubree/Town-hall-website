import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Sivos() {
  return (
    <>
      <Header />
      <main className="p-6 space-y-6">
        <h1 className="text-2xl font-bold">SIVOS</h1>
        <p className="text-gray-700">Le SIVOS regroupe les services scolaires des communes partenaires.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/sivos/ecole-maternelle" className="card">École maternelle</Link>
          <Link href="/sivos/ecole-primaire" className="card">École primaire</Link>
          <Link href="/sivos/cantine" className="card">Cantine</Link>
          <Link href="/sivos/documents" className="card">Documents</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
