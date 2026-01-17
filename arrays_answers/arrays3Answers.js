// --- PHASE 1 ---
const healthyProjects = projects.filter(p => {
    const completed = p.tasks.filter(t => t === true).length;
    return p.status === "Active" && (completed / p.tasks.length) >= 0.5;
});

const engineeringExternalLeads = teamMembers.filter(member => {
    const isEng = member.dept === "Engineering";
    const leadsInternal = projects.some(p => p.leadId === member.id && p.status === "Internal");
    return isEng && !leadsInternal;
});

const highStakesProjects = projects.filter(p => (p.budget / p.tasks.length) > 2000);

// --- PHASE 2 ---
const projectsWithLeadNames = projects.map(p => {
    const lead = teamMembers.find(m => m.id === p.leadId);
    return { ...p, leadName: lead ? lead.name : "Unknown" };
});

const projectHealthReports = projects.map(p => ({
    title: p.title,
    completionRate: (p.tasks.filter(t => t).length / p.tasks.length) * 100
}));

const teamMemberAssignments = teamMembers.map(m => ({
    name: m.name,
    projectTitles: projects.filter(p => p.leadId === m.id).map(p => p.title)
}));

// --- PHASE 3 ---
const engineeringTotalBudget = projects.reduce((acc, p) => {
    const lead = teamMembers.find(m => m.id === p.leadId);
    return (lead && lead.dept === "Engineering") ? acc + p.budget : acc;
}, 0);

const projectsByLead = projects.reduce((acc, p) => {
    if (!acc[p.leadId]) acc[p.leadId] = [];
    acc[p.leadId].push(p.title);
    return acc;
}, {});

const richestDepartment = teamMembers.reduce((acc, member) => {
    const memberTotal = projects
        .filter(p => p.leadId === member.id)
        .reduce((sum, p) => sum + p.budget, 0);

    acc[member.dept] = (acc[member.dept] || 0) + memberTotal;
    return acc;
}, {}); // Then you would logic out which key is highest, but the object is the core task.

// --- PHASE 4 ---
const flagshipProject = projects
    .filter(p => p.status === "Active")
    .map(p => {
        const lead = teamMembers.find(m => m.id === p.leadId);
        return { title: p.title, leadName: lead?.name, leadRole: lead?.role, budget: p.budget };
    })
    .filter(p => p.leadRole === "Senior Dev")
    .reduce((prev, curr) => (prev.budget > curr.budget) ? prev : curr);