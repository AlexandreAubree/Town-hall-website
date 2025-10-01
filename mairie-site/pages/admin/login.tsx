import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [Email, setIdentifier] = useState('');
  const [Password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
         identifier: Email,
         password: Password
         }),
    });

    const data = await res.json();
    if (data.jwt) {
      localStorage.setItem('token', data.jwt);
      router.push('/admin/agenda');
    } else {
      alert('Échec de connexion');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Connexion</h2>
      <input type="email" value={Email} onChange={e => setIdentifier(e.target.value)} placeholder="Email" />
      <input type="password" value={Password} onChange={e => setPassword(e.target.value)} placeholder="Mot de passe" />
      <button type="submit">Se connecter</button>
    </form>
  );
}
