export async function getFichesSivos() {
  const res = await fetch('http://localhost:1337/api/fiche-sivos?populate=*');
  const data = await res.json();
  return data.data;
}

export async function getEvenements() {
  const res = await fetch('http://localhost:1337/api/evenement?populate=*');
  const data = await res.json();
  return data.data;
}
