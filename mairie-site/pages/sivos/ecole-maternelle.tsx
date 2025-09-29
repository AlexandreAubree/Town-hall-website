import Header from '../../components/Header';
import Footer from '../../components/Footer';
import EventCarousel from '../../components/EventCarousel';

export default function EcoleMaternelle() {
  const events = [
    {
      title: 'Élection parents d\'élèves',
      image: '/.jpg',
      date: '15/09',
      location: 'Préhau de l\'établissement',
      description: 'Compte rendu disponible.',
    },
    {
      title: 'Travaux de toiture',
      image: '/.jpg',
      date: '20/09',
      location: 'gymnase',
      description: 'Travaux en cours.',
    },
    {
      title: 'vacances de la Toussaint',
      image: '/.jpg',
      date: '05/10',
      location: 'cour exterieure de l\'école',
      description: 'Animations et repas partagé.',
    },
  ];

  return (
    <>
      <Header />
      <main className="sub-page">
        <h1 className="sub-title">École maternelle</h1>

        {/* === Carrousel des événements === */}
        <section>
          <h2 className="section-title">Actualités</h2>
          <EventCarousel events={events} />
        </section>

        <h2>École maternelle</h2>

        {/* === Image école === */}
        <img
          src="/.jpg"
          alt="Photo de l'école maternelle"
          className="image"
        />

        {/* === Infos utiles === */}
        <section>
          <h2 className="section-title">Infos utiles</h2>
          <ul className="info-list">
            <li>📍 Adresse école : 12 rue du centre</li>
            <li>🕒 Horaires : Lundi à Vendredi, 9h–12h / 14h–17h</li>
            <li>📞 Contact : 02 35 XX XX XX</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
