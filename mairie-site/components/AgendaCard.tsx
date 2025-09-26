type Props = {
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
};

export default function EventCard({ title, image, date, time, location,  }: Props) {
  return (
    <div className="event-card">
      <h3>{title}</h3>
      <img src={image} alt={title} className="actu-image" />
      <p>{date} – {time} – {location}</p>
    </div>
  );
}