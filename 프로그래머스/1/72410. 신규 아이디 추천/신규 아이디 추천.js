function solution(new_id) {
    // 1단계: 소문자로 변환
    const step1 = new_id.toLowerCase();
    
    // 2단계: 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자 제거
    const step2 = step1.replace(/[^a-z0-9-_.]/g, '');
    
    // 3단계: 마침표가 두 번 이상 연속된 부분을 하나의 마침표로 치환
    const step3 = step2.replace(/\.{2,}/g, '.');
    
    // 4단계: 첫 번째와 마지막 마침표 제거 (더 간결한 방법)
    const step4 = step3.replace(/^\.|\.$/g, '');
    
    // 5단계: 비어있으면 'a'로 설정
    let step5 = step4 === '' ? 'a' : step4;
    
    // 6단계: 길이가 16자 이상이면 15자까지 자르고 마지막이 마침표면 제거
    const step6_1 = step5.length >= 16 ? step5.slice(0, 15) : step5;
    let step6_2 = step6_1.replace(/\.$/, '')

    // 7단계: 길이가 2자 이하일 경우 마지막 문자를 반복하여 길이가 3이 되도록 만듦
    if (step6_2.length <= 2) {
        const lastChar = step6_2[step6_2.length - 1];
        while (step6_2.length < 3) {
            step6_2 += lastChar;
        }
    }

    return step6_2;
}
