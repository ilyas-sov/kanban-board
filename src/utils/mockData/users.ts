import { User } from "../types";

export const initialUsers: User[] = [
  {
    id: "1",
    name: "John",
    surname: "Doe",
    tasks: ["001", "004", "005"],
    role: "Backend Developer",
    photo: null,
    contacts: {
      email: "john@example.com",
      phone: "+1234567890",
    },
  },
  {
    id: "2",
    name: "Alice",
    surname: "Smith",
    tasks: ["002", "003", "004"],
    role: "Frontend Developer",
    photo: null,
    contacts: {
      email: "alice@example.com",
      phone: "+1987654321",
    },
  },
  {
    id: "3",
    name: "Grace",
    surname: "Williams",
    tasks: ["004"],
    role: "Backend Developer",
    photo: null,
    contacts: {
      email: "grace@example.com",
      phone: null,
    },
  },
  {
    id: "4",
    name: "Emma",
    surname: "Johnson",
    tasks: ["002", "005"],
    role: "Senior QA Engineer",
    photo: null,
    contacts: {
      email: "emma@example.com",
      phone: "+1122334455",
    },
  },
  {
    id: "5",
    name: "Michael",
    surname: "Brown",
    tasks: ["003"],
    role: "Frontend Developer",
    photo: null,
    contacts: {
      email: "michael@example.com",
      phone: null,
    },
  },
  {
    id: "6",
    name: "Daniel",
    surname: "Miller",
    tasks: ["001", "002"],
    role: "DevOps Engineer",
    photo: null,
    contacts: {
      email: "daniel@example.com",
      phone: "+6677889900",
    },
  },
];
