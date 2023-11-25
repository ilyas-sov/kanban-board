import { makeAutoObservable } from "mobx";
import { initialUsers } from "../utils/mockData/users";
import { User } from "../utils/types";

class UsersStore {
  users: User[] = initialUsers;

  constructor() {
    makeAutoObservable(this);
  }
}

export const usersStore = new UsersStore();
