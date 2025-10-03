import { useEffect, useState } from 'react';
import SeoHead from '../components/SeoHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AgendaType } from '../components/types';
import AgendaCard from '../components/AgendaCard';

export default function Agenda() {
  const [agendas, setAgendas] = useState<AgendaType[]>([]);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/api/agenda-cards?populate=*`)
      .then(res => res.json())
      .then(data => {
        console.log('Réponse Strapi complète :', JSON.stringify(data, null, 2));

        const validAgendas = (data.data || []).map((item: any) => {
          if (!item || !item.id || !item.title || !item.date || !item.time || !item.location) return null;

          const imageUrl = item.image?.url
            ? `${API_URL}${item.image.url}`
            : '/placeholder.jpg';

          return {
            title: item.title,
            image: imageUrl,
            date: item.date,
            time: item.time,
            location: item.location,
            href: `/agenda/${item.id}`,
          };
        }).filter(Boolean); // retire les null

        setAgendas(validAgendas);
      })
      .catch((err) => {
        console.error('Erreur de chargement des agendas :', err);
        setAgendas([]);
      });
  }, []);

  return (
    <>
      <SeoHead 
      title="Agenda des 5 villages"
      description="Consultez les événements à venir dans les 5 villages : Royville, Lestanville, Auzouville-sur-Sâane, Saint-Ouen le Mauger et Saint-Pierre Bénouville."
       />

      <Header />
      <main className="main-page">
        <h1>Agenda</h1>
        <img
          src="/agenda.jpg"
          alt="photo d'un agenda noir sur table en bois"
          className="image"
        />
        <div className="grid">
          {agendas.length > 0 ? (
            agendas.map((agenda, index) => (
              <AgendaCard
                key={index}
                title={agenda.title}
                image={agenda.image}
                location={agenda.location}
                date={agenda.date}
                time={agenda.time}
                href={agenda.href}
              />
            ))
          ) : (
            <p>Aucun événement disponible pour le moment.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
