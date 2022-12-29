import {name, job, gender, getInfo} from './MyMod1.mjs';
import {num1, num2, sum} from "./MyMod2.mjs";
import sub from "./MyMod2.mjs";

// node.js 가 ES6 버전이 나오기 이전부터 모듈화 시스템을 사용하고 있었음
// node.js가 기본적으로 사용하던 방식이 CommonJS 방식의 모듈 시스템을 사용하고 있었음
// ES6 가 발표되면서 import/export를 지원하게 됨
// 기본 방식은 CommonJS으로 사용되고 ES6방식을 사용하려면 확장자가 .mjs를 사용하던지, package.json 파일에 type:module를 추가하여 설정을 해야 함

console.log(name);
console.log(job);
console.log(gender);
console.log(getInfo());

console.log(`첫번째 숫자 : ${num1} + 두번째 숫자 : ${num2} 의 값 : ${sum()}`);
console.log(`sub() 실행 : ${sub()}`);
