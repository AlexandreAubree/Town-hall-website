import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SeoHead from '../../components/SeoHead';

export default function Documents() {
  const services = [
    { name: 'Inscription cantine scolaire', contact: 'cantinescolaire@mairie.fr', horaires: 'Lun-Ven 9h-12h / 14h-17h' },
    { name: 'Garderie', contact: 'garderies@mairie.fr', horaires: 'Lun-Ven 9h-12h' },
    { name: 'Transports scolaire', contact: 'transports@mairie.fr', horaires: 'Mercredi et Samedi 10h-18h' },
  ];

  return (
    <>
      <SeoHead
        title="Documents scolaire"
        description="Informations et documents scolaires."
      />
      <Header />
      <main className="main-page">
        <h1>Documents scolaire</h1>
        <ul className="doc-list">
          {services.map((service, index) => (
            <section key={index} className="paragraph">
             <li key={index}>
              <h3>{service.name}</h3>
              <p>{service.contact}</p>
              <p>{service.horaires}</p>
             </li>
            </section>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}