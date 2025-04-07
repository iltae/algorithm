function solution(common) {
    const diff1 = common[1] - common[0];
    const diff2 = common[2] - common[1];
    const diff3 = common[1] / common[0];
    return diff1 === diff2 ? common[common.length - 1] + diff1 : common[common.length - 1] * diff3 ;
}