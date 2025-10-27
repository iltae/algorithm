function solution(name, yearning, photo) {
    var answer = [];
    const Obj = {};
    
    for (let i = 0; i < name.length; i++) {
        Obj[name[i]] = yearning[i];
    }

    return photo.map(names => names.reduce((acc, cur) => Obj[cur] ? acc + Obj[cur] : acc, 0));
}