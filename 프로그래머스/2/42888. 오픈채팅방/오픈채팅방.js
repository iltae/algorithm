function solution(record) {
    const userInfo = {}, result = [];

    record.forEach(el => {
        const [status, uuid, nickname] = el.split(" ");
        
        switch(status) {
            case "Enter":
                userInfo[uuid] = nickname;
                result.push([uuid, "님이 들어왔습니다."]);
                break;
            case "Leave":
                result.push([uuid, "님이 나갔습니다."]);
                break;
            case "Change":
                userInfo[uuid] = nickname;
                break;
        }
    });

    return result.map(([uuid, message]) => userInfo[uuid] + message);
}
