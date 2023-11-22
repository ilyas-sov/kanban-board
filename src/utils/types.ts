export type Task = {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  users?: User[];
};

export type User = {
  id: string;
  name: string;
  surname: string;
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
