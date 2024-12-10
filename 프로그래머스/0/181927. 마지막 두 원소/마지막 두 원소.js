function solution(num_list) {
    const len = num_list.length - 1, last = num_list[len], prev = num_list[len - 1];
    if(last > prev) {
        num_list.push(last - prev);
    } else {
        num_list.push(last * 2);
    }
    return num_list;
}