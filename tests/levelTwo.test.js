const kata = require('../arrays/levelTwo.js');

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
        console.warn(`🟨 SKIPPED: Input is null/undefined for: ${testName}`);
    }
}

console.log("\n--- RUNNING LEVEL TWO KATA TESTS ---");

// PHASE 1
assertEquals(kata.highRollers?.length, 1, "P1.1: High Rollers count");
assertEquals(kata.northernGold?.length, 2, "P1.2: Northern Gold count");
assertEquals(kata.frequentShoppers?.[0]?.name, "Alice", "P1.3: First frequent shopper name");

// PHASE 2
assertEquals(kata.summaryCards?.[0], { name: "Alice", orderCount: 3 }, "P2.1: Alice summary card");
const bobTotal = kata.totalSpenders?.find(u => u.id === 102);
assertEquals(bobTotal?.totalSpent, 25, "P2.2: Bob's totalSpent is 25");
assertEquals(kata.promoEligibility?.find(u => u.name === "Eve")?.isEligibleForPromo, true, "P2.3: Eve is promo eligible");

// PHASE 3
assertEquals(kata.globalRevenue, 825, "P3.1: Global Revenue sum");
assertEquals(kata.regionalSpend?.North, 690, "P3.2: North regional spend");
assertEquals(kata.bigSpender?.name, "Charlie", "P3.3: Big Spender is Charlie");

console.log("\n--- KATA COMPLETED ---\n");