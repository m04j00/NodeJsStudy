// 3 (1.5초 후)
const timeout = setTimeout(() => {
    console.log('1.5초 후 실행');
}, 1500);

// 2 (1초 후), 4
const interval = setInterval(() => {
    console.log('1초마다 실행');
}, 1000);

// clearTimeout에 의해 실행되지 않음
const timeout2 = setTimeout(() => {
    console.log('실행되지 않습니다.');
}, 3000);

setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);
}, 2500);

// 1
const immediate = setImmediate(() => {
    console.log('즉시 실행');
});

// clearImmediate에 의해 실행되지 않음
const immediate2 = setImmediate(() => {
    console.log('실행되지 않습니다.');
});

clearImmediate(immediate2);