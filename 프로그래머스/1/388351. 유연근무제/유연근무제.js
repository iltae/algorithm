function solution(schedules, timelogs, startday) {
    var answer = 0;
    
    schedules.forEach((schedule, idx) => {
        const timelog = timelogs[idx];
        
        let isAchieve = true;
        
        for (let i = 0; i < timelog.length; i++) {
            const weekend = (startday + i) % 7;
            
            if (weekend === 0 || weekend === 6) continue;
            
            if (timeToMin(timelog[i]) - timeToMin(schedule) > 10) {
                isAchieve = false;
                break;
            }
        }
        
        if (isAchieve) answer++;
    })
    
    return answer;
}

function timeToMin(num) {
    return Math.floor((num / 100)) * 60 + num % 100;
}
