import { Tasks, Columns } from "../types";

export const initialTasks: Tasks = {
  [Columns.TODO]: [
    {
      id: "001",
      created_at: 1698135600,
      title: "Revamp Website Interface",
      description:
        "Overhaul the website UI/UX design to enhance user engagement and accessibility. Implement modern design principles and responsive layouts for a seamless browsing experience.",
      status: Columns.TODO,
      priority: "high",
      users: ["1", "6"],
    },
    {
      id: "002",
      created_at: 1698135600,
      title: "Content Optimization Strategy",
      description:
        "Develop a comprehensive content optimization plan to improve search engine rankings and user engagement. Conduct keyword research, update meta descriptions, and enhance content quality.",
      status: Columns.TODO,
      priority: "medium",
      users: ["2", "4", "6"],
    },
  ],
  [Columns.IN_PROGRESS]: [
    {
      id: "003",
      created_at: 1698135600,
      title: "Enhance Data Analytics Module",
      description:
        "Expand the functionality of the data analytics module by integrating advanced algorithms for predictive analysis. Improve data visualization tools and optimize data processing techniques.",
      status: Columns.IN_PROGRESS,
      priority: "low",
      users: ["2", "5"],
    },
  ],
  [Columns.DONE]: [
    {
      id: "004",
      created_at: 1698135600,
      title: "Bug Fixes and Performance Tuning",
      description:
        "Address reported bugs and issues across the application. Optimize codebase for better performance and scalability, ensuring a smoother user experience.",
      status: Columns.DONE,
      priority: "high",
      users: ["1", "2", "3"],
    },
    {
      id: "005",
      created_at: 1698135600,
      title: "Product Launch Marketing Plan",
      description:
        "Develop a comprehensive marketing strategy for the upcoming product launch. Outline promotional campaigns, target audience identification, and channel selection for maximum outreach.",
      status: Columns.DONE,
      priority: "medium",
      users: ["1", "4"],
    },
  ],
};
