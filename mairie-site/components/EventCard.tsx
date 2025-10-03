import { EventType } from './types';
import { FaCalendarAlt, FaMapMarkerAlt, FaCommentDots } from 'react-icons/fa';

type Props = EventType;

export default function EventCard({ title, image, date, location, description }: Props) {
  return (
    <div className="event-card">
      <h3>{title}</h3>
      <img src={image} alt={title} className="event-carousel-image" />
      <div className="event-details">
        <p><FaCalendarAlt /> {date}</p>
        <p><FaMapMarkerAlt /> {location}</p>
        <p><FaCommentDots /> {description}</p>
      </div>
    </div>
  );
}







 
 

      

      