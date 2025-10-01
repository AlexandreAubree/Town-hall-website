import { useState, useEffect } from 'react';
import { AgendaType } from './types';

type Props = {
  onSubmit: (data: AgendaType) => void;
  initialData?: AgendaType;
};

export default function AgendaForm({ onSubmit, initialData }: Props) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || '');
      setDate(initialData.date || '');
      setTime(initialData.time || '');
      setLocation(initialData.location || '');
      setImage(initialData.image || '');
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, date, time, location, image });
  };

  return (
    <form onSubmit={handleSubmit} className="agenda-form">
      <h2>{initialData ? 'Modifier un agenda' : 'Créer un nouvel agenda'}</h2>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Titre"
        required
      />
      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
        required
      />
      <input
        type="time"
        value={time}
        onChange={e => setTime(e.target.value)}
        required
      />
      <input
        type="text"
        value={location}
        onChange={e => setLocation(e.target.value)}
        placeholder="Lieu"
        required
      />
      <input
        type="text"
        value={image}
        onChange={e => setImage(e.target.value)}
        placeholder="URL de l'image"
      />
      <button type="submit">Enregistrer</button>
    </form>
  );
}
