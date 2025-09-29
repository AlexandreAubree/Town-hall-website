type Props = {
  name: string;
  image: string;
  href: string;
};

export default function SivosCard({ name, image, href }: Props) {
  return (
    <a href={href} className="card">
      <img src={image} alt={`Photo de ${name}`} className="card-img" />
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
      </div>
    </a>
  );
}
