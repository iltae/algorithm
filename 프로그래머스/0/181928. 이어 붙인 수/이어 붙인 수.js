function solution(num_list) {
    return +num_list.reduce((acc, cur) => cur % 2 === 0 ? acc + cur : acc, "") + +num_list.reduce((acc, cur) => cur % 2 === 1 ? acc + cur : acc, "");
}