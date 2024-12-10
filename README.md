### startsWith, endsWith
```
string.startsWith(searchString, position)
```
- searchString: 검사할 문자열입니다. 이 문자열이 string의 시작 부분에 있는지 확인합니다.
- position (선택적): 검색을 시작할 위치를 지정합니다. 기본값은 0이며, 이를 통해 문자열의 특정 위치부터 검사를 시작할 수 있습니다.
```
string.endsWith(searchString, length)
```
- searchString: 검사할 문자열입니다. 이 문자열이 string의 끝 부분에 있는지 확인합니다.
- length (선택적): 검사할 문자열의 길이를 지정할 수 있습니다. 기본값은 문자열의 전체 길이입니다. 이 매개변수는 검사할 문자열의 끝에서 검사 범위를 제한할 때 사용됩니다.

### repeat
```
string.repeat(count)
```
- count: 반복할 횟수를 지정하는 정수입니다. 이 값은 0 이상의 정수여야 합니다.
- 만약 count가 0이면 빈 문자열이 반환됩니다.
- 만약 count가 음수이거나 정수가 아닌 값일 경우 RangeError가 발생합니다.

### findIndex, findLastIndex
```
array.findIndex(callback(element, index, array), thisArg)
```
- callback: 배열의 각 요소에 대해 실행할 함수입니다.
  - element: 현재 처리되는 배열 요소입니다.
  - index: 현재 처리되는 요소의 인덱스입니다.
  - array: findIndex가 호출된 배열입니다.
- thisArg (선택적): callback 함수 내에서 사용할 this 값입니다.
```
array.findLastIndex(callback(element, index, array), thisArg)
```
- callback: findLastIndex() 메서드에서 각 요소에 대해 실행할 함수입니다.
  - element: 현재 처리되는 배열 요소입니다.
  - index: 현재 처리되는 요소의 인덱스입니다.
  - array: findLastIndex가 호출된 배열입니다.
- thisArg (선택적): callback 함수 내에서 사용할 this 값입니다.
