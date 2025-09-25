import Header from '../components/Header';
import Footer from '../components/Footer';
import VillageCard from '../components/VillageCard';

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Bienvenue dans la communauté de communes Terroir de Caux </h2>
        <p className="text-gray-700">Choisissez une commune ou explorez les services proposés.</p>
        <VillageCard name="Auzouville-sur-Sâane" image="/images/auzouville.jpg" href="/mairies/auzouville-sur-saane" />
        <VillageCard name="Lestanville" image="/images/lestanville.jpg" href="/mairies/lestanville" />
        <VillageCard name="Royville" image="/images/royville.jpg" href="/mairies/royville" />
        <VillageCard name="Saint-Pierre-Bénouville" image="/images/saint-pierre-benouville.jpg" href="/mairies/saint-pierre-benouville" />
        <VillageCard name="Saint-Ouen-le-Mauger" image="/images/saint-ouen-le-mauger.jpg" href="/mairies/saint-ouen-le-mauger" />
      </main>
      <Footer />
    </>
  );
}
