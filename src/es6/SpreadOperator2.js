// SpreadOperator2.js

// object 타입에서 전개 연산자 사용하기

console.log('----- ES5 -----');

var objOne = {one: 1, two: 2, other: 0};
var objTwo = {three: 3, four: 4, other: -1};

var combined = {
  one: objOne.one,
  two: objOne.two,
  three: objTwo.three,
  four: objTwo.four
};
console.log(combined);

// assign()함수를 이용하여 object 타입의 변수를 하나로 합함
// 첫번째 매개변수는 합쳐질 대상, 두번째, 세번째 매개변수를 첫번째 매개변수에 합함
// 동일한 키를 사용한 데이터가 있을 경우 뒤쪽에 나오는 키의 값으로 합쳐짐
var combined = Object.assign({}, objOne, objTwo);
console.log(combined);

// 위에 있는 함수와 매개변수의 순서가 다르기 때문에 결과도 달라짐
var combined = Object.assign({}, objTwo, objOne);
console.log(combined);

var others = Object.assign({}, combined);
console.log(others);

delete others.other;
console.log(others);

console.log('\n----- ES6 -----\n');

var combined = { ...objOne, ...objTwo };
console.log(combined);

var combined = {...objTwo, ...objOne};
console.log(combined);

var {other, ...others} = combined;
console.log(other);
console.log(others);









