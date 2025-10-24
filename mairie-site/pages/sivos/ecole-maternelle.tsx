import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SeoHead from '../../components/SeoHead';
import { EventType } from '../../components/types';
import { useEffect, useState } from 'react';
import EventCarousel from '../../components/EventCarousel';
import { FaCalendarAlt, FaMapMarkerAlt, FaPhoneSquare } from 'react-icons/fa';
import Image from 'next/image';

export default function EcoleMaternelle() {
  
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
        title="École maternelle"
        description="Informations et actualités des écoles maternelle."
      />
      <Header />
      <main className="sub-page">
        <h1>École maternelle de Saint-Ouen-le-Mauger</h1>

        {/* === Carrousel des événements === */}
        <section>
          <h2>Actualités</h2>
          <EventCarousel events={events} />
        </section>

        {/* === Infos utiles === */}
        <section className='paragraph'>
          <h3>Informations utiles</h3>
          <ul className="info-list">
            <li><FaMapMarkerAlt /> Adresse école : 140 route du Manoir de Lestanville, 76730 ST OUEN LE MAUGER</li>
            <li><FaCalendarAlt /> Horaires et jours d'ouvertures : Lundi, Mardi, Jeudi et Vendredi de 9h à 12h le matin et de 13h40 à 16h40 l'après-midi</li>
            <li><FaPhoneSquare /> Contact : 02 35 04 49 44</li>
            <li><FaPhoneSquare /> Mail : ce.0760372S@ac-normandie.fr</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
