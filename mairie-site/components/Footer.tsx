// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 text-sm mt-12 border-t">
      <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h3 className="font-semibold mb-2">Informations</h3>
          <ul className="space-y-1">
            <li><a href="/mentions-legales" className="hover:underline">Mentions légales</a></li>
            <li><a href="/accessibilite" className="hover:underline">Accessibilité</a></li>
            <li><a href="/rgpd" className="hover:underline">Politique RGPD</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center py-4 border-t text-xs text-gray-500">
        &copy; {new Date().getFullYear()} – Tous droits réservés
      </div>
    </footer>
  );
}
