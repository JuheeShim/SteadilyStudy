### juhee wiki

* 메소드(method) : 객체의 속성 값으로 담겨진 함수
* 콜백(callback) : 함수가 다른 함수의 인자로 사용될 수 있는 것. 이를 통해 본 함수의 내용을 바꿀 수 있다.
* 클로저(closure) : 내부함수가 외부함수의 맥락(context)에 접근할 수 있는 것을 가르킨다. 
내부함수가 외부함수의 지역 변수에 접근 할 수 있고, 외부함수는 외부함수의 지역변수를 사용하는 내부함수가 소멸될 때까지 소멸되지 않는 특성을 의미한다.

* 인스턴스 : 객체를 통해 생성된 새로운 객체

```javascript
function func(x,y){
	return x+y;
	//function(함수 인스턴스를 생성하는 기본함수)은 객체다. func도 객체다.
	//func는 function의 인스턴스다.
	//func는 function의 프로퍼티와 메소드를 상속받는다.
}

var func = new Function("x", "y", "return x+y;");
//Function은 함수 인스턴스를 생성하는 생성자. 인스턴스를 생성하는데 사용하는 함수를 생성자라고 함.
//function도 생성자??? 함수 정의???
```

* 프로퍼티 : 객체 내의 변수
객체에 담긴 함수는 메서드라고 불리나, 프로퍼티라고도 불릴 수 있다.
var a = 'test'; -> 변수
this.b = 'test'; -> 메서드
//프로퍼티가 객체의 
//.은 object access operator이다. (.앞에 있는 것은 객체이다.)