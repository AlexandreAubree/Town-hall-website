import { useRef } from 'react';
import EventCard from './EventCard';

type Props = {
  events: {
    title: string;
    image: string;
    date: string;
    location: string;
    description: string;
  }[];
};

export default function EventCarousel({ events }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="carousel-container">
      <div className="carousel-track" ref={scrollRef}>
        {events.map((event, index) => (
          <div key={index} className="carousel-slide">
            <EventCard {...event} />
          </div>
        ))}
      </div>
    </div>
  );
}
