function solution(want, number, discount) {
    const map = {};
    
    for(let i = 0; i < want.length; i++) {
        map[want[i]] = (map[want[i]] || 0) + number[i];
    }
    
    let count = 0;
    
    for(let i = 0; i <= discount.length - 10; i++) {
        const temp = discount.slice(i, i + 10);
        const copy = {...map};
        
        if(!temp.every(el => want.includes(el))) {
            continue;
        }
        
        temp.forEach(el => {
            copy[el]--;
        })
        
        if(Object.values(copy).every(el => el <= 0)) {
            count++;
        }
    }

    return count;
}