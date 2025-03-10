function solution(priorities, location) {
    
    // 각 요소 별 인덱스를 포함하여 배열 생성
    // 출력 순서에 맞게 정렬했을 때, 인덱스 값에 들어있는 값이 몇 번째에 있는지 찾기
    let withIndex = priorities.map((priority, index) => {
        return {
            priority: priority, index: index
        };
    });
    // [{"priority":2,"index":0},{"priority":1,"index":1},{"priority":3,"index":2},{"priority":2,"index":3}]

    let printQueue = [];

    while(withIndex.length > 0) {
        
        // 가장 앞에 있는 문서를 꺼내 확인
        let frontPaper = withIndex.shift();
        // 꺼낸 문서가 가장 큰 값인지 나머지와 비교
        // boolean 값으로 할당됨
        let hasHighPriority = withIndex.some(el => el.priority > frontPaper.priority);
        
        // 가장 큰 값, 즉 우선 순위가 가장 높다면 인쇄 목록에 추가
        // 아니라면 대기목록 마지막으로 보냄
        if (hasHighPriority) {
            withIndex.push(frontPaper); 
        } else {
            printQueue.push(frontPaper);
        }
    }
    
    // 대기목록이 정렬되면 객체안의 index값과 location이 일치하는 곧의 인덱스값을 구하고
    // 결과는 순서로 보여줘야하니 +1을 함
    return printQueue.findIndex(el => el.index === location) + 1;
}
