import { useRef } from 'react';
import { EventType } from './types';  
import EventCard from './EventCard';

type Props = {
  events: EventType[];
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
