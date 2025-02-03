function solution(arr) {
    const result = [0, 0];

    function compress(x, y, size) {
        const firstValue = arr[x][y];
        let isUniform = true;

        for (let i = x; i < x + size; i++) {
            for (let j = y; j < y + size; j++) {
                if (arr[i][j] !== firstValue) {
                    isUniform = false;
                    break;
                }
            }
        }

        if (isUniform) {
            result[firstValue]++;
        } else {
            const halfSize = size / 2;
            compress(x, y, halfSize);
            compress(x, y + halfSize, halfSize);
            compress(x + halfSize, y, halfSize);
            compress(x + halfSize, y + halfSize, halfSize);
        }
    }

    compress(0, 0, arr.length);

    return result;
}
