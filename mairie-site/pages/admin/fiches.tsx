// pages/admin/fiches.tsx
import { useState, useEffect } from 'react';

export default function AdminFiches() {
  const [fiches, setFiches] = useState([]);
  const [form, setForm] = useState({
    title: '',
    description: '',
    category: 'cantine',
    contact: '',
    visible: true,
  });

  // Charger les fiches existantes
  useEffect(() => {
    fetch('http://localhost:1337/api/fiche-sivos')
      .then((res) => res.json())
      .then((data) => setFiches(data.data));
  }, []);

  // Soumettre le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('strapi_jwt');
    await fetch('http://localhost:1337/api/fiche-sivos', {
      method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ data: form }),
    });
    alert('Fiche ajoutée !');
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Ajouter une fiche SIVOS</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Titre"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border p-2 w-full"
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="border p-2 w-full"
        />
        <select
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="border p-2 w-full"
        >
          <option value="cantine">Cantine</option>
          <option value="documents">Documents</option>
          <option value="ecole maternelle">École maternelle</option>
          <option value="ecole primaire">École primaire</option>
        </select>
        <input
          type="text"
          placeholder="Contact"
          value={form.contact}
          onChange={(e) => setForm({ ...form, contact: e.target.value })}
          className="border p-2 w-full"
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={form.visible}
            onChange={(e) => setForm({ ...form, visible: e.target.checked })}
          />
          <span>Visible</span>
        </label>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Ajouter
        </button>
      </form>

      <h2 className="text-xl font-semibold mt-8 mb-4">Fiches existantes</h2>
      <ul className="space-y-2">
        {fiches.map((fiche) => (
          <li key={fiche.id} className="border p-2 rounded">
            <strong>{fiche.attributes.title}</strong> – {fiche.attributes.category}
          </li>
        ))}
      </ul>
    </div>
  );
}
