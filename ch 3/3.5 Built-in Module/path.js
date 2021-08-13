const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep);  // 경로 구분자 (윈도 \, POSIX /)
console.log('path.delimiter:', path.delimiter);  // 환경 변수 구분자
//process.env.PATH를 입력하면 여러 개의 경로가 이 구분자로 구분되어 있음. (윈도 ; , POSIX :)
console.log('------------------------------');
console.log('path.dirname():', path.dirname(string));  // 파일이 위치한 폴더 경로
console.log('path.extname():', path.extname(string));  // 파일 확장자 
console.log('path.basename():', path.basename(string));  // 파일의 이름 표시 
console.log('path.basename():', path.basename(string, path.extname(string)));
console.log('------------------------------');
console.log('path.parse()', path.parse(string));  // 파일 경로를 root, dir, base, ext, name으로 분리 
console.log('path.format():', path.format({  // path.parse()한 객체를 파일 경로로 합침
  dir: 'C:\\users\\zerocho',
  name: 'path',
  ext: '.js',
}));
console.log('path.normalize():', path.normalize('C://users\\\\zerocho\\\path.js'));  // / , \ 를 실수로 여러 번 사용했거나 혼용했을 때 정상적인 경로로 변환함.
console.log('------------------------------');
console.log('path.isAbsolute():', path.isAbsolute('C:\\'));  // 파일의 경로가 정대 경로인지 상대 경로인지 true / false로 반환
console.log('path.isAbsolute():', path.isAbsolute('./home'));  
console.log('------------------------------');
console.log('path.relative():', path.relative('C:\\users\\zerocho\\path.js', 'C:\\'));  //  경로를 두 개 넣으면 첫 번째 경로에서 두 번째 경로로 가는 방법을 알려줌
console.log('path.join():', path.join(__dirname, '..', '..', '/users', '.', '/zerocho'));  // 여러 인수를 넣으면 하나의 경로로 합침, 부모 디렉터리, 현 위치도 알아서 처리함
console.log('path.resolve():', path.resolve(__dirname, '..', 'users', '.', '/zerocho'));  // path.join()과 비슷하지만 차이가 있음.
/*
join과 resolve의 차이
/를 만나면 path.resolve는 정대 경로로 인식해 앞의 경로를 무시함.
path.join은 상대 경로로 처리함.

path.join('\a', '/b', 'c'); //   /a/b/c/
path.resolve('\a', '/b', 'c'); //   /b/c/
*/