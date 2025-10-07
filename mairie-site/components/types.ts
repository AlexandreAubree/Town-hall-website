import TownMap from "./LeafletMap";

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
  href?: string; 
  description?: string;
};

export type ServiceType = {
  name: string;
  description: string;
  icon: string; // URL de l'icône
  link?: string; // lien vers plus d'infos
};

export type TownMapType = {
  name: string;
  address: string;
  position: [number, number];
};