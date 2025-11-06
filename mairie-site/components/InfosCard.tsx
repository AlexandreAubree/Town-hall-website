import { InfosType } from './types';
import { useEffect, useRef } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaPhoneSquare } from 'react-icons/fa';

type Props = InfosType;

export default function InfosCard({ phone, email, address, openingHours, secretary, mayor }: Props) {
  const detailsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const el = detailsRef.current;
    if (el && el.scrollHeight > el.clientHeight) {
    }
  }, []);

  return (
    <section className='paragraph' >
                <h3>Informations utiles</h3>
                <ul className="info-list">
                  <li><FaMapMarkerAlt />{address}</li>
                  <li>Maire : {mayor}</li>
                  <li><FaCalendarAlt /> Horaires : {openingHours}</li>
                  <li>Secrétaire : {secretary}</li>
                  <li><FaPhoneSquare /> Téléphone : {phone}</li>
                  <li>Email : {email}</li>
                </ul>
              </section>
  );
}