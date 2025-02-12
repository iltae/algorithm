function solution(m, musicinfos) {
    const arr = musicinfos.map((el, index) => {
        const [start, end, title, melody] = el.split(",");
        const playTime = format(end) - format(start);
        const temp = processMelody(melody);
        const totalMelody = playTime > temp.length ? 
            melody.repeat(Math.floor(playTime / temp.length)) + temp.slice(0, playTime % temp.length)
            : temp.slice(0, playTime);
        return { title, totalMelody, playTime, index };
    });

    const result = arr.filter(el => {
        const processedMelody = processMelody(el.totalMelody);
        return processedMelody.includes(processMelody(m));
    });

    if (result.length > 0) {
        result.sort((a, b) => {
            return b.playTime - a.playTime || a.index - b.index;
        });
        return result[0].title;
    }

    return "(None)";
}

function format(str) {
    const [hour, minute] = str.split(":").map(Number);
    return hour * 60 + minute;
}

function processMelody(melody) {
    return melody.replace(/C#/g, "c")
                 .replace(/D#/g, "d")
                 .replace(/F#/g, "f")
                 .replace(/G#/g, "g")
                 .replace(/A#/g, "a")
                 .replace(/B#/g, "b");
}
