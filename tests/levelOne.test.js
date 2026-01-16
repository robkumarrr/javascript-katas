// 1. Import the data from your levelOne.js file
const kata = require('../arrays/levelOne.js');

// 2. The Assertion Helper
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
        console.error(`🟨 SKIPPED: Input is null for: ${testName}`)
    }
}

// 3. Run the tests using the 'kata' object
console.log("\n--- RUNNING LEVEL ONE KATA TESTS ---");

// --- PHASE 1: FILTER ---
assertEquals(kata.devTasks?.length, 3, "Phase 1.1: Finds exactly 3 Development tasks");
assertEquals(kata.heavyTasks?.length, 2, "Phase 1.2: Finds 2 tasks with hoursSpent > 5 (Refactor & Design)");
assertEquals(kata.urgentOpenTasks?.length, 1, "Phase 1.3: Finds 1 High Priority task that is NOT completed (Design)");

// --- PHASE 2: MAP ---
assertEquals(kata.taskTitles?.includes("Fix Login Bug"), true, "Phase 2.1: Title list contains 'Fix Login Bug'");
assertEquals(kata.taskTitles?.length, 6, "Phase 2.1: Title list has 6 items");

// Checking that the status field was derived correctly for a specific item
const checkStatus = kata.taskStatuses?.find(t => t.id === 2);
assertEquals(checkStatus?.status, "PENDING", "Phase 2.2: Task ID 2 is correctly labeled PENDING");

assertEquals(kata.billedTasks?.[0]?.billedAmount, 375, "Phase 2.3: First task billedAmount is 375 (5 * 75)");

// --- PHASE 3: REDUCE ---
assertEquals(kata.totalHours, 29, "Phase 3.1: Total sum of hoursSpent is 29");

const expectedCounts = { Development: 3, Marketing: 1, Admin: 1, Design: 1 };
assertEquals(kata.categoryCounts, expectedCounts, "Phase 3.2: Category counts object matches exactly");

assertEquals(kata.longestTask?.id, 3, "Phase 3.3: Task ID 3 (Refactor Database) is the longest task");

// --- PHASE 4: CHAINING ---
assertEquals(kata.totalDevHours, 18, "Phase 4: Grand Master Chain total equals 18");

console.log("\n--- KATA COMPLETED ---\n");