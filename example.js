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
    skills: ["JavaScript", "Git", "Node.js"]
};

// 배열 관련 함수들
function findMax(numbers) {
    return Math.max(...numbers);
}

function findMin(numbers) {
    return Math.min(...numbers);
}

function sortArray(numbers, ascending = true) {
    return ascending ? 
        numbers.slice().sort((a, b) => a - b) : 
        numbers.slice().sort((a, b) => b - a);
}

// 문자열 처리 함수들 (새로 추가됨)
function capitalizeWords(str) {
    return str.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

// 날짜 관련 함수들 (새로 추가됨)
function getCurrentDate() {
    return new Date().toLocaleDateString('ko-KR');
}

function getDaysUntilNewYear() {
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1);
    const diffTime = newYear - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// 간단한 인사말 함수
function greet(name) {
    return `안녕하세요, ${name}님! Git 연습을 시작해보세요.`;
}

// 테스트 실행
console.log("=== Git 연습용 JavaScript 파일 (dev 브랜치 수정) ===");
console.log(greet(user.name));
console.log("덧셈 결과:", add(5, 3));
console.log("곱셈 결과:", multiply(4, 7));
console.log("최댓값:", findMax([1, 5, 3, 9, 2]));
console.log("정렬된 배열:", sortArray([1, 5, 3, 9, 2]));
console.log("문자열 대문자화:", capitalizeWords("hello world git"));
console.log("문자열 뒤집기:", reverseString("JavaScript"));
console.log("회문 검사:", isPalindrome("level"));
console.log("오늘 날짜:", getCurrentDate());
console.log("새해까지 남은 일수:", getDaysUntilNewYear());

// TODO: 더 많은 기능들을 추가해보세요!
// - 객체 관리 함수
// - 파일 처리 함수
// - API 호출 함수 