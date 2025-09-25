import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

const faqs = [
  {
    question: 'Comment inscrire mon enfant à l’école ?',
    answer: 'Présentez-vous à la mairie avec un justificatif de domicile et le livret de famille.',
  },
  {
    question: 'Quels sont les horaires d’ouverture de la mairie ?',
    answer: 'Du lundi au vendredi, de 9h à 12h et de 14h à 17h.',
  },
  {
    question: 'Comment accéder à l’espace paiement ?',
    answer: 'Cliquez sur “Paiement” dans le menu principal pour accéder à la plateforme sécurisée.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main className="page">
        <h1 className="page-title">Foire aux questions</h1>
        <ul className="faq-list">
          {faqs.map((faq, index) => (
            <li key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
              </button>
              {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
