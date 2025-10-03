import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SeoHead from '../../components/SeoHead';

export default function Documents() {
  const services = [
    { name: 'Urbanisme', contact: 'urbanisme@mairie.fr', horaires: 'Lun-Ven 9h-12h / 14h-17h' },
    { name: 'État civil', contact: 'etatcivil@mairie.fr', horaires: 'Lun-Ven 9h-12h' },
    { name: 'Bibliothèque', contact: 'bibliotheque@mairie.fr', horaires: 'Mercredi et Samedi 10h-18h' },
  ];

  return (
    <>
      <SeoHead
        title="Documents scolaire"
        description="Informations et documents scolaires."
      />
      <Header />
      <main className="main-page">
        <h1 className="page-title">Documents scolaire</h1>
        <ul className="service-list">
          {services.map((service, index) => (
            <li key={index} className="service-card">
              <h2 className="service-name">{service.name}</h2>
              <p className="service-contact">{service.contact}</p>
              <p className="service-hours">{service.horaires}</p>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}