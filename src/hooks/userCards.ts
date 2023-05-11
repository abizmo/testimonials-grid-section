import { useEffect, useState } from 'react';
import fetchCards from '../util/fetchCards';
import { CardProps } from '../components/Card';

const useCards = () => {
  const [cards, setCards] = useState<CardProps[]>([]);

  useEffect(() => {
    fetchCards('./data/cards.json')
      .then((data) => setCards(data.cards))
      .catch((err) => console.error(err.status));
  }, []);

  return [cards];
};

export default useCards;
