import { Tasks, Columns } from "../types";

export const initialTasks: Tasks = {
  [Columns.TODO]: [
    {
      id: "001",
      created_at: 1698135600,
      title: "User Authentication and Authorization System",
      description:
        "Develop a user authentication and authorization system to manage access control and security within our backend infrastructure. The system should include robust authentication mechanisms to verify user identities securely and manage user sessions. Additionally, it should implement authorization policies to control what actions different users or user roles can perform within the application.",
      status: Columns.TODO,
      priority: "high",
      users: ["1", "3", "6"],
    },
    {
      id: "002",
      created_at: 1698135600,
      title: "Data Processing Pipeline for Real-Time Analytics",
      description:
        "Design and implement a data processing pipeline capable of handling large volumes of real-time data for performing analytics and generating insights. The pipeline should efficiently collect, process, and analyze incoming data streams, providing actionable information for decision-making and reporting purposes.",
      status: Columns.TODO,
      priority: "medium",
      users: ["3"],
    },
  ],
  [Columns.IN_PROGRESS]: [
    {
      id: "003",
      created_at: 1698135600,
      title: "Interactive Dashboard for Real-Time Data Visualization",
      description:
        "Create an interactive web-based dashboard to visualize and present the insights derived from real-time data processed by the backend system. The dashboard should provide a user-friendly interface for stakeholders to monitor key metrics, trends, and analytics in an intuitive and visually appealing manner.",
      status: Columns.IN_PROGRESS,
      priority: "low",
      users: ["2", "5"],
    },
  ],
  [Columns.DONE]: [
    {
      id: "004",
      created_at: 1698135600,
      title: "Task Management and Collaboration Platform",
      description:
        "Develop a web-based task management and collaboration platform that allows users to create, organize, assign, and track tasks within a team or organization. The platform should facilitate seamless communication, task delegation, progress monitoring, and reporting to enhance productivity and teamwork.",
      status: Columns.DONE,
      priority: "high",
      users: ["2"],
    },
    {
      id: "005",
      created_at: 1698135600,
      title: "Quality Assurance Framework Implementation for Web Applications",
      description:
        "Develop and implement a comprehensive Quality Assurance (QA) framework tailored for ensuring the reliability, functionality, and performance of web applications. The framework should include strategies, processes, and tools to conduct thorough testing, identify defects, and ensure the delivery of high-quality software.",
      status: Columns.DONE,
      priority: "medium",
      users: ["4"],
    },
  ],
};
