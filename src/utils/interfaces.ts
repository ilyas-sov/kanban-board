export interface kanbanColumnsInterface {
  [index: string]: {
    id: string;
    name: string;
    order: number | null;
    tasks: taskInterface[];
  };
}

export interface taskInterface {
  id: string;
  title: string;
  status: string;
  priority: string;
  description: string;
}
