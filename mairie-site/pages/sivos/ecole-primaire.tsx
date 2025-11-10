import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SeoHead from '../../components/SeoHead';
import { EventType } from '../../components/types';
import { useEffect, useState } from 'react';
import EventCarousel from '../../components/EventCarousel';
import { FaCalendarAlt, FaMapMarkerAlt, FaPhoneSquare } from 'react-icons/fa';

export default function EcolePrimaire() {
  
  const [events, setEvents] = useState<EventType[]>([]);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/api/evenements?populate=*`)
      .then(res => res.json())
      .then(data => {
        console.log('Réponse Strapi complète :', JSON.stringify(data, null, 2));

        const validEvents = (data.data || []).map((item: any) => {
          if (!item || !item.id || !item.title || !item.date || !item.description || !item.location) return null;

          const imageUrl = item.image?.url
            ? `${API_URL}${item.image.url}`
            : '/placeholder.jpg';

          return {
            title: item.title,
            image: imageUrl,
            date: item.date,
            location: item.location,
            description: item.description
          };
        }).filter(Boolean); // retire les null

        setEvents(validEvents);
      })
      .catch((err) => {
        console.error('Erreur de chargement des actus :', err);
        setEvents([]);
      });
  }, []);
  return (
    <>
      <SeoHead
        title="École élémentaire"
        description="Informations et actualités de l'écoles élémentaire de Saint-Pierre Bénouville."
      />
      <Header />
      <main className="sub-page">
        <h1>École élémentaire de Saint-Pierre Bénouville</h1>

        {/* === Carrousel des événements === */}
        <section className='section-actu'>
          <h2>Actualités</h2>
          <EventCarousel events={events} />
        </section>

        {/* === Infos utiles === */}
        <section className="paragraph">
          <h3>Informations utiles</h3>
          <ul className="info-list">
            <li><FaMapMarkerAlt /> Adresse de l'école : 6 rue de la Vallée, 76890 ST PIERRE BENOUVILLE </li>
            <li><FaCalendarAlt /> Horaires et jours d'ouvertures : Lundi, Mardi, Jeudi et Vendredi de 8h40 à 11h40 le matin et de 13h20 à 16h20 l'après-midi</li>
            <li><FaPhoneSquare /> Contact : 02 35 XX XX XX</li>
            <li><FaPhoneSquare /> Mail : </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
