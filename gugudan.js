const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 구구단 출력 함수
function printMultiplicationTable(num) {
  console.log(`Multiplication table for ${num}:`);
  for (let i = 1; i <= 9; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

// 숫자 입력 함수
function askForNumber() {
  rl.question('Enter a number between 1 and 9 (or 0 to exit): ', (answer) => {
    const num = parseInt(answer);

    // 입력값이 0인 경우 프로그램 종료
    if (num === 0) {
      rl.close();
      return;
    }

    // 입력값이 유효한지 확인
    if (isNaN(num) || num < 1 || num > 9) {
      console.log('Invalid input. Please enter a number between 2 and 9.');
      askForNumber(); // 다시 숫자 입력 요청
    } else {
      printMultiplicationTable(num); // 구구단 출력
      askForNumber(); // 다음 숫자 입력 요청
    }
  });
}

askForNumber(); // 초기 실행
