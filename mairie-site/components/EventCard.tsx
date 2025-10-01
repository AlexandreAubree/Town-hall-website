import { EventType } from './types';

type Props = EventType;

export default function EventCard({ title, image, date, location, description }: Props) {
  return (
    <div className="event-card">
      <h3>{title}</h3>
      <img src={image} alt={title} className="event-carousel-image" />
      <p>{date} – {location}</p>
      <p>{description}</p>
    </div>
  );
}
