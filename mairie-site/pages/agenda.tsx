import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AgendaCard from '../components/AgendaCard';

// Définir le type pour les données d'agenda
interface AgendaCardData {
  id: number;
  attributes: {
    name: string;
    location: string;
    date: string;
    time: string;
    image?: {
      data?: {
        attributes?: {
          url?: string;
        };
      };
    };
  };
}

export default function Agenda() {
  const [agendas, setAgendas] = useState<AgendaCardData[]>([]);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/api/agenda-cards?populate=image`)
      .then(res => res.json())
      .then(data => {
        console.log('Réponse Strapi :', data.data);
        setAgendas(data.data || []);
      })
      .catch((err) => {
        console.error('Erreur de chargement des agendas :', err);
        setAgendas([]);
      });
  }, []);

  return (
    <>
      <Header />
      <main className="main-page">
        <h1>Agenda</h1>
        <img
          src="/agenda.jpg"
          alt="photo d'un agenda noir sur table en bois"
          className="image"
        />
        {/* 🔁 Grille dynamique depuis Strapi */}
        <div className="grid">
          {Array.isArray(agendas) && agendas.length > 0 ? (
            agendas.map((agenda) => {
              if (!agenda || !agenda.attributes) return null;

              const { name, location, date, time, image } = agenda.attributes;
              const imageUrl = image?.data?.attributes?.url
                ? `http://localhost:1337${image.data.attributes.url}`
                : '/placeholder.jpg';

              return (
                <AgendaCard
                  key={agenda.id}
                  title={name}
                  image={imageUrl}
                  location={location}
                  date={date}
                  time={time}
                  href={`/agenda/${agenda.id}`} // ← lien vers la page détaillée
                />
              );
            })
          ) : (
            <p>Aucun événement disponible pour le moment.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
