import { ChangeEvent, useEffect, useState } from "react";
import { usersStore } from "../../store/usersStore";
import { Columns, User } from "../../utils/types";
import { tasksStore } from "../../store/tasksStore";
import Tag from "../Tag";
import Options from "../Options";
import classes from "./TaskDetails.module.scss";

type TaskUsersType = {
  users: string[];
  column: Columns;
  taskId: string;
};

function TaskUsers({ users, column, taskId }: TaskUsersType) {
  const [usersInfo, setUsersInfo] = useState<User[]>([]);

  const usersOptions = usersStore.users.map((user) => ({
    id: user.id,
    value: `${user.name} ${user.surname}`,
  }));

  useEffect(() => {
    const usersInfo: User[] = [];

    users.forEach((userId) => {
      const user = usersStore.getUserById(userId);

      if (user) usersInfo.push(user);
    });

    setUsersInfo(usersInfo);
  }, [users]);

  function assignUser(e: ChangeEvent<HTMLSelectElement>) {
    const selectedUserId = e.target.selectedOptions[0].id;

    if (!selectedUserId || users.includes(selectedUserId)) return;

    tasksStore.assignUser(column, taskId, selectedUserId);
  }

  function deleteAssignee(userId: string) {
    tasksStore.deleteUser(column, taskId, userId);
  }

  return (
    <div className={classes.task_users}>
      <p>Assignees: </p>
      <div>
        <Options
          id="assign to"
          options={usersOptions}
          label={false}
          onChange={assignUser}
        />
        <ul>
          {usersInfo.map((user) => (
            <li key={user.id}>
              <Tag
                value={`${user.name} ${user.surname}`}
                onDelete={() => deleteAssignee(user.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskUsers;
