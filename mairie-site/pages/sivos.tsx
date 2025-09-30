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
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, nesciunt est sit cum vitae facere libero magni natus nulla hic harum fugit asperiores officia illum ut neque aperiam dignissimos reprehenderit.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit nihil placeat, dolore praesentium ab dolores minima fugiat eligendi. Harum labore error, unde vitae dolores architecto ipsa aspernatur placeat eveniet modi!
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
