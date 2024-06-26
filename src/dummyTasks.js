const dummyTasks = [
  {
    id: 1,
    title: "Task 1",
    description: "Description for Task 1",
    startDate: new Date("2024-03-30"),
    endDate: new Date("2024-04-05"),
    status: "Completed",
    assignee: "John Doe",
    priority: "P1",
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description for Task 2",
    startDate: new Date("2024-04-01"),
    endDate: null,
    status: "In Progress",
    assignee: "Jane Smith",
    priority: "P2",
  },
  {
    id: 3,
    title: "Task 3",
    description: "Description for Task 3",
    startDate: new Date("2024-04-03"),
    endDate: null,
    status: "Deferred",
    assignee: "Alice Johnson",
    priority: "P0",
  },
  {
    id: 4,
    title: "Task 4",
    description: "Description for Task 4",
    startDate: new Date("2024-04-05"),
    endDate: new Date("2024-04-10"),
    status: "Deferred",
    assignee: "Bob Brown",
    priority: "P2",
  },
  {
    id: 5,
    title: "Task 5",
    description: "Description for Task 5",
    startDate: new Date("2024-04-08"),
    endDate: null,
    status: "In Progress",
    assignee: "Emily Wilson",
    priority: "P1",
  },
  {
    id: 6,
    title: "Task 6",
    description: "Description for Task 6",
    startDate: new Date("2024-04-10"),
    endDate: null,
    status: "Pending",
    assignee: "David Lee",
    priority: "P2",
  },
  {
    id: 7,
    title: "Task 7",
    description: "Description for Task 7",
    startDate: new Date("2024-04-12"),
    endDate: null,
    status: "Deployed",
    assignee: "Grace Martinez",
    priority: "P0",
  },
  {
    id: 8,
    title: "Task 8",
    description: "Description for Task 8",
    startDate: new Date("2024-04-15"),
    endDate: new Date("2024-04-20"),
    status: "Completed",
    assignee: "Sam Johnson",
    priority: "P1",
  },
  {
    id: 9,
    title: "Task 9",
    description: "Description for Task 9",
    startDate: new Date("2024-04-18"),
    endDate: null,
    status: "Deployed",
    assignee: "Sophia Garcia",
    priority: "P2",
  },
];

export default dummyTasks;
