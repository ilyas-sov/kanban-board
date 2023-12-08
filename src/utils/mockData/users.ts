import { User } from "../types";

export const initialUsers: User[] = [
  {
    id: "1",
    name: "John",
    surname: "Doe",
    tasks: ["001"],
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
    tasks: ["003", "004"],
    role: "Frontend Developer",
    photo:
      "https://img.freepik.com/premium-photo/illustration-girl-with-brown-hair-holding-rose_893012-188649.jpg",
    contacts: {
      email: "alice@example.com",
      phone: "+1987654321",
    },
  },
  {
    id: "3",
    name: "Grace",
    surname: "Williams",
    tasks: ["001", "002"],
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
    tasks: ["005"],
    role: "Senior QA Engineer",
    photo:
      "https://img.freepik.com/premium-photo/colorful-abstract-faded-into-face_816702-1608.jpg",
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
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiaFn2M6grj_vhugvOv3WQzt1U9ESGgRnU8DVr-M2aZp_kIE7liaIDmtW2ZZgKpIPP-ss&usqp=CAU",
    contacts: {
      email: "michael@example.com",
      phone: null,
    },
  },
  {
    id: "6",
    name: "Daniel",
    surname: "Miller",
    tasks: ["001"],
    role: "DevOps Engineer",
    photo: null,
    contacts: {
      email: "daniel@example.com",
      phone: "+6677889900",
    },
  },
];
