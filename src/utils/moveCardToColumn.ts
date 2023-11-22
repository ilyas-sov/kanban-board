import { Columns, Tasks } from "./types";

export function moveCardToColumn({
  cards,
  cardId,
  column,
  index,
}: {
  cards: Tasks;
  cardId: string;
  column: Columns;
  index: number;
}): Tasks {
  const card = Object.entries(cards)
    .map(([column, cards]) => {
      const card = cards.find((card) => card.id === cardId);

      if (!card) return null;

      return { previousColumn: column as Columns, card };
    })
    .filter(Boolean)[0];

  if (!card) return cards;

  if (card.previousColumn === column) return cards; // RE-DO

  const newCards = {
    ...cards,
    [card.previousColumn]: cards[card.previousColumn].filter(
      (card) => card.id !== cardId
    ),
    [column]: [
      ...cards[column].slice(0, index),
      card.card,
      ...cards[column].slice(index),
    ],
  };

  return newCards;
}
