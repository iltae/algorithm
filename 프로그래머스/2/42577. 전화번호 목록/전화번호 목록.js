function solution(phone_book) {                                
    return !phone_book.sort().some((value, index, arr) => arr[index + 1]?.indexOf(value) === 0);
}