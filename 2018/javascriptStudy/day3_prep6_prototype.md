# javascript

### prototype
	자바스크립트 객체지향을 지탱하는 핵심 기능
	함수는 객체다. 그러므로 생성자로 사용될 함수도 객체다. 객체는 프로퍼티를 가질 수 있는데 prototype이라는 프로퍼티는 용도가 약속되어 있는 특수한 프로퍼티다. prototype에 저장된 속성들은 생성자를 통해서 객체가 만들어질 때 그 객체에 연결된다.

```javascript
function a(){
	a.prototype.run = true;
}

function b(){
	b.prototype = new a();
}
```
*주의* a.prototype = b.prototype으로 작성할 경우 a.prototype 값을 변경하면 연쇄적으로 변경되기 때문에 생성자 객체를 만들어야한다.