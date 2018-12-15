# javascript

### 상속
	상속은 객체의 로직을 그대로 물려 받는 또 다른 객체를 만들 수 있는 기능


상속을 위한 기본 준비.
: 객체의 prototype이라는 특수한 약속되어있는 프로퍼티의 name이라는 프로퍼티를 준 것임.


**prototype**

: 어떤 빈 공간에 값을 넣어두고, 객체들이 가져다 쓰는 것.

[참고: 프로토타입 이해하기](https://medium.com/@bluesh55/javascript-prototype-이해하기-f8e67c286b67 "프로토타입 이해하기")


**상속**

새로운 생성자의 prototype에 기존 함수의 생성자 객체를 연결하면 새로운 생성자도 기존 함수의 메소드를 사용할 수 있게 된다.
	- Programmer.prototype = new Person();
	// 새로운생성자.prototype = new 기존 객체
	- Programmer가 Person의 기능을 상속하는 것


**상속 추가**

생성자 객체가 가지고 있지 않은 기능을 가질 수 있다.
	- Programmer.prototype.coding = function(){ return "hello world";}



