import Header from '../components/Header';
import Footer from '../components/Footer';
import SivosCard from '../components/SivosCard';

export default function Sivos() {
  return (
    <>
      <Header />
      <main className="main-page">
        <section>
          <h2>Bienvenue dans le SIVOS</h2>
          <p>Le Syndicat Intercommunal à Vocation Scolaire (SIVOS) regroupe plusieurs communes pour gérer ensemble les écoles maternelles et primaires, ainsi que les services associés comme la cantine scolaire. Notre objectif est d'offrir un environnement éducatif de qualité aux enfants tout en facilitant la gestion administrative et logistique des établissements scolaires.</p>
          <p>Sur cette page, vous trouverez des informations sur les écoles, les services proposés, les actualités et les documents importants liés au SIVOS. N'hésitez pas à explorer les différentes sections pour en savoir plus sur nos activités et initiatives.</p>
          <p>Nous sommes engagés à travailler en étroite collaboration avec les familles, les enseignants et les collectivités locales pour assurer le bien-être et la réussite des enfants dans nos écoles. Merci de votre visite et de votre intérêt pour le SIVOS !
          </p>
        </section>
        <section>
          <div className="grid">
            <SivosCard name="École maternelle" image="/ecole_maternelle.jpg" href="/sivos/ecole-maternelle" />
            <SivosCard name="École primaire" image="/ecole_primaire.jpg" href="/sivos/ecole-primaire" />
            <SivosCard name="Cantine scolaire" image="/cantine.jpg" href="/sivos/cantine" />
            <SivosCard name="Documents" image="/documents.jpg" href="/sivos/documents" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
