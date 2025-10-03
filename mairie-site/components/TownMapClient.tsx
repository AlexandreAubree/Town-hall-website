"use client";

import dynamic from 'next/dynamic';
import { TownMapType } from './types';

// Charge dynamiquement le composant LeafletMap sans SSR
const LeafletMap = dynamic(() => import('./LeafletMap'), {
  ssr: false,
});

export default function TownMapClient(props: TownMapType) {
  return <LeafletMap {...props} />;
}
