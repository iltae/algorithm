const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
const [N, M] = input[0].split(" ").map(Number);
const map = [];
const houses = [];
const chickens = [];

for (let i = 1; i <= N; i++) {
    const lines = input[i].split(" ").map(Number);
    map.push(lines);

    for (let j = 0; j < lines.length; j++) {
        if (lines[j] === 1) {
            houses.push([i - 1, j]);
        }
        if (lines[j] === 2) {
            chickens.push([i - 1, j]);
        }
    }
}

function getCombinations(arr, n) {
    const results = [];

    if (n === 1) return arr.map(el => [el]);

    arr.forEach((fix, idx, org) => {
        const rest = org.slice(idx + 1);
        const combinations = getCombinations(rest, n - 1);
        const attached = combinations.map(el => [fix, ...el]);
        results.push(...attached);
    })

    return results;
}

const chickenCombinations = getCombinations(chickens, M);

let minCityChickenDistance = Infinity;

for (const combination of chickenCombinations) {
    let cityChickenDistance = 0;

    for (const [hx, hy] of houses) {
        let minHouseDist = Infinity;

        for (const [cx, cy] of combination) {
            const dist = Math.abs(hx - cx) + Math.abs(hy - cy);
            minHouseDist = Math.min(minHouseDist, dist);
        }
        cityChickenDistance += minHouseDist;
    }

    minCityChickenDistance = Math.min(minCityChickenDistance, cityChickenDistance);
}

console.log(minCityChickenDistance);