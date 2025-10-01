import Header from '../../components/Header';
import Footer from '../../components/Footer';
import EventCarousel from '../../components/EventCarousel';

export default function AuzouvilleSurSaane() {
  const events = [
    {
      title: 'Conseil Municipal',
      image: '/CM.jpg',
      date: '15/09',
      location: 'Salle des fêtes',
      description: 'Compte rendu disponible.',
    },
    {
      title: 'Travaux de voirie',
      image: '/OIP.jpg',
      date: '20/09',
      location: 'Rue des écoles',
      description: 'Réhaussement en cours.',
    },
    {
      title: 'Fête du village',
      image: '/fete_village.jpg',
      date: '05/10',
      location: 'Place centrale',
      description: 'Animations et repas partagé.',
    },
  ];

  return (
    <>
      <Header />
      <main className="sub-page">
        <h1 className="sub-title">Auzouville-sur-Sâane</h1>

        {/* === Carrousel des événements === */}
        <section>
          <h2 className="section-title">Actualités</h2>
          <EventCarousel events={events} />
        </section>

        <h2>Mairie</h2>

        {/* === Image mairie === */}
        <img
          src="/mairie_auzouville_sur_saane.jpg"
          alt="Photo de la mairie de Auzouville-sur-Sâane"
          className="image"
        />

        {/* === Infos utiles === */}
        <section>
          <h2 className="section-title">Infos utiles</h2>
          <ul className="info-list">
            <li>📍 Adresse mairie : 12 rue du centre</li>
            <li>🕒 Horaires : Lundi à Vendredi, 9h–12h / 14h–17h</li>
            <li>📞 Contact : 02 35 XX XX XX</li>
            <li>📧 Email : </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
