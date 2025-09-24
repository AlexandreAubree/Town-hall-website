// pages/admin/login.tsx
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:1337/api/auth/local', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identifier: email, password }),
    });
    const data = await res.json();
    if (data.jwt) {
      localStorage.setItem('strapi_jwt', data.jwt);
      alert('Connecté !');
      window.location.href = '/admin';
    } else {
      alert('Erreur de connexion');
    }
  };

  return (
    <form onSubmit={handleLogin} className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Connexion admin</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border p-2 w-full mb-2" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" className="border p-2 w-full mb-4" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Se connecter</button>
    </form>
  );
}
