import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SeoHead from '../../components/SeoHead';
import TownMapClient from '../../components/TownMapClient';
import { EventType } from '../../components/types';
import { useEffect, useState } from 'react';
import EventCarousel from '../../components/EventCarousel';
import { FaCalendarAlt, FaMapMarkerAlt, FaPhoneSquare } from 'react-icons/fa';
import Image from 'next/image';

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

        <h1>
          <Image
            src="/la-seine-maritime_blason-fr_wp.webp"
            alt="Armoirie de la Seine-Maritime"
            width={120} // adapte à ton design
            height={120}
            priority // charge dès le début
          />
          Auzouville-sur-Saâne
        </h1>

        <section className='section-actu'>
          {/* === Carrousel des événements === */}
          <h2>Actualités</h2>
          <EventCarousel events={events} />
        </section>
<h2>Mairie</h2>
        <section className='card-infos-mairie'>
          
          {/* === Image mairie === */}
          <Image
            src="/mairie_auzouville_sur_saane.jpg"
            alt="Photo de la mairie de Auzouville-sur-Sâane"
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
        </section>

        {/* === Carte interactive === */}
        <section className='section-localisation'>
          <h3>Localisation</h3>          
            <TownMapClient
              name="Auzouville-sur-Saâne"
              address="12 rue du centre"
              position={[49.744, 0.936]} // Latitude, Longitude
            />
        </section>
        <section className='paragraph'>
          <h3>À propos d'Auzouville-sur-Saâne</h3>
          <p>
            Auzouville-sur-Saâne est une charmante commune située dans le département de la Seine-Maritime, en Normandie. Connue pour son cadre pittoresque et son riche patrimoine historique, la commune offre un mélange unique de traditions rurales et de vie communautaire dynamique. Les habitants d'Auzouville-sur-Saâne sont fiers de leur village, qui est entouré de paysages naturels magnifiques, notamment la vallée de la Saâne.
          </p>
          <p>
            La mairie d'Auzouville-sur-Saâne joue un rôle central dans la vie locale, organisant divers événements culturels et sociaux tout au long de l'année. La commune est également engagée dans des initiatives visant à préserver son environnement naturel et à promouvoir le développement durable.
          </p>
        </section>
        <section className='paragraph'>
          <h3>Lieux importants</h3>
          <p>
            Parmi les lieux d'intérêt à Auzouville-sur-Saâne, on trouve l'église Saint-Martin, un édifice historique datant du XIIe siècle, qui témoigne de l'architecture religieuse de la région. Le village dispose également de plusieurs sentiers de randonnée qui permettent aux visiteurs de découvrir la beauté naturelle des environs, notamment les rives de la Saâne et les collines environnantes.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}








