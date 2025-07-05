// Git 연습용 JavaScript 예시 파일
// 이 파일을 통해 Git의 기본 명령어들을 연습해보세요

// 간단한 계산기 함수들
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("0으로 나눌 수 없습니다!");
    }
    return a / b;
}

// 사용자 정보를 담는 객체
const user = {
    name: "Git 학습자",
    email: "learner@example.com",
    skills: ["JavaScript", "Git"]
};

// 배열 관련 함수들
function findMax(numbers) {
    return Math.max(...numbers);
}

function findMin(numbers) {
    return Math.min(...numbers);
}

// 간단한 인사말 함수
function greet(name) {
    return `안녕하세요, ${name}님! Git 연습을 시작해보세요.`;
}

// 테스트 실행
console.log("=== Git 연습용 JavaScript 파일 ===");
console.log(greet(user.name));
console.log("덧셈 결과:", add(5, 3));
console.log("곱셈 결과:", multiply(4, 7));
console.log("최댓값:", findMax([1, 5, 3, 9, 2]));

// TODO: 더 많은 기능들을 추가해보세요!
// - 문자열 처리 함수
// - 날짜 관련 함수
// - 배열 정렬 함수 