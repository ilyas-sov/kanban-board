import { Columns, kanbanColumnsType } from "./types";

const kanbanColumns: kanbanColumnsType = {};

Object.defineProperties(kanbanColumns, {
  column1: {
    value: {
      id: Columns.TODO,
      name: "to-do",
    },
    configurable: false,
    enumerable: true,
  },
  column2: {
    value: {
      id: Columns.IN_PROGRESS,
      name: "in progress",
    },
    configurable: false,
    enumerable: true,
  },
  column3: {
    value: {
      id: Columns.DONE,
      name: "done",
    },
    configurable: false,
    enumerable: true,
  },
});

export default kanbanColumns;
