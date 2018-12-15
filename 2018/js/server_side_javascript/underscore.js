var _ = require('underscore');
var arr = [3,6,9,1,12];
console.log(arr[0]);
console.log(_.first(arr)); //underscore의 모듈이 가지고 있는 메소드 first = 첫번째 원소를 리턴

console.log(arr[arr.length-1]); // 마지막 원소 나오게 하기
console.log(_.last(arr)); // 마지막 원소 나오게 하기