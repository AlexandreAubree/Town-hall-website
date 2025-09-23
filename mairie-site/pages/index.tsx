// pages/index.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Bienvenue dans la communauté de communes Terroir de Caux </h2>
        <p className="text-gray-700">Choisissez une commune ou explorez les services proposés.</p>
      </main>
      <Footer />
    </>
  );
}
