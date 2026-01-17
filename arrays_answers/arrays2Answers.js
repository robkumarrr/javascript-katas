// --- PHASE 1: FILTER ANSWERS ---
const highRollers = users.filter(u => u.orders.some(order => order > 150));

const northernGold = users.filter(u => u.region === "North" && u.memberStatus === "Gold");

const frequentShoppers = users.filter(u => u.orders.length >= 3);

// --- PHASE 2: MAP ANSWERS ---
const summaryCards = users.map(u => ({
    name: u.name,
    orderCount: u.orders.length
}));

const totalSpenders = users.map(u => ({
    ...u,
    totalSpent: u.orders.reduce((sum, amt) => sum + amt, 0)
}));

const promoEligibility = users.map(u => ({
    ...u,
    isEligibleForPromo: u.region === "South"
}));

// --- PHASE 3: REDUCE ANSWERS ---
const globalRevenue = users.reduce((acc, u) => {
    const userTotal = u.orders.reduce((sum, amt) => sum + amt, 0);
    return acc + userTotal;
}, 0);

const regionalSpend = users.reduce((acc, u) => {
    const userTotal = u.orders.reduce((sum, amt) => sum + amt, 0);
    acc[u.region] = (acc[u.region] || 0) + userTotal;
    return acc;
}, {});

const bigSpender = users
    .map(u => ({ ...u, totalSpent: u.orders.reduce((sum, amt) => sum + amt, 0) }))
    .reduce((prev, curr) => (prev.totalSpent > curr.totalSpent) ? prev : curr);