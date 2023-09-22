import kanbanColumns from "./kanbanColumns";

export const priorityOptions: readonly string[] = Object.freeze([
  "none",
  "low",
  "medium",
  "high",
]);

export const columnOptions = Object.entries(kanbanColumns).map(
  ([_, obj]) => obj.name
);
