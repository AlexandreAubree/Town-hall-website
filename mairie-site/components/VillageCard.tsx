type Props = {
  name: string;
  image: string;
  href: string;
};

export default function VillageCard({ name, image, href }: Props) {
  return (
    <a href={href} className="block border rounded-lg p-4 shadow hover:bg-gray-100">
      <img src={image} alt={`Photo de ${name}`} className="w-full h-32 object-cover rounded" />
      <h3 className="text-lg font-bold mt-2">{name}</h3>
    </a>
  );
}
