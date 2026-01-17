/**
 * JAVASCRIPT ARRAY KATA: LEVEL THREE
 * Topic: Relational Data & Data Architecture
 */

const projects = [
    { id: 1, title: "Alpha", leadId: 101, status: "Active", budget: 5000, tasks: [true, true, false] },
    { id: 2, title: "Beta", leadId: 102, status: "Internal", budget: 2000, tasks: [true, false] },
    { id: 3, title: "Gamma", leadId: 101, status: "Active", budget: 15000, tasks: [false, false, false] },
    { id: 4, title: "Delta", leadId: 103, status: "Active", budget: 3000, tasks: [true, true, true, true] },
    { id: 5, title: "Epsilon", leadId: 104, status: "Internal", budget: 1000, tasks: [true] }
];

const teamMembers = [
    { id: 101, name: "Alice", role: "Senior Dev", dept: "Engineering" },
    { id: 102, name: "Bob", role: "Designer", dept: "Creative" },
    { id: 103, name: "Charlie", role: "Junior Dev", dept: "Engineering" },
    { id: 104, name: "David", role: "Intern", dept: "Creative" }
];

// --- PHASE 1: FILTER ---
// 1. Projects that are "Active" and have at least 50% tasks completed
const healthyProjects = null;

// 2. Team members who are "Engineering" dept and are NOT leads on any "Internal" projects
const engineeringExternalLeads = null;

// 3. Projects where the budget per task (budget / tasks.length) is over 2000
const highStakesProjects = null;


// --- PHASE 2: MAP ---
// 1. Map projects to include the lead's name (Join projects with teamMembers)
const projectsWithLeadNames = null;

// 2. Create a "Project Health" report: Array of { title, completionRate (0-100) }
const projectHealthReports = null;

// 3. Hydrate teamMembers with an array of their project titles: { name, projectTitles: [] }
const teamMemberAssignments = null;


// --- PHASE 3: REDUCE ---
// 1. Calculate total budget for all projects lead by "Engineering" department
const engineeringTotalBudget = null;

// 2. Group project titles by their Lead ID: { 101: ["Alpha", "Gamma"], 102: ["Beta"], ... }
const projectsByLead = null;

// 3. Find the department ("Engineering" or "Creative") with the highest total budget
const richestDepartment = null;


// --- PHASE 4: THE GRAND MASTER CHALLENGE ---
// Requirement:
// 1. Filter for "Active" projects.
// 2. Map them to objects containing { projectTitle, leadName, budget }.
// 3. Reduce to find the single most expensive "Active" project lead by a "Senior Dev".
const flagshipProject = null;


// EXPORTS
if (typeof module !== 'undefined') {
    module.exports = {
        healthyProjects, engineeringExternalLeads, highStakesProjects,
        projectsWithLeadNames, projectHealthReports, teamMemberAssignments,
        engineeringTotalBudget, projectsByLead, richestDepartment, flagshipProject
    };
}