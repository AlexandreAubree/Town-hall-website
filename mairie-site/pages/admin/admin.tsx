import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Admin() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('strapi_jwt');
    if (!token) {
      router.push('/admin/login');
    }
  }, []);

  return <div className="p-6">Bienvenue dans l’espace admin</div>;
}
