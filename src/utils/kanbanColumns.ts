import { kanbanColumnsInterface } from "./interfaces";

const kanbanColumns: kanbanColumnsInterface = {};

Object.defineProperties(kanbanColumns, {
  column1: {
    value: {
      id: "toDo",
      name: "to-do",
      order: 1,
      tasks: [],
    },
    configurable: false,
    enumerable: true,
  },
  column2: {
    value: {
      id: "inProgress",
      name: "in progress",
      order: 2,
      tasks: [],
    },
    configurable: false,
    enumerable: true,
  },
  column3: {
    value: {
      id: "done",
      name: "done",
      order: 3,
      tasks: [],
    },
    configurable: false,
    enumerable: true,
  },
});

export default kanbanColumns;
