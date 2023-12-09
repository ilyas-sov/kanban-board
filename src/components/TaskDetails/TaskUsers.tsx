import React, { ChangeEvent, useEffect, useState } from "react";
import { usersStore } from "../../store/usersStore";
import { User } from "../../utils/types";
import Tag from "../Tag";
import Options from "../Options";
import classes from "./TaskDetails.module.scss";

type TaskUsersType = {
  users: string[];
  onSetUsers: (u: string[]) => void;
};

function TaskUsers({ users, onSetUsers }: TaskUsersType) {
  const [usersInfo, setUsersInfo] = useState<User[]>([]);

  const usersOptions = usersStore.users.map((user) => ({
    id: user.id,
    value: `${user.name} ${user.surname}`,
  }));

  useEffect(() => {
    const newUsersInfo: User[] = [];

    users.forEach((userId) => {
      const user = usersStore.getUserById(userId);

      if (user) newUsersInfo.push(user);
    });

    setUsersInfo(newUsersInfo);
  }, [users]);

  function assignUser(e: ChangeEvent<HTMLSelectElement>) {
    const selectedUserId = e.target.selectedOptions[0].id;

    if (!selectedUserId || users.includes(selectedUserId)) return;

    const newUsers = [...users, selectedUserId];

    onSetUsers(newUsers);
  }

  function deleteAssignee(userId: string) {
    const newUsers = users.filter((id) => id !== userId);

    onSetUsers(newUsers);
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
                id={user.id}
                value={`${user.name} ${user.surname}`}
                onDelete={deleteAssignee}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default React.memo(TaskUsers);
