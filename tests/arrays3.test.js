const kata = require('../arrays/levelThree.js');

function assertEquals(actual, expected, testName) {
    if (actual !== null && actual !== undefined) {
        const isPassed = JSON.stringify(actual) === JSON.stringify(expected);
        if (isPassed) {
            console.log(`✅ PASS: ${testName}`);
        } else {
            console.error(`❌ FAIL: ${testName}`);
            console.error(`   Expected:`, expected);
            console.error(`   Actual:  `, actual);
        }
    } else {
        console.warn(`🟨 SKIPPED: ${testName}`);
    }
}

console.log("\n--- RUNNING LEVEL THREE KATA TESTS ---");

// PHASE 1
assertEquals(kata.healthyProjects?.length, 2, "P1.1: Healthy active projects (Alpha, Delta)");
assertEquals(kata.engineeringExternalLeads?.length, 2, "P1.2: Eng leads with no internal projects");

// PHASE 2
assertEquals(kata.projectsWithLeadNames?.[0].leadName, "Alice", "P2.1: Join lead names");
assertEquals(kata.projectHealthReports?.[1].completionRate, 50, "P2.2: Beta project health is 50%");
assertEquals(kata.teamMemberAssignments?.find(m => m.name === "Alice")?.projectTitles.length, 2, "P2.3: Alice has 2 projects");

// PHASE 3
assertEquals(kata.engineeringTotalBudget, 23000, "P3.1: Engineering total budget sum");
assertEquals(kata.projectsByLead?.["101"]?.length, 2, "P3.2: Lead 101 has 2 titles");

// PHASE 4
assertEquals(kata.flagshipProject?.title, "Gamma", "P4: Flagship project (Most expensive active Senior-led)");

console.log("\n--- ALL KATA LEVELS COMPLETE ---\n");