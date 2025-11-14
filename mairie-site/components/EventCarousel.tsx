import { useRef, useState } from 'react';
import { EventType } from './types';
import EventCard from './EventCard';

type Props = {
  events: EventType[];
};

export default function EventCarousel({ events }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, events.length - 1));
  };

  return (
    <div className="carousel-container">
      <div className="carousel-track"
        ref={trackRef}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {events.map((event, index) => (
          <div key={index} className="carousel-slide">
            <EventCard {...event} />
          </div>
        ))}
      </div>

      <div className="carousel-controls">
        <button
          className="carousel-button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="actualité précédente"
        >
          ‹
        </button>
        <button
          className="carousel-button"
          onClick={handleNext}
          disabled={currentIndex === events.length - 1}
          aria-label="actualité suivante"
        >
          ›
        </button>
      </div>
    </div>
  );
}
