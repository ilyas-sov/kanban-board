interface kanbanColumnsInterface {
  [index: string]: {
    id: string;
    name: string;
    order: number | null;
  };
}

const kanbanColumns: kanbanColumnsInterface = {};

Object.defineProperties(kanbanColumns, {
  column1: {
    value: {
      id: "toDo",
      name: "to-do",
      order: 1,
    },
    configurable: false,
    enumerable: true,
  },
  column2: {
    value: {
      id: "inProgress",
      name: "in progress",
      order: 2,
    },
    configurable: false,
    enumerable: true,
  },
  column3: {
    value: {
      id: "done",
      name: "done",
      order: 3,
    },
    configurable: false,
    enumerable: true,
  },
});

export default kanbanColumns;
