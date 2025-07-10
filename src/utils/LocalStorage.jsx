const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Fix login bug",
        taskDescription: "Resolve login issue on production server",
        taskDate: "2025-07-09",
        category: "Bug",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Update dashboard UI",
        taskDescription: "Revamp the dashboard with new charts",
        taskDate: "2025-07-07",
        category: "UI",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Write test cases",
        taskDescription: "Add unit tests for user service",
        taskDate: "2025-07-08",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Design login page",
        taskDescription: "Create login page mockup in Figma",
        taskDate: "2025-07-06",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Optimize SQL queries",
        taskDescription: "Improve performance of employee DB queries",
        taskDate: "2025-07-08",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Setup CI/CD",
        taskDescription: "Implement GitHub Actions for automated deployment",
        taskDate: "2025-07-09",
        category: "DevOps",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Client feedback",
        taskDescription: "Document user feedback from last release",
        taskDate: "2025-07-07",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Refactor auth module",
        taskDescription: "Clean up and improve authentication code",
        taskDate: "2025-07-05",
        category: "Backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Accessibility audit",
        taskDescription: "Ensure the app meets accessibility standards",
        taskDate: "2025-07-10",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Team sync-up",
        taskDescription: "Weekly sync with frontend and backend teams",
        taskDate: "2025-07-04",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Build reusable card component",
        taskDescription: "Create a responsive card with Tailwind CSS",
        taskDate: "2025-07-08",
        category: "UI",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Fix mobile nav",
        taskDescription: "Resolve dropdown issue on mobile screens",
        taskDate: "2025-07-09",
        category: "Bug",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Push staging release",
        taskDescription: "Deploy changes to staging environment",
        taskDate: "2025-07-07",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Test API endpoints",
        taskDescription: "Verify all endpoints for recent feature",
        taskDate: "2025-07-06",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Create marketing banner",
        taskDescription: "Design banner for new feature launch",
        taskDate: "2025-07-09",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Sync with sales team",
        taskDescription: "Coordinate for upcoming campaign",
        taskDate: "2025-07-08",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Blog post draft",
        taskDescription: "Write a draft for upcoming product release",
        taskDate: "2025-07-06",
        category: "Content",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
  // console.log("Employees:", employees);
  // console.log("Admin:", admin);
};
