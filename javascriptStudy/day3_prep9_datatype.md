# javascript

### data type
	객체와 객체가 아닌 것으로 구분할 수 있다.
	객체가 아닌 것 - 숫자, 문자열, 불리언(true/false),null,undefined

객체가 아닌 데이터 타입을 원시 데이터 타입(primitive type)이라고 한다.

**래퍼객체**
원시 데이터 타입과 객체가 서로 다르게 동작하는 것을 알아가보자.

```javascript
var str = 'coding';
console.log(str.length);        // 6
console.log(str.charAt(0));     // "C"
```
.은 object access operator이다. (.앞에 있는 것은 객체이다.)
위의 문자열은 메서드와 프로퍼티(객체 내 변수)를 가지고 있다. -> 근데 왜 객체가 아닐까?

 : 문자열은 원시 데이터 타입이다. 따라서 문자열과 관련된 어떤 작업을 하려고 할 때 자바스크립트는 임시로 문자열 객체를 만들고 사용이 끝나면 제거한다.


 ```javascript
 var str = 'coding';
str.prop = 'everybody';
console.log(str.prop);//undefined
//내부적으로 String 객체가 만들어져 prop 프로퍼티가 저장되지만 곧 제거되어서 결과는 undefined
 ```

레퍼객체(wrapper object) : 문자열과 관련해서 필요한 기능성을 객체지향적으로 제공해야 하는 필요 또한 있기 때문에 원시 데이터 형을 객체처럼 다룰 수 있도록 하기 위한 객체를 자바스크립트는 제공하고 있다.

레퍼객체로는 String, Number, Boolean이 있다. null과 undefined는 레퍼 객체가 존재하지 않는다.