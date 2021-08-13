const A = require('./globalA');

global.message = '안녕하세요.';

console.log(A());

/*
globalA 모듈의 함수는 global.message 값 반환함.
globalB.js 에서 global 객체에 속성명이 message인 값을 대입하고, 
globalA 모듈의 함수를 호출함.

콘솔 결과, globalB에서 넣은 global.message 값을 globalA에서도 접근할 수 있음. 
*/