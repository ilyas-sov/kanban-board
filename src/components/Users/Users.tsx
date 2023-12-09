import { useEffect, useState } from "react";
import { usersStore } from "../../store/usersStore";
import SearchInput from "./SearchInput";
import UserCard from "./UserCard";
import classes from "./Users.module.scss";

function Users() {
  const [users, setUsers] = useState(usersStore.users);
  const [searchCriteria, setSearchCriteria] = useState(usersStore.criteria);

  useEffect(() => {
    if (searchCriteria) {
      usersStore.setSearchCriteria(searchCriteria);
      const newUsers = usersStore.filteredUsersByValue;

      setUsers(newUsers);
    } else {
      usersStore.setSearchCriteria("");
      setUsers(usersStore.users);
    }
  }, [searchCriteria]);

  return (
    <>
      <SearchInput
        initialValue={searchCriteria}
        setSearchCriteria={setSearchCriteria}
      />
      {users.length > 0 && (
        <ul className={classes.list}>
          {users.map((user) => (
            <li key={user.id}>
              <UserCard
                photo={user.photo}
                name={user.name}
                surname={user.surname}
                role={user.role}
                tasks={user.tasks}
              />
            </li>
          ))}
        </ul>
      )}
      {users.length === 0 && (
        <p className={classes.no_users_found}>
          No users found by your request.
        </p>
      )}
    </>
  );
}

export default Users;
