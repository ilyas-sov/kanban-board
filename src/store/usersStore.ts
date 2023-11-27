import { makeAutoObservable } from "mobx";
import { initialUsers } from "../utils/mockData/users";
import { User } from "../utils/types";

class UsersStore {
  users: User[] = initialUsers;

  constructor() {
    makeAutoObservable(this);
  }

  getUserById(id: string) {
    return this.users.find((user) => user.id === id);
  }
}

export const usersStore = new UsersStore();
