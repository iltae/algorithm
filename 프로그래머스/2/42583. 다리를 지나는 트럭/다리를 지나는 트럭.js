function solution(bridge_length, weight, truck_weights) {
    
    // 결과값 time과 현재 다리 위에 있는 트럭 무게 weightOnBridge를 선언 및 기본값 0 할당
    let time = 0;
    let weightOnBridge = 0;
    
    // 다리의 길이만큼 0을 할당한 배열, 도로를 만듬
    let road = new Array(bridge_length).fill(0);
    
    // 다리에 입장할 트럭
    let currentTruck = truck_weights.shift();
    
    // 처음 입장하는 트럭
    road.push(currentTruck);
    // 다리에 트럭이 입장하고
    road.shift();
    // 맨 앞 트럭(또는 0)이 나가고
    weightOnBridge += currentTruck;
    // 다리 하중에 트럭의 무게가 추가되고
    time++;
    // 시간이 1초 지남
    
    // 다리에 트럭의 무게가 0이 될 때까지, 즉 다리에 트럭이 다 빠져나갈때까지
    while(weightOnBridge) {
        
        // 기본적으로 1초의 흐름에 다리의 맨 앞이 빠지는건 동일
        // 그리고 그만큼 현재 다리의 트럭 무게가 줄어듬
        weightOnBridge -= road.shift();
        currentTruck = truck_weights.shift();
        
        // 이제 트럭이 올라갈 수 있냐 마냐를 결정
        // 현재 다리의 트럭과 곧 입장할 트럭의 무게를 합쳐서 가능하면 진행 아니면 ㄱㄷ
        if(weightOnBridge + currentTruck <= weight) {
            road.push(currentTruck);
            weightOnBridge += currentTruck;
        } else {
            road.push(0);
            truck_weights.unshift(currentTruck);
        }
        
        time++
    }
    
    return time;
}