### startsWith, endsWith
```js
let str = "Hello, world!";

console.log(str.startsWith("Hello"));  // true
console.log(str.startsWith("world"));  // false
console.log(str.startsWith("lo", 3));  // true
```

```js
let str = "Hello, world!";

console.log(str.endsWith("world!"));  // true
console.log(str.endsWith("Hello"));   // false
console.log(str.endsWith("world", 12)); // true
```

### repeat
```js
let str = "abc";

// 문자열을 3번 반복
console.log(str.repeat(3));  // "abcabcabc"

// 문자열을 0번 반복 (빈 문자열 반환)
console.log(str.repeat(0));  // ""

// 문자열을 5번 반복
console.log(str.repeat(5));  // "abcabcabcabcabc"

// 문자열을 1번 반복 (원래 문자열 그대로)
console.log(str.repeat(1));  // "abc"

// 문자열을 음수로 반복하려고 할 때 (오류 발생)
try {
  console.log(str.repeat(-1));  // Error
} catch (e) {
  console.log(e.message);  // "repeat count must be non-negative"
}
```

### findIndex, findLastIndex
```js
let arr = [5, 12, 8, 130, 44];

// 배열에서 10보다 큰 첫 번째 요소의 인덱스를 찾기
let index = arr.findIndex(num => num > 10);
console.log(index);  // 1 (12가 10보다 크므로 첫 번째로 반환됨)

// 조건을 만족하는 요소가 없을 경우 -1 반환
let noIndex = arr.findIndex(num => num > 200);
console.log(noIndex);  // -1 (조건을 만족하는 요소가 없음)
```

```js
let arr = [5, 12, 8, 130, 44];

// 배열에서 10보다 큰 마지막 요소의 인덱스를 찾기
let lastIndex = arr.findLastIndex(num => num > 10);
console.log(lastIndex);  // 4 (44가 마지막으로 10보다 큼)

// 조건을 만족하는 요소가 없을 경우 -1 반환
let lastNoIndex = arr.findLastIndex(num => num > 200);
console.log(lastNoIndex);  // -1 (조건을 만족하는 요소가 없음)
```

### padStart, padEnd
```js
let str = "42";

// 길이를 5로 맞추기 위해 '0'을 시작에 추가
console.log(str.padStart(5, '0'));  // "00042"

// 공백이 기본값이므로 '0'을 사용하지 않고 길이를 6으로 맞추기
console.log(str.padStart(6));  // "  42"

// 'abc'로 채우기
console.log(str.padStart(7, 'abc'));  // "abcabc42"
```

```js
let str = "42";

// 길이를 5로 맞추기 위해 '0'을 끝에 추가
console.log(str.padEnd(5, '0'));  // "42000"

// 공백이 기본값이므로 '0'을 사용하지 않고 길이를 6으로 맞추기
console.log(str.padEnd(6));  // "42    "

// 'abc'로 채우기
console.log(str.padEnd(7, 'abc'));  // "42abcab"
```

### splice, slice
```js
let arr = [1, 2, 3, 4, 5];

// 2번째 인덱스부터 2개 요소 삭제
let removed = arr.splice(2, 2);
console.log(arr);      // [1, 2, 5]
console.log(removed);  // [3, 4]

// 1번째 인덱스에 새로운 요소 삽입
arr.splice(1, 0, 'a', 'b');
console.log(arr);      // [1, 'a', 'b', 2, 5]
```

```js
let arr = [1, 2, 3, 4, 5];

// 1번째 인덱스부터 3번째 인덱스까지 (3번째 인덱스는 제외)
let newArr = arr.slice(1, 3);
console.log(arr);      // [1, 2, 3, 4, 5] (원본 배열은 변경되지 않음)
console.log(newArr);   // [2, 3]
```

### some, every, find
```js
let arr = [1, 2, 3, 4];
let hasEven = arr.some(num => num % 2 === 0);  // true
console.log(hasEven);
```

```js
let arr = [2, 4, 6, 8];
let allEven = arr.every(num => num % 2 === 0);  // true
console.log(allEven);
```

```js
let arr = [5, 12, 8, 130, 44];
let found = arr.find(num => num > 10);  // 12
console.log(found);
```

### flat
```js
const arr = [1, 2, [3, 4], 5];
const flattened = arr.flat();
console.log(flattened); // [1, 2, 3, 4, 5]

const arr = [1, 2, [3, [4, 5]]];
const flattened = arr.flat(2); // depth 2로 평탄화
console.log(flattened); // [1, 2, 3, 4, 5]

const arr = [1, [2, [3, [4, [5]]]]];
const flattened = arr.flat(Infinity);
console.log(flattened); // [1, 2, 3, 4, 5]
```

### charCodeAt, fromCharCode

```js
// 'A'를 'a'로 변환 (대문자에서 소문자)
let char = 'A';
let charCode = char.charCodeAt(0); // ASCII 코드 값 (65)
let newChar = String.fromCharCode(charCode + 32); // 97은 'a'의 코드
console.log(newChar); // 출력: 'a'

// 'a'를 'A'로 변환 (소문자에서 대문자)
let char2 = 'a';
let charCode2 = char2.charCodeAt(0); // ASCII 코드 값 (97)
let newChar2 = String.fromCharCode(charCode2 - 32); // 65는 'A'의 코드
console.log(newChar2); // 출력: 'A'
```
