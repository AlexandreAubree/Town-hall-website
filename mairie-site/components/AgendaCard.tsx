import { useState } from 'react';
import { AgendaType } from './types';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

export default function AgendaCard({ title, image, date, time, location, description }: AgendaType) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`agenda-card ${expanded ? 'expanded' : ''}`}>
      <h3>{title}</h3>
      <img src={image} alt={title} className="agenda-image" />

      <div className="agenda-details">
        <p><FaCalendarAlt /> {date}</p>
        <p><FaClock /> {time}</p>
        <p><FaMapMarkerAlt /> {location}</p>
      </div>

      {expanded && description && (
        <div className="agenda-description">
          <p>{description}</p>
        </div>
      )}

      <button className="voir-plus" onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Voir moins' : 'Voir plus'}
      </button>
    </div>
  );
}
