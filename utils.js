// 유틸리티 함수 모음 - dev 브랜치에서 새로 생성
// 다양한 도우미 함수들을 포함합니다

// 랜덤 관련 함수들
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan'];
    return colors[getRandomNumber(0, colors.length - 1)];
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// 검증 함수들
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phone) {
    const phoneRegex = /^010-\d{4}-\d{4}$/;
    return phoneRegex.test(phone);
}

function isStrongPassword(password) {
    // 최소 8자, 대문자, 소문자, 숫자, 특수문자 포함
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongRegex.test(password);
}

// 데이터 처리 함수들
function groupBy(array, key) {
    return array.reduce((groups, item) => {
        const group = item[key];
        if (!groups[group]) {
            groups[group] = [];
        }
        groups[group].push(item);
        return groups;
    }, {});
}

function removeDuplicates(array) {
    return [...new Set(array)];
}

function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof Array) return obj.map(item => deepClone(item));
    if (typeof obj === 'object') {
        const cloned = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                cloned[key] = deepClone(obj[key]);
            }
        }
        return cloned;
    }
}

// 시간 관련 함수들
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    
    if (hours > 0) {
        return `${hours}시간 ${minutes}분 ${remainingSeconds}초`;
    } else if (minutes > 0) {
        return `${minutes}분 ${remainingSeconds}초`;
    } else {
        return `${remainingSeconds}초`;
    }
}

function getTimeAgo(date) {
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) return `${diffInSeconds}초 전`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}분 전`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}시간 전`;
    return `${Math.floor(diffInSeconds / 86400)}일 전`;
}

// 테스트 데이터
const testUsers = [
    { name: '김철수', age: 25, city: '서울' },
    { name: '이영희', age: 30, city: '부산' },
    { name: '박민수', age: 25, city: '서울' },
    { name: '최지영', age: 28, city: '대구' }
];

// 테스트 실행
console.log("=== 유틸리티 함수 테스트 ===");
console.log("랜덤 숫자:", getRandomNumber(1, 100));
console.log("랜덤 색상:", getRandomColor());
console.log("배열 섞기:", shuffleArray([1, 2, 3, 4, 5]));
console.log("이메일 검증:", isValidEmail("test@example.com"));
console.log("전화번호 검증:", isValidPhoneNumber("010-1234-5678"));
console.log("비밀번호 강도:", isStrongPassword("StrongPass123!"));
console.log("도시별 그룹화:", groupBy(testUsers, 'city'));
console.log("중복 제거:", removeDuplicates([1, 2, 2, 3, 3, 4]));
console.log("시간 포맷:", formatTime(3725));
console.log("시간 전:", getTimeAgo(new Date(Date.now() - 3600000)));

// 모듈 내보내기 (Node.js 환경에서 사용할 경우)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getRandomNumber,
        getRandomColor,
        shuffleArray,
        isValidEmail,
        isValidPhoneNumber,
        isStrongPassword,
        groupBy,
        removeDuplicates,
        deepClone,
        formatTime,
        getTimeAgo
    };
} 