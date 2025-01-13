function solution(today, terms, privacies) {
    const todayArr = today.split(".").map(Number);
    const period = {}, answer = [];

    terms.forEach(el => {
        const [type, months] = el.split(" ");
        period[type] = Number(months);
    });

    const todayDays = totalDays(todayArr);

    privacies.forEach((el, idx) => {
        const [date, type] = el.split(" ");
        const dateArr = date.split(".").map(Number);
        
        const privacyDays = totalDays(dateArr);
        const expirationDays = privacyDays + period[type] * 28;

        if (expirationDays <= todayDays) {
            answer.push(idx + 1);
        }
    });

    return answer;
}

function totalDays([year, month, day]) {
    return (year * 12 * 28) + (month * 28) + day;
}
