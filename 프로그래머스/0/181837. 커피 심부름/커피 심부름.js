function solution(order) {
    const prices = order.map((el) => el.includes("latte") ? 5000 : 4500);
    return prices.reduce((acc, cur) => acc + cur, 0);
}