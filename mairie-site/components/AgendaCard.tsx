import Link from 'next/link';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

type Props = {
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
  href?: string; // lien vers la page détaillée
};

export default function AgendaCard({ title, image, date, time, location, href }: Props) {
  return (
    <div className="event-card">
      <h3>{title}</h3>
      <img src={image} alt={title} className="actu-image" />

      <div className="event-details">
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
