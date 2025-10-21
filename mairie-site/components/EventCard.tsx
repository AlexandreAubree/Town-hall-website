import { useEffect, useRef, useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaCommentDots } from 'react-icons/fa';
import { EventType } from './types';

type Props = EventType;

export default function EventCard({ title, image, date, location, description }: Props) {
  const detailsRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const el = detailsRef.current;
    if (el && el.scrollHeight > el.clientHeight) {
      setIsOverflowing(true);
    }
  }, []);

  return (
    <div className="event-card">
      <h3>{title}</h3>
      <img src={image} alt={title} className="event-carousel-image" />
      <div
        className={`event-details ${isOverflowing ? 'expanded' : ''}`}
        ref={detailsRef}
      >
        <p><FaCalendarAlt /> {date}</p>
        <p><FaMapMarkerAlt /> {location}</p>
        <p><FaCommentDots /> {description}</p>
      </div>
    </div>
  );
}
