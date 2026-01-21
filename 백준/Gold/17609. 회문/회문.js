const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const T = Number(input[0]);

function isPalindrome(str, l, r) {
    while (l < r) {
        if (str[l] !== str[r]) return false;
        l++;
        r--;
    }
    return true;
}

for (let t = 1; t <= T; t++) {
    const str = input[t];
    let left = 0, right = str.length - 1;
    let counts = 0;

    while (left < right) {
        if (str[left] !== str[right]) {
            const skipLeft = isPalindrome(str, left + 1, right);
            const skipRight = isPalindrome(str, left, right - 1);

            if (skipLeft || skipRight) {
                counts = 1;
            } else {
                counts = 2;
            }
            break;
        }
        left++;
        right--;
    }

    console.log(counts);
}