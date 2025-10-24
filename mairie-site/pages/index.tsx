import Header from '../components/Header';
import Footer from '../components/Footer';
import SeoHead from '../components/SeoHead';
import VillageCard from '../components/VillageCard';

export default function Home() {
  return (
    <>
      <SeoHead />
      <Header />
      <main className="main-page">
        {/* Section d’introduction avec header sémantique */}
        <section aria-labelledby="intro-title">
          <header>
            <h1 id="intro-title">Bienvenue dans la communauté des 5 villages</h1>
          </header>
          <p>Choisissez une commune ou explorez le SIVOS et l'agenda intercommunal proposés.</p>
        </section>

        {/* Section des communes avec titre clair */}
        <section aria-labelledby="communes-title">
          <h2 id="communes-title">Nos communes</h2>
          <div className="grid">
            <VillageCard name="Auzouville-sur-Saâne" image="/auzouville_sur_saane.jpg" href="/mairies/auzouville-sur-saane" />
            <VillageCard name="Lestanville" image="/lestanville.jpg" href="/mairies/lestanville" />
            <VillageCard name="Royville" image="/royville.jpeg" href="/mairies/royville" />
            <VillageCard name="Saint-Ouen-le-Mauger" image="/saint_ouen_le_mauger.jpg" href="/mairies/saint-ouen-le-mauger" />
            <VillageCard name="Saint-Pierre-Bénouville" image="/st_pierre_benouville.jpg" href="/mairies/saint-pierre-benouville" />
            <VillageCard name="SIVOS des 5 villages" image="/sivos.jpg" href="/sivos" />
          </div>
        </section>

        {/* Article autonome pour le contenu À propos */}
        <article aria-labelledby="about-title">
          <div className="paragraph">
            <h2 id="about-title">À propos</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat blanditiis...</p>
            <p>Tempore debitis facere inventore qui cum dolorem pariatur dolor ipsum...</p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
