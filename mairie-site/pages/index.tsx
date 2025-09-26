import Header from '../components/Header';
import Footer from '../components/Footer';
import VillageCard from '../components/VillageCard';

export default function Home() {
  return (
    <>
      <Header />
     <main className="page">
       <h2>Bienvenue dans la communauté de communes Terroir de Caux</h2>
       <p>Choisissez une commune ou explorez les services proposés.</p>

      <div className="village-grid">
        <VillageCard name="Auzouville-sur-Sâane" image="/auzouville_sur_saane.jpg" href="/mairies/auzouville-sur-saane" />
        <VillageCard name="Lestanville" image="/lestanville.jpg" href="/mairies/lestanville" />
        <VillageCard name="Royville" image="/royville.jpeg" href="/mairies/royville" />
        <VillageCard name="Saint-Pierre-Bénouville" image="/st_pierre_benouville.jpg" href="/mairies/saint-pierre-benouville" />
        <VillageCard name="Saint-Ouen-le-Mauger" image="/saint_ouen_le_mauger.jpg" href="/mairies/saint-ouen-le-mauger" />
      </div>
     </main>

      <Footer />
    </>
  );
}
