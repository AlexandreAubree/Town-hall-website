import Header from '../components/Header';
import Footer from '../components/Footer';
import AgendaCard from '../components/AgendaCard';

export default function Agenda() {
  const events = [
    { title: 'Conseil municipal',image: '/actu.jpg', date: '2025-10-03', time: '18h30', location: 'Salle des fêtes' },
    { title: 'Fête du village',image: '/actu.jpg', date: '2025-10-15', time: '14h00', location: 'Place centrale' },
  ];

  return (
    <>
      <Header />
      <main className="page">
        <h1>Agenda</h1>
        <img
          src="/agenda.jpg"
          alt="photo d'un agenda noir sur table en bois"
          className="image"
        />
        <div className="space-y-4">
          {events.map((event, index) => (
            <AgendaCard key={index} {...event} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
