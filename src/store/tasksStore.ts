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

  deleteUser(column: Columns, taskId: string, userId: string) {
    const task = this.tasks[column].find((task) => task.id === taskId);

    if (task) {
      const taskId = this.tasks[column].indexOf(task);
      const updatedUsers = task?.users.filter((id) => id !== userId);
      this.tasks[column][taskId].users = updatedUsers;
    }
  }

  changePriority(column: Columns, taskId: string, newPriority: string) {
    const task = this.tasks[column].find((task) => task.id === taskId);

    if (task) {
      const taskId = this.tasks[column].indexOf(task);
      this.tasks[column][taskId].priority = newPriority;
    }
  }

  changeStatus(
    column: Columns,
    taskId: string,
    newColumn: Columns,
    index?: number
  ) {
    const task = this.tasks[column].find((task) => task.id === taskId);

    if (task) {
      this.tasks[column] = this.tasks[column].filter(
        (task) => task.id !== taskId
      );

      if (index) {
        this.tasks[newColumn] = [
          ...this.tasks[newColumn].slice(0, index),
          { ...task, status: newColumn },
          ...this.tasks[newColumn].slice(index),
        ];
      } else {
        this.tasks[newColumn].push({ ...task, status: newColumn });
      }
    }
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
