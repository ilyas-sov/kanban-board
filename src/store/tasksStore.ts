import { makeAutoObservable } from "mobx";
import { Columns, Task, Tasks } from "../utils/types";
import { initialTasks } from "../utils/tasks";

class TasksStore {
  tasks: Tasks = initialTasks;

  constructor() {
    makeAutoObservable(this);
  }

  addTask(taskData: Task) {
    this.tasks[Columns.TODO].push(taskData);
  }
}

export const tasksStore = new TasksStore();
