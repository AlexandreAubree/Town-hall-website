import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SeoHead from '../../components/SeoHead';
import TownMapClient from '../../components/TownMapClient';
import { EventType } from '../../components/types';
import { useEffect, useState } from 'react';
import EventCarousel from '../../components/EventCarousel';
import { FaCalendarAlt, FaMapMarkerAlt, FaPhoneSquare } from 'react-icons/fa';

export default function AuzouvilleSurSaane() {

  const [events, setEvents] = useState<EventType[]>([]);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/api/actu-mairies?populate=*`)
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
        title="Mairie d'Auzouville-sur-Saâne"
        description="Informations et actualités de la mairie d'Auzouville-sur-Saâne."
        />
      <Header />
      <main className="sub-page">
        <h1 className="sub-title">Auzouville-sur-Saâne</h1>

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
            <li><FaMapMarkerAlt /> Adresse mairie : 12 rue du centre</li>
            <li><FaCalendarAlt /> Horaires : Lundi à Vendredi, 9h–12h / 14h–17h</li>
            <li><FaPhoneSquare /> Contact : 02 35 XX XX XX</li>
          </ul>
        </section>
        <section>
                  <h3 className="section-title">Localisation</h3>
                  <TownMapClient
                    name="Auzouville-sur-Saâne"
                    address="12 rue du centre"
                    position={[49.744, 0.936]} // Latitude, Longitude
                  />
                </section>
      </main>
      <Footer />
    </>
  );
}



  
  
     

        
