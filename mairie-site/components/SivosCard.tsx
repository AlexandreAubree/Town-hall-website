import Image from 'next/image';

type Props = {
  name: string;
  image: string;
  href: string;
};

export default function SivosCard({ name, image, href }: Props) {
  return (
    <a href={href} className="card">
      <Image
       src={image} 
       alt={`Photo de ${name}`} 
       className="card-img" 
        width={400}
        height={300}
       />
      <div>
        <h3 className='card-title'>{name}</h3>
      </div>
    </a>
  );
}
