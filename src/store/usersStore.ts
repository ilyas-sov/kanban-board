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

  deleteTaskById(userId: string, taskId: string) {
    const user = this.users.find((user) => user.id === userId);

    if (user) {
      const userIndex = this.users.indexOf(user);

      this.users[userIndex].tasks = this.users[userIndex].tasks.filter(
        (id) => id !== taskId
      );
    }
  }

  addTaskById(userId: string, taskId: string) {
    const user = this.users.find((user) => user.id === userId);

    if (user) {
      const userIndex = this.users.indexOf(user);

      this.users[userIndex].tasks.push(taskId);
    }
  }
}

export const usersStore = new UsersStore();
