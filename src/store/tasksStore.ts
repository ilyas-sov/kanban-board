import { makeAutoObservable } from "mobx";
import { Columns, Task, Tasks } from "../utils/types";
import { initialTasks } from "../utils/mockData/tasks";

class TasksStore {
  tasks: Tasks = initialTasks;
  taskWasChanged: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  addTask(taskData: Task) {
    this.tasks[Columns.TODO].push(taskData);
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

      if (index || index === 0) {
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

  updateTask(
    column: Columns,
    taskId: string,
    newProperties: {
      title: string;
      description: string;
      status: Columns;
      priority: string;
      users: string[];
      index: number;
    }
  ) {
    if (column === newProperties.status) {
      this.changeStatus(
        column,
        taskId,
        newProperties.status,
        newProperties.index
      );
    } else {
      this.changeStatus(column, taskId, newProperties.status);
    }

    const task = this.tasks[newProperties.status].find(
      (task) => task.id === taskId
    );

    if (task) {
      task.title = newProperties.title;
      task.description = newProperties.description;
      task.priority = newProperties.priority;
      task.users = newProperties.users;
    }

    this.taskWasChanged = false;
  }

  deleteTask(column: Columns, taskId: string) {
    this.tasks[column] = this.tasks[column].filter(
      (task) => task.id !== taskId
    );
  }

  getTask(id: string | undefined) {
    if (!id) return;
    const tasksArray = Object.entries(this.tasks);

    let task;

    for (let i = 0; i < tasksArray.length; i++) {
      const currentColumn = tasksArray[i][0];
      const currentTasks = tasksArray[i][1];

      task = currentTasks.find((task) => task.id === id);

      const taskIndex = task && currentTasks.indexOf(task);

      if (task) {
        task = { ...task, status: currentColumn as Columns, index: taskIndex };
        break;
      }
    }

    return task;
  }

  setTaskWasChanged(value: boolean) {
    this.taskWasChanged = value;
  }
}

export const tasksStore = new TasksStore();
