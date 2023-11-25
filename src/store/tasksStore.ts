import { makeAutoObservable } from "mobx";
import { Columns, Task, Tasks } from "../utils/types";
import { initialTasks } from "../utils/mockData/tasks";

class TasksStore {
  tasks: Tasks = initialTasks;

  constructor() {
    makeAutoObservable(this);
  }

  addTask(taskData: Task) {
    this.tasks[Columns.TODO].push(taskData);
  }

  assignUser(column: Columns, taskId: string, userId: string) {
    const task = this.tasks[column].find((task) => task.id === taskId);
    task?.users.push(userId);
  }

  getTask(id: string | undefined) {
    if (!id) return;
    const tasksArray = Object.entries(this.tasks);

    let task;

    for (let i = 0; i < tasksArray.length; i++) {
      const currentColumn = tasksArray[i][0];
      const currentTasks = tasksArray[i][1];

      task = currentTasks.find((task) => task.id === id);

      if (task) {
        task = { ...task, status: currentColumn };
        break;
      }
    }

    return task;
  }
}

export const tasksStore = new TasksStore();
