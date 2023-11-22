import { makeAutoObservable } from "mobx";

class KanbanStore {
  draggingCard: null | string = null;

  constructor() {
    makeAutoObservable(this);
  }

  setDraggingCard(cardId: null | string) {
    this.draggingCard = cardId;
  }
}

export const kanbanStore = new KanbanStore();
