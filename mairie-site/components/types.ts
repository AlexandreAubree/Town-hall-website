export type EventType = {
  title: string;
  image: string;
  date: string;
  location: string;
  description: string;
};

export type AgendaType = {
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
  href?: string; // lien vers la page détaillée
};