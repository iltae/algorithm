function solution(dirs) {
    const direction = { "U": [-1, 0], "D": [1, 0], "R": [0, 1], "L": [0, -1] };
    let current = [0, 0];
    const visited = new Set();

    dirs.split("").forEach(el => {
        let next = [current[0] + direction[el][0], current[1] + direction[el][1]];

        if (next[0] >= -5 && next[1] >= -5 && next[0] <= 5 && next[1] <= 5) {

            const path1 = `${current[0]},${current[1]}-${next[0]},${next[1]}`;
            const path2 = `${next[0]},${next[1]}-${current[0]},${current[1]}`;

            if (!visited.has(path1) && !visited.has(path2)) {
                visited.add(path1);
            }

            current = next;
        }
    });

    return visited.size;
}
