function solution(video_len, pos, op_start, op_end, commands) {
    let now = convert(pos) >= convert(op_start) && convert(pos) < convert(op_end) ? convert(op_end) : convert(pos);
    commands.forEach(command =>{
        if(command === "prev") {
            now = now - 10 < 0 ? 0 : now - 10;
        } else {
            now = now + 10 < convert(video_len) ? now + 10 : convert(video_len);
        }
        
        if (now >= convert(op_start) && now < convert(op_end)) {
            now = convert(op_end);
        }
    })
    return String(Math.floor(now / 60)).padStart(2, 0) + ":" + String(now % 60).padStart(2, 0);
}

function convert(time) {
    return time.split(":").reduce((acc, cur, idx) => idx === 0 ? acc + +cur * 60 : acc + +cur, 0);
}