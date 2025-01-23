function solution(skill, skill_trees) {
    let answer = 0;
    const skill_set = skill.split("");
    
    skill_trees.forEach(el => {
        const temp = el.split("").filter(el => skill_set.includes(el)).join("");
        
        if(skill.startsWith(temp)) answer++;
    })
    
    return answer;
}