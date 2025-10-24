import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SeoHead from '../../components/SeoHead';
import { useEffect, useState } from 'react';
import { CantineType } from '../../components/types';
import MenusCard from '../../components/MenusCard';


export default function Cantine() {
  const [menus, setEvents] = useState<CantineType[]>([]);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/api/menus-cantines?populate=*`)
      .then(res => res.json())
      .then(data => {
        console.log('Réponse Strapi complète :', JSON.stringify(data, null, 2));

        const validMenus = (data.data || []).map((item: any) => {
          if (!item || !item.id || !item.title || !item.image) return null;

          const imageUrl = item.image?.url
            ? `${API_URL}${item.image.url}`
            : '/placeholder.jpg';

          return {
            title: item.title,
            image: imageUrl,
          };
        }).filter(Boolean); // retire les null

        setEvents(validMenus);
      })
      .catch((err) => {
        console.error('Erreur de chargement des actus :', err);
        setEvents([]);
      });
  }, []);

  return (
    <>
      <SeoHead
        title="Menus de la cantine scolaire"
        description="Menus de la cantine scolaire."
      />
      <Header />
      <main className="main-page">
        <h1 className="page-title">Menus de la cantine scolaire</h1>
        <section>
          <h2>Menus des prochaines semaines</h2>
          <MenusCard
            title={menus.length > 0 ? menus[0].title : 'Aucun menu disponible'}
            image={menus.length > 0 ? menus[0].image : '/placeholder.jpg'}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}