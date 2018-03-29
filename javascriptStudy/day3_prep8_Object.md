# javascript

### Object
	Object객체는 객체의 가장 기본적인 형태를 가지고 있는 객체이다. javascript에서는 값을 저장하는 가장 기본적인 단위로 Object를 사용한다.

	Object객체의 prototype은 모든 객체의 원형이 된다. 모든 객체가 사용할 수 있는 공통적인 기능이다. 모든 객체가 사용할 수 있는 기능을 추가하고 싶을때도 Object의 prototype에 추가하면 된다.


**객체 사용법**
MDN에서 Fundamental object - Object를 확인한다. 
Object.메서드()와 Object.prototype.메서드()의 차이는?

```javascript
// ex)
// Object.keys() : 키 값을 배열로 리턴하는 코드
var arr = ["a","b","c"];
console.log('Object.keys(arr)',Object.keys(arr)); //인자로 값을 받음, Object라는 키워드는 생성자 함수임.
//Object.kets = function


//Object.prototype.toString() : 객체가 담고 있는 값이나 상태를 보기 좋게 출력해주는 것
var O = new Object();
console.log('o.toString()', o.toString()); //인자.메서드(), prototype소속. 
//object.prototype.toString = function
//어떠한 메서드가 prototype소속이라는 것은 Object생성자함수를 이용해서 new Object();

var a = new Array(1,2,3); //Object라고 하는 객체는 모든 객체의 부모이다. 따라서 Array라는 객체를 생성할때도 내부적으로는 Object를 부모로하는 객체임.
console.log('a.toString()', a.toString());
```

Object.메서드() : 자신만 쓸 수 있음
Object.prototype.메서드() : 모든 객체가 쓸 수 있음. 모든 객체가 Object를 상속하기 때문. 그래서 객체이름.메서드()로 사용 가능


**Object 확장**
```javascript
Object.prototype.contain = function(neddle) {
    for(var name in this){
        if(this[name] === neddle){
            return true;
        }
    }
    return false;
}
var o = {'name':'egoing', 'city':'seoul'}
console.log(o.contain('egoing'));

//모든 객체에 contain을 사용하고 싶을때, prototype이라는 생성자의 property를 변경.
var a = ['egoing','leezche','grapittie'];
console.log(a.contain('leezche'));
```

**Object 확장의 위험**
모든 객체에 영향을 주기 때문에 확장하지 않는 것이 좋다.
Object나 메서드를 추가하는 것은 신중하게 해야 한다.

- hasOwnProperty로 해당 객체의 소속인지 체크해서 문제를 회피할 수 있다.

