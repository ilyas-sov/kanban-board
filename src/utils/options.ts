import kanbanColumns from "./kanbanColumns";
import { Option } from "./types";

export const priorityOptions: readonly Option[] = Object.freeze([
  { id: "none", value: "none" },
  { id: "low", value: "low" },
  { id: "medium", value: "medium" },
  { id: "high", value: "high" },
]);

export const columnOptions = Object.entries(kanbanColumns).map(([_, obj]) => ({
  id: obj.id,
  value: obj.name,
}));
