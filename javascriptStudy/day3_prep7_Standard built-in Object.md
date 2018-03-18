# javascript

### 표준 내장 객체의 확장
	표준 내장 객체 : 자바스크립트가 기본적으로 가지고 있는 객체


**내장 객체를 확장하는 방법**

```javascript
Array.prototype.rand = function(){
    var index = Math.floor(this.length*Math.random());
    return this[index];
} //Array 배열 객체에 함수를 포함시킴 -> 내장 객체처럼 사용할 수 있다.
var arr = new Array('seoul','new york','ladarkh','pusan', 'Tsukuba');
console.log(arr.rand());
```
