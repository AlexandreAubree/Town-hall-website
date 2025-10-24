import { useState } from 'react';
import { AgendaType } from './types';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function AgendaCard({ title, image, date, time, location, description }: AgendaType) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`agenda-card ${expanded ? 'expanded' : ''}`}>
      <h3>{title}</h3>
      <div className="agenda-details">
        <p><FaCalendarAlt /> {date}</p>
        <p><FaClock /> {time}</p>
        <p><FaMapMarkerAlt /> {location}</p>
      </div>

      {expanded && image && (
        <div className="agenda-description">
          <Image 
            src={image}
            alt={title}
            width={200}
            height={100}
            priority
          />
          <p>{description}</p>
        </div>
      )}

      <button className="voir-plus" onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Voir moins' : 'Voir plus'}
      </button>
    </div>
  );
}
