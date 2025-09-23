type Props = {
  title: string;
  date: string;
  location: string;
};

export default function EventCard({ title, date, location }: Props) {
  return (
    <div className="event-card">
      <h3>{title}</h3>
      <p>{date} – {location}</p>
    </div>
  );
}
