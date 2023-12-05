import { useParams, useNavigate } from "react-router-dom";
import { usersStore } from "../../../store/usersStore";
import Button from "../../UI/Button";
import PersonalInfo from "./PersonalInfo";
import ActiveTasks from "./ActiveTasks";
import ArrowLeftIcon from "../../icons/ArrowLeftIcon";
import classes from "./UserInfo.module.scss";

function UserInfo() {
  const params = useParams();
  const navigate = useNavigate();

  const user = usersStore.users.find(
    (user) =>
      `${user.name.toLowerCase()}-${user.surname.toLowerCase()}` === params.name
  );

  if (!params.name) return <p>No information</p>;
  if (!user) return <p>User with name "{params.name}" not found</p>;

  return (
    <div className={classes.info_container}>
      <div>
        <Button onClick={() => navigate(-1)} className={classes.btn_back}>
          <ArrowLeftIcon /> Back
        </Button>
        <p>User ID: {user.id}</p>
      </div>
      <PersonalInfo
        photo={user.photo}
        name={user.name}
        surname={user.surname}
        role={user.role}
        email={user.contacts.email}
        phone={user.contacts.phone}
      />
      <ActiveTasks tasks={user.tasks} />
    </div>
  );
}

export default UserInfo;
