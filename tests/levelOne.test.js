// 1. Import the data from your levelOne.js file
// Note: the '../' moves up one folder from /tests/ into /root/
const kata = require('../arrays/levelOne.js');

// 2. The Assertion Helper
function assertEquals(actual, expected, testName) {
    const isPassed = JSON.stringify(actual) === JSON.stringify(expected);
    if (isPassed) {
        console.log(`✅ PASS: ${testName}`);
    } else {
        console.error(`❌ FAIL: ${testName}`);
        console.error(`   Expected:`, expected);
        console.error(`   Actual:  `, actual);
    }
}

// 3. Run the tests using the 'kata' object
console.log("\n--- RUNNING KATA TESTS ---");

assertEquals(kata.devTasks.length, 3, "Finds 3 Dev tasks");
assertEquals(kata.totalHours, 29, "Total hours sum to 29");
assertEquals(kata.totalDevHours, 18, "Chained Dev hours equals 18");

// Checking a specific object property
assertEquals(kata.billedTasks[0].billedAmount, 375, "Billed amount calculation is correct");

console.log("--------------------------\n");