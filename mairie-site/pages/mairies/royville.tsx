import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SeoHead from '../../components/SeoHead';
import { EventType } from '../../components/types';
import { useEffect, useState } from 'react';
import TownMapClient from '../../components/TownMapClient';
import EventCarousel from '../../components/EventCarousel';
import { FaCalendarAlt, FaMapMarkerAlt, FaPhoneSquare } from 'react-icons/fa';
import Image from 'next/image';

export default function Royville() {

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
        title="Mairie de Royville"
        description="Informations et actualités de la mairie de Royville."
      />
      <Header />
      <main className="sub-page">
        <h1>
          <Image
            src="/armoirie_royville-removebg-preview.png"
            alt="Armoirie de Royville"
            width={120} // adapte à ton design
            height={120}
            priority // charge dès le début
          />
          Royville
        </h1>

        <section className='section-actu'></section>
        {/* === Carrousel des événements === */}
        <h2 className="section-title">Actualités</h2>
        <EventCarousel events={events} />

        <section className='card-infos-mairie'></section>
        <h2>Mairie</h2>
        <Image
          src="/mairie_royville.jpg"
          alt="Photo de la mairie de Royville"
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

      {/* === Carte de la mairie === */}
      <section className='section-localisation'>
        <h3 className="section-title">Localisation</h3>
        <TownMapClient
          name="Mairie de Royville"
          address="12 rue du centre"
          position={[49.775, 0.956]} // coordonnées GPS
        />
      </section>
      <section className='paragraph'>
        <h3>À propos de Royville</h3>
        <p>
          Royville est une charmante commune située dans le département de la Seine-Maritime, en Normandie.
          Connue pour son cadre paisible et son riche patrimoine historique, elle offre un mélange unique de
          traditions rurales et de vie communautaire dynamique. La mairie de Royville s'engage à fournir des
          services de qualité à ses habitants tout en préservant l'authenticité et le charme du village.
        </p>
      </section>
      <section className='paragraph'>
        <h3> Lieux importants</h3>
        <p>
          Parmi les lieux notables de Royville, on trouve l'église Saint-Martin, un édifice historique datant du
          XIIe siècle, qui témoigne de l'architecture religieuse médiévale. Le parc communal, avec ses espaces
          verts bien entretenus, est un lieu de détente apprécié des résidents. De plus, le marché local,
          organisé chaque semaine, est un rendez-vous incontournable pour découvrir les produits régionaux et
          soutenir les producteurs locaux.
        </p>
      </section>
    </main >
      <Footer />
    </>
  );
}








