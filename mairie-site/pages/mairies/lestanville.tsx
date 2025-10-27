import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SeoHead from '../../components/SeoHead';
import { EventType } from '../../components/types';
import { useEffect, useState } from 'react';
import TownMapClient from '../../components/TownMapClient';
import EventCarousel from '../../components/EventCarousel';
import { FaCalendarAlt, FaMapMarkerAlt, FaPhoneSquare } from 'react-icons/fa';
import Image from 'next/image';

export default function Lestanville() {

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
        title="Mairie de Lestanville"
        description="Informations et actualités de la mairie de Lestanville."
      />
      <Header />
      <main className="sub-page">
        <h1 className="sub-title">Lestanville</h1>

        {/* === Carrousel des événements === */}
        <section>
          <h2>Actualités</h2>
          <EventCarousel events={events} />
        </section>

        <h2>Mairie</h2>

        {/* === Image mairie === */}
        <Image
          src="/mairie_lestanville.jpg"
          alt="Photo de la mairie de Lestanville"
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
          <h3>Localisation</h3>
          <TownMapClient
            name="Mairie de Lestanville"
            address="12 rue du centre"
            position={[49.747, 0.9585]} // coordonnées GPS
          />
        </section>
        <section className='paragraph'>
          <h3> À propos de Lestanville</h3>
          <p >
          Lestanville est une charmante commune située dans le département de la Seine-Maritime, en Normandie. Nichée au cœur de la campagne normande, elle offre un cadre paisible et pittoresque, idéal pour les amoureux de la nature et du patrimoine rural. La commune est entourée de paysages verdoyants, de champs agricoles et de petites forêts, offrant de nombreuses possibilités de randonnées et de balades à vélo.
          </p>
          <p>
          Lestanville est également riche en histoire, avec plusieurs bâtiments anciens et une église datant de plusieurs siècles. La vie communautaire y est dynamique, avec des événements locaux réguliers qui renforcent le lien entre les habitants. La mairie joue un rôle central dans l'organisation de ces activités et dans la gestion des affaires locales.
          </p>
          <p>
          En somme, Lestanville est une commune qui allie charme rural, histoire et convivialité, faisant d'elle un lieu de vie agréable pour ses résidents et une destination intéressante pour les visiteurs.
          </p>
        </section>
        <section className='paragraph'>
          <h3> Lieux importants</h3>
          <p>
          Parmi les lieux importants de Lestanville, on trouve l'église Saint-Martin, un édifice historique qui témoigne de l'architecture religieuse normande. La mairie elle-même est un centre névralgique pour les habitants, où se tiennent les réunions municipales et diverses activités communautaires. Le village dispose également d'une salle des fêtes, utilisée pour les événements locaux tels que les mariages, les fêtes de village et les réunions associatives.
          </p>
          <p>
          Les espaces naturels environnants, comme les sentiers de randonnée et les aires de pique-nique, sont également des lieux prisés par les résidents et les visiteurs. Ces espaces offrent un cadre idéal pour se détendre et profiter de la beauté naturelle de la région.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}








