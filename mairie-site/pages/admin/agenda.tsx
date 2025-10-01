import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AgendaForm from '../../components/AgendaForm';
import { AgendaType } from '../../components/types';

export default function AdminAgenda() {
  const [agendas, setAgendas] = useState<AgendaType[]>([]);
  const [editingAgenda, setEditingAgenda] = useState<AgendaType | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  useEffect(() => {
    if (!token) {
      router.push('/admin/login');
      return;
    }

    fetch(`${API_URL}/api/agenda-cards`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => {
        const validAgendas = (data.data || []).map((item: any) => {
          const imageUrl = item.image?.url
            ? `${API_URL}${item.image.url}`
            : '/placeholder.jpg';

          return {
            title: item.title,
            date: item.date,
            time: item.time,
            location: item.location,
            image: imageUrl,
            href: `/agenda/${item.id}`,
          };
        });

        setAgendas(validAgendas);
      });
  }, []);

  const handleSubmit = async (agendaData: AgendaType) => {
    const method = editingId ? 'PUT' : 'POST';
    const url = editingId
      ? `${API_URL}/api/agenda-cards/${editingId}`
      : `${API_URL}/api/agenda-cards`;

    await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ data: agendaData }),
    });

    setEditingAgenda(null);
    setEditingId(null);
    location.reload();
  };

  const handleDelete = async (id: number) => {
    await fetch(`${API_URL}/api/agenda-cards/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    location.reload();
  };

  return (
    <div className="admin-agenda">
      <h1>Gestion des agendas</h1>
      <AgendaForm onSubmit={handleSubmit} initialData={editingAgenda || undefined} />
      <ul>
        {agendas.map((agenda, index) => (
          <li key={index}>
            <strong>{agenda.title}</strong> — {agenda.date} à {agenda.time} ({agenda.location})
            <br />
            <button onClick={() => {
              setEditingAgenda(agenda);
              setEditingId(parseInt(agenda.href?.split('/').pop() || '0'));
            }}>Modifier</button>
            <button onClick={() => handleDelete(parseInt(agenda.href?.split('/').pop() || '0'))}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
