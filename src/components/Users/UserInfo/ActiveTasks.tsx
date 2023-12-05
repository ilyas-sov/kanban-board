import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { tasksStore } from "../../../store/tasksStore";
import { Task } from "../../../utils/types";
import ActiveTasksItem from "./ActiveTasksItem";
import classes from "./UserInfo.module.scss";

function ActiveTasks({ tasks }: { tasks: string[] }) {
  const [activeTasks, setActiveTasks] = useState<Task[]>([]);

  useEffect(() => {
    const tasksObjects: Task[] = [];

    tasks.forEach((taskId) => {
      const task = tasksStore.getTask(taskId);

      if (task) tasksObjects.push(task);
    });

    setActiveTasks(tasksObjects);
  }, [tasks]);

  return (
    <div className={classes.active_tasks}>
      <h2>Active Tasks</h2>
      <div className={classes.heading}>
        <span>ID</span>
        <span>TITLE</span>
        <span>STATUS</span>
        <span>PRIORITY</span>
      </div>
      <ul>
        {activeTasks.map((task) => (
          <li key={task.id}>
            <Link to={`/tasks/${task.id}`} className={classes.task_link}>
              <ActiveTasksItem
                id={task.id}
                title={task.title}
                status={task.status}
                priority={task.priority}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActiveTasks;
