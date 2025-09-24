type Props = {
  title: string;
  date: string;
  location: string;
  description: string;
};

export default function EventCard({ title, date, location, description }: Props) {
  return (
    <div className="event-card">
      <h3>{title}</h3>
      <p>{date} – {location}</p>
      <p>{description}</p>
    </div>
  );
}
