import Header from '../../components/Header';
import Footer from '../../components/Footer';
import EventCard from '../../components/EventCard';


export default function AuzouvillesurSâane() {
  return (
    <>
      <Header />
      <main className="p-6 space-y-6">
        <h1 className="text-2xl font-bold">Auzouville-sur-Sâane</h1>
        <img src="/images/royville.jpg" alt="Royville" className="w-full h-48 object-cover rounded" />
        
        <section>
          <h2 className="text-xl font-semibold mb-2">Actualités</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <EventCard title="Conseil Municipal" date="15/09" location="salle des fêtes" description="Compte rendu disponible." />
            <EventCard title="Travaux de voirie" date='20/09' location='rue des écoles' description='réhaussemment' />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Infos utiles</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Adresse mairie : 12 rue du centre</li>
            <li>Horaires : Lundi à Vendredi, 9h–12h / 14h–17h</li>
            <li>Contact : 02 35 XX XX XX</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}