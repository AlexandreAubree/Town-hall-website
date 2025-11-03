import Header from '../components/Header';
import Footer from '../components/Footer';
import SeoHead from '../components/SeoHead';
import Link from 'next/link';
import VillageCard from '../components/VillageCard';

export default function Home() {
  return (
    <>
      <SeoHead />
      <Header />
      <main className="main-page">
        {/* Section d’introduction avec header sémantique */}
        
          <header>
            <h1 className='intro-title'>Bienvenue dans la communauté des 5 villages</h1>
          </header>
          <p>Choisissez une commune ou explorez le SIVOS et l'agenda intercommunal proposés.</p>
        

        {/* Section des communes avec titre clair */}

          <div className="grid">
            <h2 className='card6'>Nos communes</h2>
            <div className="card card1">
            <VillageCard name="Auzouville-sur-Saâne" image="/auzouville_sur_saane.jpg" href="/mairies/auzouville-sur-saane" />
            </div>
            <div className="card card2">
            <VillageCard name="Lestanville" image="/lestanville.jpg" href="/mairies/lestanville" />
            </div>
            <div className="card card3">
            <VillageCard name="Royville" image="/royville.jpeg" href="/mairies/royville" />
            </div>
            <div className="card card4">
            <VillageCard name="Saint-Ouen-le-Mauger" image="/saint_ouen_le_mauger.jpg" href="/mairies/saint-ouen-le-mauger" />
            </div>
            <div className="card card5">
            <VillageCard name="Saint-Pierre-Bénouville" image="/st_pierre_benouville.jpg" href="/mairies/saint-pierre-benouville" />
            </div>
          </div>
        
        <section className='section-index'>
          <div className="paragraph-index">
          <h2>Découvrez le SIVOS</h2>
          <p>Informations et services scolaires pour les 5 villages.</p>
          </div>
          <VillageCard name="SIVOS" image="/sivos.jpg" href="/sivos" />
        </section>

        <section className='section-index'>
          <VillageCard name="Agenda" image="/agenda-index.jpg" href="/agenda" />
          <div className="paragraph-index">
          <h2>Agenda des 5 villages</h2>
          <p>Consultez les événements à venir dans notre communauté.</p>
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
