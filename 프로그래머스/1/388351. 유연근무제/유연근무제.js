function format(number) {
    let hour = Math.floor(number / 100);
    let minute = number % 100;
    
    minute += 10;
    
    if (minute >= 60) {
        hour += 1;
        minute -= 60;
    }
    
    return hour * 100 + minute;
}

function solution(schedules, timelogs, startday) {
    let answer = 0;
    
    schedules.forEach((schedule, personIdx) => {
        const limit = format(schedule);
        
        for (let i = 0; i < timelogs[personIdx].length; i++) {
            const dayOfWeek = (i + startday - 1) % 7 + 1;
            if (dayOfWeek !== 6 && dayOfWeek !== 7) {
                if (timelogs[personIdx][i] > limit) {
                    return;
                }
            }
        }
        
        answer++;
    });
    
    return answer;
}
