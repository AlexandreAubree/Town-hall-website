import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SeoHead from '../../components/SeoHead';
import { EventType } from '../../components/types';
import { useEffect, useState } from 'react';
import TownMapClient from '../../components/TownMapClient';
import EventCarousel from '../../components/EventCarousel';
import { FaCalendarAlt, FaMapMarkerAlt, FaPhoneSquare } from 'react-icons/fa';
import Image from 'next/image';

export default function SaintPierreBenouville() {

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
        title="Mairie de Saint-Pierre-Bénouville"
        description="Informations et actualités de la mairie de Saint-Pierre-Bénouville."
      />
      <Header />
      <main className="sub-page">
        <h1 className="sub-title">Saint-Pierre-Bénouville</h1>

        {/* === Carrousel des événements === */}
        <section>
          <h2 className="section-title">Actualités</h2>
          <EventCarousel events={events} />
        </section>

        <h2>Mairie</h2>

        {/* === Image mairie === */}
        <Image
          src="/mairie_st_pierre_benouville.jpg"
          alt="Photo de la mairie de Saint-Pierre-Bénouville"
          className="image"
          width={600}
          height={400}
          priority
        />

        {/* === Infos utiles === */}
        <section className='paragraph' >
          <h3>Informations utiles</h3>
          <ul className="info-list">
            <li><FaMapMarkerAlt /> Adresse mairie : 12 rue du centre</li>
            <li>Maire : </li>
            <li><FaCalendarAlt /> Horaires : Lundi à Vendredi, 9h–12h / 14h–17h</li>
            <li>Secrétaire : </li>
            <li><FaPhoneSquare /> Téléphone : 02 35 XX XX XX</li>
            <li>Email : </li>
          </ul>
        </section>
        <section>
          <h3 className="section-title">Localisation</h3>
          <TownMapClient
            name="Mairie de Saint-Pierre-Bénouville"
            address="12 rue du centre"
            position={[49.74, 0.97]} // Latitude, Longitude
          />
        </section>
        <section className='paragraph'>
          <h3>À propos de Saint-Pierre-Bénouville</h3>
          <p>
            Saint-Pierre-Bénouville est une charmante commune située dans le département de la Seine-Maritime, en Normandie. Connue pour son cadre pittoresque et son riche patrimoine historique, la commune offre un environnement paisible à ses habitants. La mairie s'engage à fournir des services de qualité et à promouvoir le bien-être de la communauté locale.
          </p>
        </section>
        <section className='paragraph'>
          <h3> Lieux importants</h3>
          <p>
            Parmi les lieux importants de Saint-Pierre-Bénouville, on trouve l'église paroissiale dédiée à Saint Pierre, un édifice historique qui témoigne de l'architecture religieuse traditionnelle de la région. La commune dispose également d'une école primaire qui accueille les enfants du village et des environs. Pour les loisirs, le parc communal offre un espace vert agréable pour les promenades et les activités en plein air.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}








