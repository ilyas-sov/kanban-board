import { usersStore } from "../../store/usersStore";
import UserCard from "./UserCard";
import classes from "./Users.module.scss";

function Users() {
  const users = usersStore.users;

  return (
    <ul className={classes.list}>
      {users.map((user) => (
        <li key={user.id}>
          <UserCard
            photo={user.photo}
            id={user.id}
            name={user.name}
            surname={user.surname}
            role={user.role}
            tasks={user.tasks}
          />
        </li>
      ))}
    </ul>
  );
}

export default Users;
