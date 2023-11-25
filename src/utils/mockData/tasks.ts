import { Tasks, Columns } from "../types";

export const initialTasks: Tasks = {
  [Columns.TODO]: [
    {
      id: "001",
      title:
        "Task 1 with some very long title which is much more than 70 characters and definitely will wrap more than one time. Task 1 with some very long title which is much more than 70 characters and definitely will wrap more than one time",
      description: "Description for Task 1",
      status: "Pending",
      priority: "high",
      users: ["1"],
    },
    {
      id: "002",
      title: "Task 2",
      description: "Description for Task 2",
      status: "Pending",
      priority: "medium",
      users: ["2"],
    },
  ],
  [Columns.IN_PROGRESS]: [
    {
      id: "003",
      title: "Task 3",
      description: "Description for Task 3",
      status: "In Progress",
      priority: "low",
      users: ["2"],
    },
  ],
  [Columns.DONE]: [
    {
      id: "004",
      title: "Task 4",
      description: "Description for Task 4",
      status: "Completed",
      priority: "high",
      users: ["1", "2"],
    },
    {
      id: "005",
      title: "Task 5",
      description: "Description for Task 5",
      status: "Completed",
      priority: "medium",
      users: ["1"],
    },
  ],
};
