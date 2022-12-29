// ArrayMethod.js

// ES6에서 배열 관련 함수가 추가됨

// forEach() : 지정한 배열의 요소에 callback으로 지정한 함수의 내용을 실행하는 함수, 반환값이 없음
// 사용법 :
// 배열명.forEach(콜백함수(현재값이 저장될 변수, 현재index, 현재 배열 내용)) {
//    실행할 소스코드
// }

const fruits = ['사과', '배', '복숭아'];
console.log('원본 배열 : ' + fruits);

console.log('\n----- for문 사용 시 -----');
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log('\n----- for ~ in문 사용 시 -----');
for (const item in fruits) {
  console.log(fruits[item])
}

console.log('\n----- forEach문 사용 시 -----');
fruits.forEach(function (item) {
  console.log(item);
});

console.log('\n----- forEach문 매개변수 여러개 -----');
fruits.forEach(function (item, index) {
  console.log(`index : ${index}, value : ${item}`);
});

fruits.forEach(function (item, index, arrName) {
  console.log(`current array : ${arrName}, index : : ${index}, value : ${item}`);
});

// map() : forEach()와 같이 지정한 배열의 요소에 callback으로 지정한 함수의 내용을 실행하고 그 결과값을 배열로 반환하는 함수
// 사용법 :
// 배열명.map(콜백함수(현재값이 저장될 변수, 현재 index, 현재 배열 내용)) {
//    실행할 소스코드
//    return 반환값
// }

console.log('\n----- map 사용 -----\n');

const numbers = [4, 9, 16, 25];
console.log(`원본 배열 : `);
console.log(numbers);

let data = numbers.map(function (item) {
  console.log(`현재 값 : ${item}`);
  return item * 2;
});

console.log(`map 사용 후 데이터 : `);
console.log(data);

console.log('\n----- map()에서 매개변수 여러개 -----');

data = numbers.map(function (item, index) {
  console.log(`index : ${index}, value : ${item}`);
  return item * 2;
});

console.log('map 사용 후 데이터 : ');
console.log(data);

data = numbers.map(function (item, index, current) {
  console.log(`current array : ${current}, index : ${index}, value : {item}`);
  return item * 2;
});

console.log('map 사용 후 데이터 : ');
console.log(data);









