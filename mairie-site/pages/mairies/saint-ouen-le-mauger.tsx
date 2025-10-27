import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SeoHead from '../../components/SeoHead';
import { EventType } from '../../components/types';
import { useEffect, useState } from 'react';
import TownMapClient from '../../components/TownMapClient';
import EventCarousel from '../../components/EventCarousel';
import { FaCalendarAlt, FaMapMarkerAlt, FaPhoneSquare } from 'react-icons/fa';
import Image from 'next/image';

export default function SaintOuenLeMauger() {

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
        title="Mairie de Saint-Ouen le Mauger"
        description="Informations et actualités de la mairie de Saint-Ouen le Mauger."
      />
      <Header />
      <main className="sub-page">
        <h1 className="sub-title">Saint-Ouen le Mauger</h1>

        {/* === Carrousel des événements === */}
        <section>
          <h2 className="section-title">Actualités</h2>
          <EventCarousel events={events} />
        </section>

        <h2>Mairie</h2>

        {/* === Image mairie === */}
        <Image
          src="/mairie_st_ouen_le_mauger.jpg"
          alt="Photo de la mairie de Saint-Ouen-le-Mauger"
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
            name="Mairie de Saint-Ouen-le-Mauger"
            address="12 rue du centre"
            position={[49.758, 0.962]} // Latitude, Longitude
          />
        </section>
        <section className='paragraph'>
          <h3>À propos de Saint-Ouen le Mauger</h3>
          <p>
            Saint-Ouen le Mauger est une charmante commune située dans le département de la Seine-Maritime, en Normandie. Connue pour son riche patrimoine historique et ses paysages pittoresques, elle offre un cadre de vie paisible à ses habitants. La mairie s'engage à fournir des services de qualité et à promouvoir le développement local à travers diverses initiatives et événements communautaires.
          </p>
        </section>
        <section className='paragraph'>
          <h3> Lieux importants</h3>
          <p>
            Parmi les lieux importants de Saint-Ouen le Mauger, on trouve l'église Saint-Ouen, un édifice historique datant du XIIe siècle, ainsi que plusieurs sentiers de randonnée qui permettent de découvrir la beauté naturelle de la région. La commune organise également des événements culturels et festifs tout au long de l'année, renforçant ainsi le lien entre les habitants.
          </p>
        </section>          
      </main>
      <Footer />
    </>
  );
}








