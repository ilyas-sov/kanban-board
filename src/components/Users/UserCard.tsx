import { Link } from "react-router-dom";
import UserAvatar from "./UserAvatar";
import classes from "./Users.module.scss";

type UserCardType = {
  photo: string | null;
  id: string;
  name: string;
  surname: string;
  role: string;
  tasks: string[];
};

function UserCard({ photo, id, name, surname, role, tasks }: UserCardType) {
  const userUrl = `${name.toLowerCase()}-${surname.toLowerCase()}`;
  return (
    <div className={classes.container}>
      <UserAvatar avatarSource={photo} />
      <div className={classes.name}>
        <p>
          {name} {surname}
        </p>
        <p>Role: {role}</p>
      </div>
      <div className={classes.active_tasks}>
        <p>Active tasks:</p>
        <ul>
          {tasks.map((taskId) => (
            <li key={taskId}>
              <Link to={`/tasks/${taskId}`} className="default_button">
                {taskId}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Link to={`/users/${userUrl}`} className="default_button">
        View info
      </Link>
    </div>
  );
}

export default UserCard;
