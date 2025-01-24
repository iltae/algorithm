function solution(fees, records) {
    const map = {};
    const [baseTime, baseMoney, unitTime, unitMoney] = fees;
    const result = [];
    
    records.forEach(el => {
        const [time, car, status] = el.split(" ");
        map[car] = map[car] || [];
        if(status === "IN") {
            map[car].push([format(time), 23 * 60 + 59]);
        } else {
            map[car][map[car].length - 1][1] = format(time);
        }
    })

    const order = Object.keys(map).sort((a, b) => +a - +b);
    
    order.forEach(carNum => {
        let times = 0;
        map[carNum].forEach(([from, to]) => {
            times += to - from;
        })
        result.push(times <= baseTime? baseMoney : baseMoney + Math.ceil((times - baseTime) / unitTime) * unitMoney);
    })
    
    return result;
}

function format(str) {
    const [hour, minute] = str.split(":").map(Number);
    return hour * 60 + minute;
}