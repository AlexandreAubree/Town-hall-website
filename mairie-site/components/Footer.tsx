// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h3 className="footer-h3">Informations</h3>
          <ul className="footer-ul">
            <li><a href="/mentions-legales" className="footer-a">Mentions légales</a></li>
            <li><a href="/accessibilite" className="footer-a">Accessibilité</a></li>
            <li><a href="/rgpd" className="footer-a">Politique RGPD</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} – Tous droits réservés
      </div>
    </footer>
  );
}
