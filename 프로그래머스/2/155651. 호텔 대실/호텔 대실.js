function solution(book_time) {
    const events = [];
    
    for (const [start, end] of book_time) {
        events.push([num(start), 1]);
        events.push([num(end) + 10, -1]);
    }
    
    events.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        return a[0] - b[0];
    });
    
    let currentRooms = 0;
    let maxRooms = 0;

    for (const [time, type] of events) {
        currentRooms += type;
        maxRooms = Math.max(maxRooms, currentRooms);
    }
    
    return maxRooms;
}

function num(str) {
    const [hour, minute] = str.split(":");
    return Number(hour) * 60 + Number(minute);
}