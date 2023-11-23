import { Tasks, Columns, User } from "./types";

const users: User[] = [
  { id: "1", name: "John", surname: "Doe" },
  { id: "2", name: "Alice", surname: "Smith" },
];

export const initialTasks: Tasks = {
  [Columns.TODO]: [
    {
      id: "1",
      title:
        "Task 1 with some very long title which is much more than 70 characters and definitely will wrap more than one time",
      description: "Description for Task 1",
      status: "Pending",
      priority: "high",
      users: [users[0]],
    },
    {
      id: "2",
      title: "Task 2",
      description: "Description for Task 2",
      status: "Pending",
      priority: "medium",
      users: [users[1]],
    },
  ],
  [Columns.IN_PROGRESS]: [
    {
      id: "3",
      title: "Task 3",
      description: "Description for Task 3",
      status: "In Progress",
      priority: "low",
      users: [users[1]],
    },
  ],
  [Columns.DONE]: [
    {
      id: "4",
      title: "Task 4",
      description: "Description for Task 4",
      status: "Completed",
      priority: "high",
      users: [users[0], users[1]],
    },
    {
      id: "5",
      title: "Task 5",
      description: "Description for Task 5",
      status: "Completed",
      priority: "medium",
      users: [users[0]],
    },
  ],
};
