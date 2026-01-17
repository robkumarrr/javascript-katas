/**
 * JAVASCRIPT ARRAY KATA: LEVEL TWO
 * Topic: Nested Data & Conditionals
 */

const users = [
    { id: 101, name: "Alice", memberStatus: "Gold", orders: [20, 50, 100], region: "North" },
    { id: 102, name: "Bob", memberStatus: "Silver", orders: [10, 15], region: "South" },
    { id: 103, name: "Charlie", memberStatus: "Gold", orders: [200, 300], region: "North" },
    { id: 104, name: "David", memberStatus: "Bronze", orders: [5, 10, 5], region: "North" },
    { id: 105, name: "Eve", memberStatus: "Silver", orders: [80, 20], region: "South" },
    { id: 106, name: "Frank", memberStatus: "Gold", orders: [10, 10], region: "South" }
];

// --- PHASE 1: FILTER ---
// 1. Users with at least one order > 150
const highRollers = null;

// 2. Users in "North" region with "Gold" status
const northernGold = null;

// 3. Users with 3 or more orders
const frequentShoppers = null;

// --- PHASE 2: MAP ---
// 1. Objects with 'name' and 'orderCount' (length of orders)
const summaryCards = null;

// 2. Objects with all original fields + 'totalSpent' (sum of orders)
const totalSpenders = null;

// 3. Objects with all original fields + 'isEligibleForPromo' (true if region is "South")
const promoEligibility = null;

// --- PHASE 3: REDUCE ---
// 1. Total sum of every single order across all users (hint: flatMap to be used here)
const globalRevenue = null;

// 2. Object showing total spending per region: { North: X, South: Y }
const regionalSpend = null;

// 3. The single user object with the highest 'totalSpent'
const bigSpender = null;

// EXPORTS
if (typeof module !== 'undefined') {
    module.exports = {
        highRollers, northernGold, frequentShoppers,
        summaryCards, totalSpenders, promoEligibility,
        globalRevenue, regionalSpend, bigSpender
    };
}