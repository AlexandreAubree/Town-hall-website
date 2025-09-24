import Header from '../components/Header';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';

export default function Agenda() {
  const events = [
    { title: 'Conseil municipal', date: '2025-10-03', time: '18h30', location: 'Salle des fêtes' },
    { title: 'Fête du village', date: '2025-10-15', time: '14h00', location: 'Place centrale' },
  ];

  return (
    <>
      <Header />
      <main className="p-6 space-y-6">
        <h1 className="text-2xl font-bold">Agenda</h1>
        <div className="space-y-4">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
