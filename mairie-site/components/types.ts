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

export type CantineType = {
  title: string;
  image: string;
};

export type TownMapType = {
  name: string;
  address: string;
  position: [number, number];
};