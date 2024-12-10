function solution(n, control) {
    control.split("").forEach((el) => {
        switch(el) {
            case 'w' : n++; break;
            case 's' : n--; break;
            case 'd' : n += 10; break;
            case 'a' : n -= 10; break;
        }
        
    })
    return n;
}