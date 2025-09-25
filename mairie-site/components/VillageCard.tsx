type Props = {
  name: string;
  image: string;
  href: string;
};

export default function VillageCard({ name, image, href }: Props) {
  return (
    <a href={href} className="village-card">
      <img src={image} alt={`Photo de ${name}`} className="village-card-img" />
      <div className="village-card-content">
        <h3 className="village-card-title">{name}</h3>
      </div>
    </a>
  );
}
