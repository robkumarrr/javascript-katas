/**
 * JAVASCRIPT ARRAY MASTER KATA - ANSWER KEY
 */

const tasks = [
    { id: 1, title: "Fix Login Bug", category: "Development", priority: "High", hoursSpent: 5, completed: true },
    { id: 4, title: "Client Meeting", category: "Marketing", priority: "Medium", hoursSpent: 1, completed: true },
    { id: 2, title: "Write Documentation", category: "Admin", priority: "Low", hoursSpent: 2, completed: false },
    { id: 3, title: "Refactor Database", category: "Development", priority: "High", hoursSpent: 10, completed: true },
    { id: 5, title: "Update Dependencies", category: "Development", priority: "Medium", hoursSpent: 3, completed: false },
    { id: 6, title: "Design Landing Page", category: "Design", priority: "High", hoursSpent: 8, completed: false }
];

// ---------------------------------------------------------
// PHASE 1: FILTER
// ---------------------------------------------------------

// 1. The "Dev" Filter
const devTasks = tasks.filter(t => t.category === "Development");

// 2. The "Heavy Lift" Filter
const heavyTasks = tasks.filter(t => t.hoursSpent > 5);

// 3. The "Urgent & Open" Filter
const urgentOpenTasks = tasks.filter(t => t.priority === "High" && !t.completed);


// ---------------------------------------------------------
// PHASE 2: MAP
// ---------------------------------------------------------

// 1. The "Title List"
const taskTitles = tasks.map(t => t.title);

// 2. The "Status Label" (Using spread operator to keep original data)
const taskStatuses = tasks.map(t => ({
    ...t,
    status: t.completed ? "DONE" : "PENDING"
}));

// 3. The "Overtime Estimate" (Returning a clean, specific object)
const billedTasks = tasks.map(t => ({
    title: t.title,
    billedAmount: t.hoursSpent * 75
}));


// ---------------------------------------------------------
// PHASE 3: REDUCE
// ---------------------------------------------------------

// 1. Total Effort
const totalHours = tasks.reduce((acc, t) => acc + t.hoursSpent, 0);

// 2. Category Count
// We use an empty object {} as the starting accumulator
const categoryCounts = tasks.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + 1;
    return acc;
}, {});

// 3. The Longest Task
const longestTask = tasks.reduce((prev, current) => {
    return (prev.hoursSpent > current.hoursSpent) ? prev : current;
});


// ---------------------------------------------------------
// PHASE 4: THE GRAND MASTER CHALLENGE (Chaining)
// ---------------------------------------------------------

const totalDevHours = tasks
    .filter(t => t.category === "Development")
    .map(t => t.hoursSpent)
    .reduce((acc, hours) => acc + hours, 0);

// ---------------------------------------------------------
// RESULTS SUMMARY
// ---------------------------------------------------------
console.log("Total Dev Hours:", totalDevHours); // Output: 18
console.log("Category Counts:", categoryCounts); // Output: { Development: 3, Marketing: 1, Admin: 1, Design: 1 }