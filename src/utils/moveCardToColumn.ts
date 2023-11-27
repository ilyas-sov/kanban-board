import { Columns, Tasks } from "./types";

export function moveCardToColumn({
  cards,
  cardId,
  newColumn,
  index,
}: {
  cards: Tasks;
  cardId: string;
  newColumn: Columns;
  index: number;
}): Tasks {
  const card = Object.entries(cards)
    .map(([column, cards]) => {
      const card = cards.find((card) => card.id === cardId);

      if (!card) return null;

      return {
        previousColumn: column as Columns,
        card: { ...card, status: newColumn },
      };
    })
    .filter(Boolean)[0];

  if (!card) return cards;

  if (card.previousColumn === newColumn) return cards; // RE-DO

  const newCards = {
    ...cards,
    [card.previousColumn]: cards[card.previousColumn].filter(
      (card) => card.id !== cardId
    ),
    [newColumn]: [
      ...cards[newColumn].slice(0, index),
      card.card,
      ...cards[newColumn].slice(index),
    ],
  };

  return newCards;
}
