import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SeoHead from '../../components/SeoHead';

export default function Cantine() {
  const cantine = [
    { name: 'Menu de la semaine' },
    { name: 'Calendrier' },
    { name: 'Inscriptions', contact: 'cantinecivil@mairie.fr', horaires: 'Mercredi et Samedi 10h-18h' },
  ];

  return (
    <>
      <SeoHead
        title="Menus de la cantine scolaire"
        description="Informations et menus de la cantine scolaire."
      />
      <Header />
      <main className="main-page">
        <h1 className="page-title">Menus de la cantine scolaire</h1>
        <ul className="service-list">
          {cantine.map((cantine, index) => (
            <li key={index} className="service-card">
              <h2 className="service-name">{cantine.name}</h2>
              <p className="service-contact">{cantine.contact}</p>
              <p className="service-hours">{cantine.horaires}</p>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}