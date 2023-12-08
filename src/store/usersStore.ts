import { makeAutoObservable } from "mobx";
import { initialUsers } from "../utils/mockData/users";
import { User } from "../utils/types";

class UsersStore {
  users: User[] = initialUsers;
  criteria: string = "";

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

  setSearchCriteria(newCriteria: string) {
    this.criteria = newCriteria;
  }

  get filteredUsersByValue() {
    const criteriaArray = this.criteria
      .split(" ")
      .map((word) => word.toLowerCase());

    return this.users.filter((user) => {
      let isMatch: boolean[] = [];

      criteriaArray.forEach((value) => {
        isMatch.push(
          user.id.toLowerCase().includes(value) ||
            user.name.toLowerCase().includes(value) ||
            user.surname.toLowerCase().includes(value) ||
            user.role.toLowerCase().includes(value) ||
            !!user.tasks.find((taskId) => taskId.includes(value))
        );
      });

      return isMatch.every(Boolean);
    });
  }
}

export const usersStore = new UsersStore();
