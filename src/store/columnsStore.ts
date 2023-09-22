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

    this.columns[`column${name}`] = {
      id: name,
      name: name,
      order: null,
      tasks: [],
    };

    this.error = "";
  }

  removeColumn(id: string) {}

  addTask(taskData: { title: string; priority: string; description: string }) {
    const todoColumn = Object.entries(this.columns).find(
      ([_, obj]) => obj.id === "toDo"
    );

    if (todoColumn) {
      this.columns[todoColumn?.[0]].tasks.push({
        ...taskData,
        id: Math.floor(Math.random() * 1000).toString(),
        status: todoColumn[1].name,
      });
    }
  }
}

export const columns = new columnsStore();
