function solution(num_list) {
    const result = num_list.reduce(([sum1, sum2], cur) => {
        sum1 *= cur;
        sum2 += cur;
        return [sum1, sum2]
    }, [1, 0]).map((el,idx) => idx !== 0 ? el ** 2 : el);
    return result[0] < result[1] ? 1 : 0
}