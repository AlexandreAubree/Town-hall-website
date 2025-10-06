import Link from 'next/link';
import { AgendaType } from './types';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

type Props = AgendaType;

export default function AgendaCard({ title, image, date, time, location, href }: Props) {
  console.log('AgendaCard rendu', title);
  return (
    <div className="agenda-card">
      <h3>{title}</h3>
      <img src={image} alt={title} className="agenda-image" />

      <div className="agenda-details">
        <p><FaCalendarAlt /> {date}</p>
        <p><FaClock /> {time}</p>
        <p><FaMapMarkerAlt /> {location}</p>
      </div>

      {href && (
        <Link href={href}>
          <button className="voir-plus">Voir plus</button>
        </Link>
      )}
    </div>
  );
}
