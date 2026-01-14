/**
 * JAVASCRIPT ARRAY MASTER KATA
 * Dataset: Project Tasks
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
// PHASE 1: FILTER (The Selection)
// ---------------------------------------------------------

// 1. The "Dev" Filter: Only tasks where category is "Development"
const devTasks = null;

// 2. The "Heavy Lift" Filter: Tasks where hoursSpent > 5
const heavyTasks = null;

// 3. The "Urgent & Open" Filter: "High" priority AND not completed
const urgentOpenTasks = null;


// ---------------------------------------------------------
// PHASE 2: MAP (The Transformation)
// ---------------------------------------------------------

// 1. The "Title List": An array of just the task title strings
const taskTitles = null;

// 2. The "Status Label": New objects with a 'status' property ("DONE" or "PENDING")
const taskStatuses = null;

// 3. The "Overtime Estimate": Objects with 'title' and 'billedAmount' (hours * 75)
const billedTasks = null;


// ---------------------------------------------------------
// PHASE 3: REDUCE (The Aggregation)
// ---------------------------------------------------------

// 1. Total Effort: The sum of all hoursSpent
const totalHours = null;

// 2. Category Count: An object like { Development: 3, Admin: 1, ... }
const categoryCounts = null;

// 3. The Longest Task: The single task object with the most hoursSpent
const longestTask = null;


// ---------------------------------------------------------
// PHASE 4: THE GRAND MASTER CHALLENGE (Chaining)
// ---------------------------------------------------------

/**
 * Requirement:
 * 1. Filter for only "Development" tasks
 * 2. Map those tasks to extract just their hoursSpent
 * 3. Reduce those hours to find the total time spent on Development
 */
const totalDevHours = null;


// ---------------------------------------------------------
// TEST YOUR RESULTS
// ---------------------------------------------------------
console.log("--- Phase 0: Original Array ---");
console.log("Dev Tasks:", tasks);

console.log("--- Phase 1: Filter ---");
console.log("Dev Tasks:", devTasks);

console.log("\n--- Phase 2: Map ---");
console.log("Billed Tasks:", billedTasks);

console.log("\n--- Phase 3: Reduce ---");
console.log("Total Hours:", totalHours);
console.log("Category Counts:", categoryCounts);

console.log("\n--- Phase 4: Chaining ---");
console.log("Total Dev Hours:", totalDevHours);