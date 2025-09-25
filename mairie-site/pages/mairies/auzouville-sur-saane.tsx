import Header from '../../components/Header';
import Footer from '../../components/Footer';
import EventCarousel from '../../components/EventCarousel';

export default function AuzouvilleSurSaane() {
  const events = [
    {
      title: 'Conseil Municipal',
      image: '/event_conseil.jpg',
      date: '15/09',
      location: 'Salle des fêtes',
      description: 'Compte rendu disponible.',
    },
    {
      title: 'Travaux de voirie',
      image: '/event_travaux.jpg',
      date: '20/09',
      location: 'Rue des écoles',
      description: 'Réhaussement en cours.',
    },
  ];

  return (
    <>
      <Header />
      <main className="village-page">
        <h1 className="village-title">Auzouville-sur-Sâane</h1>

        {/* === Carrousel des événements === */}
        <section>
          <h2 className="section-title">Actualités</h2>
          <EventCarousel events={events} />
        </section>

        {/* === Image mairie === */}
        <img
          src="/mairie_auzouville_sur_saane.jpg"
          alt="Photo de la mairie de Auzouville-sur-Sâane"
          className="village-image"
        />

        {/* === Infos utiles === */}
        <section>
          <h2 className="section-title">Infos utiles</h2>
          <ul className="info-list">
            <li>📍 Adresse mairie : 12 rue du centre</li>
            <li>🕒 Horaires : Lundi à Vendredi, 9h–12h / 14h–17h</li>
            <li>📞 Contact : 02 35 XX XX XX</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
