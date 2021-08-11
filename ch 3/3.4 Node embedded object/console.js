const string = 'bac';
const num = 1;
const bool = true;
const obj = {
    outside: {
        inside:{
            key : 'value',
        },
    },
};

console.time('전체 시간');
console.log('평범한 로그. 쉼표로 구분해 여러 값을 찍을 수 있음.');
console.log(string, num, bool);
console.error('에러 메시지는 console.error에');

console.table([{ name : 'Joohoney', birth: 1994}, {name : 'I.M', birth : 1996}]);

console.dir(obj, {colors: false, depth: 2});
console.dir(obj, {colors: true, depthL: 1});

console.time('시간 측정');
for(let i = 0; i < 100000; i++){}
console.timeEnd('시간 측정');

function b(){
    console.trace('에러 위치 추적');
}
function a(){
    b();
}
a();

console.timeEnd('전체 시간');