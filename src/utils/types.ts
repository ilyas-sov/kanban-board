export type Task = {
  id: string;
  created_at: number;
  title: string;
  description: string;
  status: Columns;
  priority: string;
  users: string[];
};

export type User = {
  id: string;
  name: string;
  surname: string;
  tasks: string[];
};

export type Tasks = {
  [index in Columns]: Task[];
};

export type kanbanColumnsType = {
  [index: string]: {
    id: Columns;
    name: string;
  };
};

export enum Columns {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}

export type Option = {
  id: string;
  value: string;
};
