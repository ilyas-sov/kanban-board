import { makeAutoObservable } from "mobx";
import kanbanColumns from "../utils/kanbanColumns";

class columnsStore {
  columns = kanbanColumns;
  error: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  addColumn(name: string) {
    const columnsArray = Object.entries(this.columns);

    const columnWithTheSameName = columnsArray.find(
      ([_, obj]) => obj.name.toLowerCase() === name.toLowerCase()
    );

    if (columnWithTheSameName) {
      this.error = "Column with the same name already exists.";
      return;
    }

    // this.columns[`column${name}`] = {
    // id: name,
    // name: name,
    // order: null,
    // tasks: [],
    // };

    this.error = "";
  }
}

export const columns = new columnsStore();
