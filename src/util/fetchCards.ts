async function fetchCards(path: string) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();
  return data;
}

export default fetchCards;
